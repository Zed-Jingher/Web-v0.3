# Jeff Topup

The existing storefront design and game artwork are preserved in `public/store/`. The project uses Next.js 15, React 19, Supabase PostgreSQL/Auth, and a static storefront served by Next.js. Production catalog, package, region, auth, order-history, and admin-read APIs use database records. Payment, player verification, and game-credit delivery remain unavailable until authorized provider adapters are configured.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm.cmd install`.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and the project's publishable key in `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (legacy anon keys remain supported as a fallback).
4. Run `npm.cmd run dev` and open `http://localhost:3000`.

Without Supabase environment variables, catalog, auth, and order APIs return an explicit `503`. The storefront enables its demo catalog and simulations only on loopback hosts (`localhost`, `127.0.0.1`, and `[::1]`); any other hostname uses production mode. Staging disables browser simulations. Demo orders, prices, balances, saved players, notifications, and seller tools are browser-local and are never production account data.

## Next.js and Supabase

- `/` preserves the existing storefront by redirecting to `/store/index.html`.
- `/api/health` reports configured integration readiness without exposing secrets.
- `/api/games` and `/api/games/[slug]/packages` read active catalog data from Supabase.
- `/api/games/[slug]/packages?resource=regions` reads active game regions.
- `POST /api/player-verification` requires a signed-in account and calls the registered player-verification provider. The storefront repeats server-side validation before it creates a PayWay payment attempt.
- `/api/auth/sign-up`, `/api/auth/sign-in`, `/api/auth/sign-out`, and `/api/auth/me` use Supabase Auth server cookies.
- `/api/orders` requires an authenticated user and calls the database `create_pending_order` function. Prices, package quantities, currency, discounts, and order numbers come from database records, not client input.
- `/api/orders/mine` returns the signed-in user's orders and supports `?id=<order-uuid>` for owner-scoped details.
- `GET /api/orders?admin=1` verifies an active `ADMIN` or `SUPER_ADMIN` role on the server and returns a read-only overview through RLS.
- `POST /api/payments` creates a payment attempt only when payment, player validation, and an idempotent top-up orchestrator are registered, and the server-only service-role key is configured. It never marks an order paid.
- `backend/providers/PayWayPaymentProvider.js` implements ABA PayWay hosted checkout, transaction status checks, and signed webhook normalization. It sends signed checkout fields from the browser to ABA's hosted checkout; the API key stays on the server. Configure `PAYWAY_ENV` as `sandbox` or `production`, `PAYWAY_MERCHANT_ID`, and server-only `PAYWAY_API_KEY`, then set `PAYMENT_PROVIDER=aba_payway`. Leave `PAYWAY_PAYMENT_OPTION` blank to let PayWay show payment options enabled on the merchant account. Configure the PayWay callback/return URL to `https://<your-domain>/api/webhooks` and whitelist the merchant domain as required by ABA. The provider does not enable the checkout route until player validation, top-up delivery, and idempotent paid-order orchestration are also configured.
- In production mode the storefront only offers ABA PayWay after Supabase, PayWay, player verification, game top-up, top-up orchestration, and trusted payment storage are all ready. It creates a database-priced order, requests signed hosted-checkout fields from `/api/payments`, and posts them to an allowlisted PayWay sandbox or production endpoint. Card and bank details are entered on ABA's hosted checkout.
- Keep this in sandbox until ABA confirms the purchase-request hash field sequence and payment-option values for the merchant account. The public current developer guide documents the fields and callback signature but does not specify the request-hash input order.
- `POST /api/webhooks` accepts only provider-normalized events from an explicitly registered payment adapter. ABA PayWay callbacks are verified with the `X-PayWay-HMAC-SHA512` header. When a PayWay callback profile sends only a transaction reference and status, the adapter confirms the status, amount, and currency with PayWay before normalizing it. The database checks the payment reference, amount, currency, state transition, and event idempotency. Paid events are dispatched to the registered top-up orchestrator; retries may dispatch again, so that orchestrator must be idempotent.
- The provider registry includes ABA PayWay only when merchant credentials and a valid PayWay environment are configured. Player-verification and top-up providers still require authorized adapters. `NOT_CONFIGURED` remains the shipped state.
- `supabase/migrations/20261001000100_initial_schema.sql` creates the initial relational schema, auth profile trigger, RLS policies, restricted write grants, and pending-order procedure. `supabase/migrations/20261002000100_order_payment_lifecycle.sql` adds order transitions, payment-attempt RPCs, verified-webhook persistence, and duplicate-event protection. Apply migrations in order with `supabase db push`. `database/schema.sql` contains the baseline followed by the lifecycle upgrade for reference.
- `SUPABASE_SERVICE_ROLE_KEY` is server-only and must never be prefixed with `NEXT_PUBLIC_`, returned by an API, or used in browser code. `.env.example` contains no credentials.

