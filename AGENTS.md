# Project implementation notes

- Preserve the existing storefront markup, styling, and `public/store/` design assets when implementing backend work.
- Treat browser localStorage, hardcoded catalog entries, wallet balances, and simulated providers as local development demo data only.
- Production game, package, region, auth, and order data must come from the Supabase-backed server APIs.
- Never add real provider credentials or expose `SUPABASE_SERVICE_ROLE_KEY` to browser code. Add real integrations only from approved provider documentation and register adapters explicitly in `backend/providers/registry.js`.
- A payment can become paid only after a provider adapter verifies the original webhook signature and the database accepts its idempotent event. A top-up can become completed only after a configured game provider confirms delivery.
- Keep authorization server-side and database access constrained by RLS. Never add a browser-only admin check or a fake production success path.
- Run `npm run lint`, `npm test`, and `npm run build` after implementation changes. Integration checks that need a real Supabase project or provider sandbox must be reported as unavailable when credentials are absent.