To initialize a Supabase project, install/use the Supabase CLI, run `supabase login`, link the project with `supabase link --project-ref <project-ref>`, then apply migrations with `supabase db push`. Configure the Supabase Auth site URL and redirect URLs for local and deployed domains.

### Admin setup

Sign up a normal account first. A Supabase project owner must assign `ADMIN` or `SUPER_ADMIN` to that account's `public.users.role` directly in the trusted Supabase dashboard. Signup metadata and browser state cannot grant an admin role. The current admin API is read-only; it does not provide production catalog edits, user changes, promotion management, or manual payment/top-up actions.

### Provider setup

ABA PayWay sandbox credentials can be requested through the official developer portal. Production credentials are issued by ABA. Use only the PayWay environment assigned to those credentials, and configure the merchant domain and callback before enabling the adapter. The PayWay API key is server-only. The top-up provider and idempotent `processPaidOrder` orchestrator must be connected before `POST /api/payments` will start checkout. Refunds are not exposed through the storefront yet. The project has JavaScript files and no separate `typecheck` script; `next build` performs the framework's type/config validation.

## Production readiness

This workspace does **not** contain a Supabase project, deployment credentials, ABA PayWay credentials, or an authorized game top-up/verification provider. It cannot accept purchases yet. The ABA PayWay adapter is implemented but stays unconfigured without merchant credentials, and checkout remains locked until player verification and idempotent game delivery are configured. Refunds, admin write actions, promotion management, and user-management actions remain incomplete. No endpoint marks payment successful without a verified provider webhook or claims that credits were delivered. The `/api/health` endpoint reports each integration as `NOT_CONFIGURED` until configured.

Before accepting real purchases:

1. Configure Supabase and add approved game/package catalog data and licensed artwork.
2. Obtain ABA PayWay sandbox credentials, configure the merchant callback URL and domain allowlist, then set the server-only PayWay environment variables and `PAYMENT_PROVIDER=aba_payway`. Verify checkout and signed callbacks with the ABA sandbox before switching to production credentials.
3. Add authorized player-verification and top-up adapters, then implement and test top-up transaction/callback orchestration before enabling `POST /api/payments`.
4. Add refund, admin write, promotion, profile, and notification workflows with database authorization and audit records.
5. Add rate limits, audit logs, monitoring, backups, and support/refund procedures; review and apply both SQL migrations against the target Supabase project.
6. Configure production environment variables in the hosting provider and deploy the Next.js app.

## Development checks

Run `npm run lint`, `npm test`, and `npm run build`. The automated tests cover local idempotency coordination and the in-process order state machine. Database/RLS behavior, payment providers, webhooks, and top-up delivery require a configured Supabase project and authorized provider sandbox credentials; those integrations are not testable from this repository alone.

Vercel can detect the Next.js project automatically. Build command: `npm run build`; output is handled by Next.js. Do not enable real payments or top-ups until provider integrations and production secrets are configured server-side.
