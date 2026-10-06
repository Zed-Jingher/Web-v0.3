const demoGames = [
  { id: "free-fire", name: "Free Fire", category: "Battle royale", initials: "FF", colors: ["#633e52", "#dd8a5f"], packages: [["100 Diamonds", 1.19], ["310 Diamonds", 3.49], ["520 Diamonds", 5.79], ["1,060 Diamonds", 11.49], ["2,180 Diamonds", 22.99], ["Weekly Membership", 2.19]], needsServer: false },
  { id: "mobile-legends", name: "Mobile Legends", category: "MOBA", initials: "ML", colors: ["#273e5b", "#5e9ab4"], packages: [["86 Diamonds", 1.49], ["172 Diamonds", 2.89], ["257 Diamonds", 4.29], ["514 Diamonds", 8.49], ["1,029 Diamonds", 16.99], ["Weekly Pass", 2.49]], needsServer: true },
  { id: "pubg-mobile", name: "PUBG Mobile", category: "Battle royale", initials: "PUBG", colors: ["#665038", "#d8a34c"], packages: [["60 UC", 0.99], ["325 UC", 4.99], ["660 UC", 9.99], ["1,800 UC", 24.99], ["3,850 UC", 49.99], ["8,100 UC", 99.99]], needsServer: false },
  { id: "genshin-impact", name: "Genshin Impact", category: "RPG", initials: "GI", colors: ["#354d68", "#7ab4c4"], packages: [["60 Genesis Crystals", 0.99], ["300 + 30 Crystals", 4.99], ["980 + 110 Crystals", 14.99], ["1,980 + 260 Crystals", 29.99], ["3,280 + 600 Crystals", 49.99], ["6,480 + 1,600 Crystals", 99.99]], needsServer: true },
  { id: "blood-strike", name: "Blood Strike", category: "Battle royale", initials: "BS", colors: ["#692f3f", "#ca6659"], packages: [["100 Gold", 0.99], ["300 Gold", 2.99], ["500 Gold", 4.99], ["1,000 Gold", 9.49], ["2,000 Gold", 18.99], ["5,000 Gold", 46.99]], needsServer: false },
  { id: "honor-of-kings", name: "Honor of Kings", category: "MOBA", initials: "HOK", colors: ["#51416c", "#c18a65"], packages: [["80 Tokens", 0.99], ["240 Tokens", 2.99], ["400 Tokens", 4.99], ["800 Tokens", 9.99], ["1,600 Tokens", 19.99], ["4,000 Tokens", 49.99]], needsServer: true },
  { id: "valorant", name: "Valorant", category: "Shooter", initials: "V", colors: ["#673742", "#c05a68"], packages: [["475 VP", 4.99], ["1,000 VP", 9.99], ["2,050 VP", 19.99], ["3,650 VP", 34.99], ["5,350 VP", 49.99], ["11,000 VP", 99.99]], needsServer: false },
  { id: "roblox", name: "Roblox", category: "RPG", initials: "R", colors: ["#36504b", "#66a28b"], packages: [["400 Robux", 4.99], ["800 Robux", 9.99], ["1,700 Robux", 19.99], ["4,500 Robux", 49.99], ["10,000 Robux", 99.99]], needsServer: false }
];
let games = demoGames;

games.forEach((game) => {
  game.shortDescription = {
    "free-fire": "Top up diamonds and memberships for Free Fire.",
    "mobile-legends": "Choose diamonds and passes for Mobile Legends: Bang Bang.",
    "pubg-mobile": "Add UC to your PUBG Mobile account.",
    "genshin-impact": "Get Genesis Crystals for your Genshin Impact account.",
    "blood-strike": "Top up gold and packs for Blood Strike.",
    "honor-of-kings": "Choose token packs for Honor of Kings.",
    valorant: "Add VP to your Valorant account.",
    roblox: "Choose a Robux package for your Roblox account."
  }[game.id];
  game.imageAssets = {
    game_name: game.name,
    game_logo: "",
    game_thumbnail: "",
    game_banner: "",
    product_image: "",
    gallery_images: [],
    game_icon: ""
  };
  game.productId = `GAME-${game.id.toUpperCase()}`;
});

const bundledGameImages = [
  { id: "bundled-free-fire-icon", gameId: "free-fire", filename: "free-fire.webp", url: "assets/game-icons/free-fire.webp", alt: "Free Fire game icon", credit: "SakTopup reference site game tile · reuse permission confirmed by user" },
  { id: "bundled-mobile-legends-icon", gameId: "mobile-legends", filename: "mobile-legends.webp", url: "assets/game-icons/mobile-legends.webp", alt: "Mobile Legends game icon", credit: "SakTopup reference site game tile · reuse permission confirmed by user" },
  { id: "bundled-pubg-mobile-icon", gameId: "pubg-mobile", filename: "pubg-mobile.webp", url: "assets/game-icons/pubg-mobile.webp", alt: "PUBG Mobile game icon", credit: "SakTopup reference site game tile · reuse permission confirmed by user" },
  { id: "bundled-blood-strike-icon", gameId: "blood-strike", filename: "blood-strike.webp", url: "assets/game-icons/blood-strike.webp", alt: "Blood Strike game icon", credit: "SakTopup reference site game tile · reuse permission confirmed by user" },
  { id: "bundled-honor-of-kings-icon", gameId: "honor-of-kings", filename: "honor-of-kings.webp", url: "assets/game-icons/honor-of-kings.webp", alt: "Honor of Kings game icon", credit: "SakTopup reference site game tile · reuse permission confirmed by user" },
  { id: "bundled-genshin-impact-icon", gameId: "genshin-impact", filename: "genshin-impact.png", url: "assets/game-icons/genshin-impact.png", alt: "Genshin Impact game icon", credit: "SakTopup reference site game tile · reuse permission confirmed by user" },
  { id: "bundled-valorant-icon", gameId: "valorant", filename: "valorant.png", url: "assets/game-icons/valorant.png", alt: "Valorant game icon", credit: "SakTopup reference site game tile · reuse permission confirmed by user" }
].map((image, order) => ({
  ...image,
  type: "game_icon",
  status: "available",
  owner: "bundled",
  mime: image.filename.endsWith(".png") ? "image/png" : "image/webp",
  size: 0,
  width: 0,
  height: 0,
  order,
  isMain: true,
  uploadedAt: "2026-10-01T00:00:00.000Z",
  blob: null
}));

const rewards = [
  { name: "55 Diamonds", points: 50, game: "Free Fire" },
  { name: "Weekly Pass", points: 100, game: "Mobile Legends" },
  { name: "275 Diamonds", points: 250, game: "Free Fire" },
  { name: "Monthly Card", points: 300, game: "Mobile Legends" }
];

const state = { game: null, package: null, category: "All", query: "", gameFilter: "All", payment: "KHQR", menuOpen: false, images: [], galleryIndex: 0, zoomed: false, playerVerified: false, orderSubmitting: false, activeOrderId: null, qrTimer: null, checkoutEmail: "" };
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const modalBackdrop = $("#modalBackdrop");
const modalContent = $("#modalContent");
const modalPanel = $("#modalPanel");
const gameGrid = $("#gameGrid");
const storageKeys = { orders: "topup-zone-orders", points: "topup-zone-points", favorites: "topup-zone-favorites", user: "topup-zone-user", sellerListing: "topup-zone-seller-listing", players: "jeff-topup-saved-players", notifications: "jeff-topup-notifications", pricing: "jeff-topup-pricing", wallet: "jeff-topup-demo-wallet" };
const imageTypes = [
  ["game_logo", "Game logo"],
  ["game_icon", "Game icon"],
  ["game_thumbnail", "Game thumbnail"],
  ["game_banner", "Game banner"],
  ["product_image", "Product image"],
  ["game_screenshot", "Game screenshot"],
  ["diamond_package_image", "Package image"],
  ["game_inventory_image", "Game inventory"],
  ["promotional_artwork", "Promotional artwork"],
  ["seller_screenshot", "Seller screenshot"],
  ["seller_proof", "Product proof"],
  ["seller_additional", "Additional image"]
];
const maxImageBytes = 10 * 1024 * 1024;
const imageDbName = "topup-zone-image-library";
const imageStoreName = "images";
let imageDbPromise;
const requestedEnv = new URLSearchParams(window.location.search).get("appEnv");
const configuredEnv = window.JEFF_TOPUP_CONFIG?.allowEnvOverride === true && requestedEnv
  ? requestedEnv
  : window.JEFF_TOPUP_CONFIG?.appEnv || "development";
const appEnv = ["development", "staging", "production"].includes(configuredEnv) ? configuredEnv : "invalid";
const mockProvidersEnabled = appEnv === "development";
const databaseCatalogEnabled = appEnv === "production";
if (databaseCatalogEnabled) games = [];
const featureStatuses = {
  "Game catalog": databaseCatalogEnabled ? "SUPABASE API" : "DEMO DATA",
  "Player verification": mockProvidersEnabled ? "MOCKED" : "NOT CONFIGURED",
  "Payment": mockProvidersEnabled ? "MOCKED" : "NOT CONFIGURED",
  "Top-up": mockProvidersEnabled ? "MOCKED" : "NOT CONFIGURED",
  "Order database": databaseCatalogEnabled ? "SUPABASE API" : "LOCAL DEMO",
  "Wallet": mockProvidersEnabled ? "MOCKED" : "NOT CONFIGURED",
  "Authentication": databaseCatalogEnabled ? "SUPABASE AUTH" : "LOCAL DEMO",
  "Notifications": mockProvidersEnabled ? "MOCKED" : "NOT CONFIGURED",
  "Administration": "NOT CONFIGURED"
};

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Unable to read ${key} from local storage.`, error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Unable to save ${key} to local storage.`, error);
    showToast("Your browser could not save this update. Check your storage settings.");
    return false;
  }
}

function getOrders() { return readStorage(storageKeys.orders, []); }
function orderIsComplete(order) { return /^COMPLETED/i.test(order.status || "") || order.status === "Completed (simulated)"; }
function orderIsRefunded(order) { return /^REFUNDED/i.test(order.status || ""); }
function orderIsFailed(order) { return /^(FAILED|CANCELLED|TIMEOUT)/i.test(order.status || "") || order.status === "Failed (simulated)"; }
function paymentIsPending(order) { return /^(PENDING|AWAITING)/i.test(order.paymentStatus || order.status || ""); }
function paymentIsSuccessful(order) { return /^(SUCCESS|PAID)/i.test(order.paymentStatus || ""); }
function getPoints() { return readStorage(storageKeys.points, 0); }
function money(value, currency = "USD") {
  const amount = Number(value).toFixed(2);
  return currency === "USD" ? `$${amount}` : `${currency} ${amount}`;
}
function getCheckoutEmail() {
  const profileEmail = readStorage(storageKeys.user, null)?.email;
  const candidate = (state.checkoutEmail || profileEmail || "").trim();
  state.checkoutEmail = candidate;
  return candidate;
}
function isValidCheckoutEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((email || "").trim());
}
function getPricingConfig() {
  const saved = readStorage(storageKeys.pricing, {});
  const stored = saved && typeof saved === "object" ? saved : {};
  const numeric = (key, fallback) => Number.isFinite(Number(stored[key])) && Number(stored[key]) >= 0 ? Number(stored[key]) : fallback;
  const minimumFee = numeric("minimumFee", 0);
  return {
    platformFeePercent: numeric("platformFeePercent", 0),
    sellerCommissionPercent: numeric("sellerCommissionPercent", 0),
    minimumFee,
    maximumFee: Math.max(minimumFee, numeric("maximumFee", 25))
  };
}
function quotePrice(subtotal, discount = 0) {
  if (databaseCatalogEnabled) {
    return { subtotal, discount, platformFee: 0, total: Math.max(0, subtotal - discount) };
  }
  const config = getPricingConfig();
  const rawFee = subtotal * config.platformFeePercent / 100;
  const platformFee = Math.min(config.maximumFee, Math.max(config.minimumFee, rawFee));
  return { subtotal, discount: 0, platformFee, total: subtotal + platformFee };
}
function updatePriceSummary() {
  if (!state.package) return;
  const quote = quotePrice(state.package.price, state.package.discountAmount || 0);
  const currency = state.package.currency || "USD";
  $("#summarySubtotal").textContent = money(quote.subtotal, currency);
  $("#summaryDiscount").textContent = money(quote.discount, currency);
  $("#summaryFee").textContent = money(quote.platformFee, currency);
  $("#summaryPrice").textContent = money(quote.total, currency);
  $("#mobileCheckoutPrice").textContent = money(quote.total, currency);
}
function gameById(id) { return games.find((game) => game.id === id); }
function selectedRegionLabel() {
  const regionId = $("#playerRegion").value;
  return state.game?.regions?.find((region) => region.id === regionId)?.name || regionId;
}

function mapCatalogGame(record) {
  const demo = demoGames.find((game) => game.id === record.slug);
  return {
    id: record.slug,
    databaseId: record.id,
    slug: record.slug,
    name: record.name,
    category: demo?.category || "Game credits",
    initials: (record.name || "GT").split(/\s+/).map((part) => part[0]).join("").slice(0, 4).toUpperCase(),
    colors: demo?.colors || ["#33394f", "#5e9ab4"],
    packages: [],
    regions: [],
    needsServer: Boolean(record.requires_server || record.requires_zone_id),
    requiresRegion: Boolean(record.requires_server),
    requiresZoneId: Boolean(record.requires_zone_id),
    shortDescription: record.description || `Choose a package for ${record.name}.`,
    productId: record.id,
    databaseCatalog: true
  };
}

async function loadProductionCatalog() {
  const response = await fetch("/api/games", { headers: { accept: "application/json" } });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "The live game catalog is unavailable.");
  games = Array.isArray(result.games) ? result.games.map(mapCatalogGame) : [];
  renderGames();
  renderHeroArtwork();
  renderAccountArtwork();
  if (!games.length) $("#emptyGames").textContent = "No active games are available yet.";
}

async function loadProductionIntegrationStatus() {
  if (!databaseCatalogEnabled) return;
  try {
    const response = await fetch("/api/health", { headers: { accept: "application/json" } });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) return;
    const integrations = result.integrations || {};
    featureStatuses["Game catalog"] = integrations.supabase || "NOT CONFIGURED";
    featureStatuses["Order database"] = integrations.supabase || "NOT CONFIGURED";
    featureStatuses.Authentication = integrations.supabase || "NOT CONFIGURED";
    featureStatuses.Payment = integrations.payment || "NOT CONFIGURED";
    featureStatuses["Player verification"] = integrations.playerVerification || "NOT CONFIGURED";
    featureStatuses["Top-up"] = integrations.topUp === "CONFIGURED" && integrations.topUpOrchestration === "CONFIGURED"
      ? "CONFIGURED"
      : "NOT CONFIGURED";
    featureStatuses.Administration = integrations.supabase === "CONFIGURED" ? "ROLE REQUIRED" : "NOT CONFIGURED";
  } catch (error) {
    console.error("Unable to load integration status.", { name: error?.name || "Error" });
  }
}

async function loadProductionGameData(game) {
  const encodedSlug = encodeURIComponent(game.slug);
  const [packageResponse, regionResponse] = await Promise.all([
    fetch(`/api/games/${encodedSlug}/packages`, { headers: { accept: "application/json" } }),
    fetch(`/api/games/${encodedSlug}/packages?resource=regions`, { headers: { accept: "application/json" } })
  ]);
  const [packageResult, regionResult] = await Promise.all([
    packageResponse.json().catch(() => ({})),
    regionResponse.json().catch(() => ({}))
  ]);
  if (!packageResponse.ok) throw new Error(packageResult.error || "Unable to load packages for this game.");
  if (!regionResponse.ok) throw new Error(regionResult.error || "Unable to load regions for this game.");
  if (state.game?.id !== game.id) return;

  game.packages = (packageResult.packages || []).map((item) => ({
    id: item.id,
    name: item.name,
    diamondAmount: item.diamond_amount,
    price: Number(item.price),
    currency: item.currency,
    discountPercentage: Number(item.discount_percentage || 0),
    popular: Boolean(item.is_popular)
  }));
  game.regions = regionResult.regions || [];
  $("#playerRegion").innerHTML = `<option value="">Select a region</option>${game.regions.map((region) => `<option value="${escapeHtml(region.id)}">${escapeHtml(region.name)}</option>`).join("")}`;
  renderPackageOptions(game);
}

function renderPackageOptions(game) {
  if (!game.packages.length) {
    $("#packageGrid").innerHTML = '<p class="modal-empty">No active packages are available for this game.</p>';
    return;
  }
  $("#packageGrid").innerHTML = game.packages.map((item, index) => {
    const name = Array.isArray(item) ? item[0] : item.name;
    const price = Array.isArray(item) ? Number(item[1]) : item.price * (1 - item.discountPercentage / 100);
    const popular = Array.isArray(item) ? index === 2 : item.popular;
    const label = databaseCatalogEnabled ? "DATABASE PRICE" : "DEMO DATA";
    return `<button class="package-option" type="button" data-package="${index}">
      ${popular ? '<span class="popular-label">POPULAR</span>' : ""}
      <span class="package-visual"><img src="assets/diamond-icon.svg" alt="" aria-hidden="true"></span>
      <span class="package-details"><strong>${escapeHtml(name)}</strong><small>${money(price, Array.isArray(item) ? "USD" : item.currency)} · ${label}</small></span>
    </button>`;
  }).join("");
}
function makeIdempotencyKey() {
  return crypto.randomUUID ? crypto.randomUUID() : `checkout-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
function notify(message, orderId = "") {
  if (!mockProvidersEnabled) return;
  const notifications = readStorage(storageKeys.notifications, []);
  notifications.unshift({ id: makeIdempotencyKey(), message, orderId, createdAt: new Date().toISOString() });
  saveStorage(storageKeys.notifications, notifications.slice(0, 50));
  showToast(message);
}

function getDemoWallet() {
  if (!mockProvidersEnabled) return { balance: 0, transactions: [] };
  const wallet = readStorage(storageKeys.wallet, null);
  if (wallet && Number.isFinite(wallet.balance) && Array.isArray(wallet.transactions)) return wallet;
  return { balance: 120, transactions: [] };
}

function saveDemoWallet(wallet) {
  return saveStorage(storageKeys.wallet, wallet);
}

function openDemoWallet(returnToCheckout = false) {
  if (!mockProvidersEnabled) return showToast("Wallet is disabled in production until a real wallet service is connected.");
  state.walletReturnToCheckout = returnToCheckout;
  const wallet = getDemoWallet();
  showModal(`
    <div class="modal-kicker">MOCK WALLET</div><h2 class="modal-title" id="modalTitle">Demo wallet</h2>
    <p class="modal-copy">For prototype testing only. This is not money, stored value, or a payment account.</p>
    <div class="wallet-balance"><span>DEMO BALANCE</span><strong>${money(wallet.balance)}</strong></div>
    ${mockProvidersEnabled ? '<div class="wallet-actions"><button class="outline-button" type="button" data-wallet-deposit="10">Simulate +$10 deposit</button><button class="outline-button" type="button" data-wallet-deposit="50">Simulate +$50 deposit</button></div>' : '<p class="demo-notice">Demo wallet actions are disabled in production.</p>'}
    ${wallet.transactions.length ? `<h3 class="timeline-title">Demo activity</h3><div class="order-list">${wallet.transactions.slice(0, 8).map((entry) => `<article class="order-item"><div class="order-item-head"><strong>${escapeHtml(entry.description)}</strong><span class="order-badge">${entry.amount >= 0 ? "+" : ""}${money(entry.amount)}</span></div><small>${new Date(entry.createdAt).toLocaleString()} · DEMO BALANCE</small></article>`).join("")}</div>` : '<div class="modal-empty">No demo wallet activity yet.</div>'}
    <p class="demo-notice">Deposits, purchases, and refunds only change local demo data in this browser. No real funds can be added or withdrawn.</p>
    ${returnToCheckout ? '<button class="modal-secondary" type="button" data-action="return-checkout">← Return to payment</button>' : ""}
  `);
}

function simulateWalletDeposit(amount) {
  if (!mockProvidersEnabled || ![10, 50].includes(amount)) return showToast("Demo wallet actions are unavailable in this environment.");
  const wallet = getDemoWallet();
  const now = new Date().toISOString();
  wallet.balance = Number((wallet.balance + amount).toFixed(2));
  wallet.transactions.unshift({ id: makeIdempotencyKey(), type: "deposit", description: "Simulated deposit", amount, createdAt: now });
  if (!saveDemoWallet(wallet)) return;
  if (state.walletReturnToCheckout) {
    state.payment = "Wallet";
    renderCheckout();
    showToast("Demo balance updated. No real funds were deposited.");
    return;
  }
  openDemoWallet();
}

async function simulateWalletRefund(orderId) {
  if (!mockProvidersEnabled || !paymentProvider) return showToast("Refund simulation is unavailable in this environment.");
  const orders = getOrders();
  const orderIndex = orders.findIndex((order) => order.id === orderId);
  if (orderIndex < 0) return showToast("Order not found in local history.");
  const order = orders[orderIndex];
  if (order.refundedAt) return showToast("This order has already been refunded in the demo.");
  if (!paymentIsSuccessful(order)) return showToast("Only a successfully simulated payment can be refunded.");
  if (state.orderSubmitting) return showToast("The current mock request is processing.");
  state.orderSubmitting = true;
  try {
    const providerRefund = await paymentProvider.simulateRefund({ order });
    const now = new Date().toISOString();
    order.status = "REFUNDED · SIMULATED";
    order.refundStatus = "COMPLETED · SIMULATED";
    order.refundReference = providerRefund.reference;
    order.refundedAt = now;
    order.updatedAt = now;
    order.timeline = [...(order.timeline || []), { status: "Refund completed (simulated)", description: "Demo-only refund state; no external payment was reversed.", at: now }];
    if (order.payment === "Wallet" && order.walletDebited) {
      const wallet = getDemoWallet();
      const refund = Number(order.total ?? order.price);
      if (!wallet.transactions.some((entry) => entry.type === "refund" && entry.orderId === orderId)) {
        wallet.balance = Number((wallet.balance + refund).toFixed(2));
        wallet.transactions.unshift({ id: makeIdempotencyKey(), orderId, type: "refund", description: `Demo refund for ${order.id}`, amount: refund, createdAt: now });
        if (!saveDemoWallet(wallet)) return;
      }
      order.walletBalanceAfter = wallet.balance;
    }
    orders[orderIndex] = order;
    if (!saveStorage(storageKeys.orders, orders)) return;
    notify(`Order ${order.id}: refund simulated; no real funds were returned.`, order.id);
    showOrderReceipt(order);
  } catch (error) {
    console.error("Demo refund simulation failed.", error);
    showToast("Demo refund simulation failed. No external payment was reversed.");
  } finally {
    state.orderSubmitting = false;
  }
}

function renderEnvironmentBadge() {
  const badge = $("#environmentBadge");
  const label = $("#environmentLabel");
  if (!badge || !label) return;
  const names = { development: "DEMO · DEV", staging: "STAGING · OFF", production: "PRODUCTION · PROVIDERS OFF", invalid: "ENV INVALID" };
  label.textContent = names[appEnv];
  badge.dataset.environment = appEnv;
}

function openFeatureStatus() {
  showModal(`
    <div class="modal-kicker">VERSION 4 · ENVIRONMENT</div>
    <h2 class="modal-title" id="modalTitle">Integration status</h2>
    <p class="modal-copy">Production game and package data and account authentication use server APIs. Payment, player verification, and top-up stay unavailable until authorized providers are configured.</p>
    <div class="environment-summary"><strong>APP_ENV=${escapeHtml(appEnv.toUpperCase())}</strong><span>${mockProvidersEnabled ? "Local-only demo simulations are enabled." : "Browser simulations are disabled."}</span></div>
    <div class="feature-status-list">${Object.entries(featureStatuses).map(([name, status]) => `<div class="feature-status-row"><span>${escapeHtml(name)}</span><strong class="feature-status-tag status-${status.toLowerCase().replaceAll(" ", "-")}">${escapeHtml(status)}</strong></div>`).join("")}</div>
    <p class="demo-notice">Development uses local simulations. Staging disables them. Production purchases remain blocked until database, signed payment handling, player validation, and game delivery are configured. Environment overrides are disabled in the shipped config.</p>
    <button class="modal-secondary" type="button" data-action="close-modal">Close</button>
  `);
}

class MockPlayerVerificationProvider {
  constructor() {
    this.mode = appEnv === "staging" ? "sandbox-simulation" : "mock";
  }

  async verifyPlayer({ gameId, playerId, serverId, needsServer }) {
    const valid = /^[a-z0-9_-]{4,24}$/i.test(playerId) &&
      (!needsServer || /^[a-z0-9_-]{1,12}$/i.test(serverId)) &&
      !playerId.toLowerCase().startsWith("invalid");
    return { valid, gameId, playerId, serverId, mode: this.mode };
  }
}

class MockPaymentProvider {
  constructor() {
    this.mode = appEnv === "staging" ? "sandbox-simulation" : "mock";
  }

  async simulatePayment({ order, outcome }) {
    return {
      status: outcome,
      reference: `DEMO-PAY-${order.id}`,
      mode: this.mode
    };
  }

  async simulateRefund({ order }) {
    return { accepted: true, reference: `DEMO-REFUND-${order.id}`, mode: this.mode };
  }
}

class MockTopUpProvider {
  constructor() {
    this.mode = appEnv === "staging" ? "sandbox-simulation" : "mock";
  }

  async createTopUp({ order, outcome }) {
    return {
      accepted: outcome === "success",
      reference: `DEMO-TOPUP-${order.id}`,
      status: outcome,
      mode: this.mode
    };
  }

  async checkTopUpStatus(reference) {
    return { reference, status: "success", mode: this.mode };
  }
}

const playerVerificationProvider = mockProvidersEnabled ? new MockPlayerVerificationProvider() : null;
const paymentProvider = mockProvidersEnabled ? new MockPaymentProvider() : null;
const topUpProvider = mockProvidersEnabled ? new MockTopUpProvider() : null;

function openImageDatabase() {
  if (!("indexedDB" in window)) return Promise.reject(new Error("This browser does not support local image storage."));
  if (!imageDbPromise) {
    imageDbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(imageDbName, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(imageStoreName)) {
          const store = db.createObjectStore(imageStoreName, { keyPath: "id" });
          store.createIndex("gameId", "gameId", { unique: false });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Could not open the image library."));
      request.onblocked = () => reject(new Error("The image library is blocked by another open tab. Close other copies and retry."));
    });
  }
  return imageDbPromise;
}

async function getAllImageRecords() {
  const db = await openImageDatabase();
  return new Promise((resolve, reject) => {
    const request = db.transaction(imageStoreName, "readonly").objectStore(imageStoreName).getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not load image records."));
  });
}

async function putImageRecord(record) {
  const db = await openImageDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(imageStoreName, "readwrite");
    const storedRecord = { ...record };
    delete storedRecord.objectUrl;
    delete storedRecord.src;
    transaction.objectStore(imageStoreName).put(storedRecord);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not save this image."));
    transaction.onabort = () => reject(transaction.error || new Error("Saving this image was cancelled."));
  });
}

async function removeImageRecord(id) {
  const image = state.images.find((record) => record.id === id);
  if (image?.owner === "bundled") {
    return putImageRecord({ ...image, status: "deleted" });
  }
  const db = await openImageDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(imageStoreName, "readwrite");
    transaction.objectStore(imageStoreName).delete(id);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not delete this image."));
    transaction.onabort = () => reject(transaction.error || new Error("Deleting this image was cancelled."));
  });
}

function revokeImageUrls(records) {
  records.forEach((record) => {
    if (record.objectUrl) URL.revokeObjectURL(record.objectUrl);
  });
}

async function refreshImageRecords() {
  let records = await getAllImageRecords();
  const unreviewedSellerImages = records.filter((record) => record.owner === "seller" && record.status !== "draft");
  if (unreviewedSellerImages.length) {
    await Promise.all(unreviewedSellerImages.map((record) => putImageRecord({ ...record, status: "draft" })));
    records = await getAllImageRecords();
  }
  revokeImageUrls(state.images);
  const recordIds = new Set(records.map((record) => record.id));
  const visibleRecords = [
    ...records,
    ...bundledGameImages.filter((image) => !recordIds.has(image.id))
  ];
  state.images = visibleRecords.map((record) => {
    const objectUrl = record.blob ? URL.createObjectURL(record.blob) : "";
    const localBundledUrl = record.owner === "bundled" ? new URL(record.url, document.baseURI).href : "";
    return { ...record, objectUrl, src: objectUrl || localBundledUrl || safeImageUrl(record.url) };
  });
  games.forEach((game) => {
    const linked = gameImages(game.id);
    game.imageAssets = {
      game_name: game.name,
      game_logo: assetFor(game.id, "game_logo")?.src || "",
      game_thumbnail: assetFor(game.id, "game_thumbnail")?.src || "",
      game_banner: assetFor(game.id, "game_banner")?.src || "",
      product_image: assetFor(game.id, "product_image")?.src || "",
      gallery_images: linked.map((image) => image.src).filter(Boolean),
      game_icon: assetFor(game.id, "game_icon")?.src || ""
    };
  });
  renderGames();
  renderHeroArtwork();
  renderAccountArtwork();
  if (state.game && !$("#topupSection").classList.contains("hidden")) renderGameGallery();
}

function safeImageUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function gameImages(gameId, includeDraft = false) {
  return state.images.filter((image) => image.gameId === gameId && image.status !== "deleted" && (includeDraft || image.status !== "draft"))
    .sort((a, b) => Number(b.isMain) - Number(a.isMain) || (a.order || 0) - (b.order || 0) || a.uploadedAt.localeCompare(b.uploadedAt));
}

function assetFor(gameId, ...types) {
  const images = gameImages(gameId);
  for (const type of types) {
    const match = images.find((image) => image.type === type);
    if (match?.src) return match;
  }
  return images.find((image) => image.src) || null;
}

function imageFallback(label, retryId = "") {
  return `<div class="image-fallback"><span class="fallback-icon">◇</span><strong>Image unavailable</strong><small>${escapeHtml(label)}</small>${retryId ? `<button type="button" class="image-retry" data-retry-image="${escapeHtml(retryId)}">Retry</button>` : ""}</div>`;
}

function imageFrame(image, label, className = "", openable = false) {
  if (!image?.src) return `<div class="image-frame ${className}">${imageFallback(label)}</div>`;
  return `<div class="image-frame ${className}" data-image-frame="${escapeHtml(image.id)}" data-image-type="${escapeHtml(image.type)}">
    <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || label)}" loading="eager" data-image-id="${escapeHtml(image.id)}" ${openable ? `data-open-image="${escapeHtml(image.id)}"` : ""}>
    ${openable ? `<button class="image-open-button" type="button" data-open-image="${escapeHtml(image.id)}" aria-label="Open image of ${escapeHtml(label)}">Expand</button>` : ""}
  </div>`;
}

function renderGames() {
  const favorites = readStorage(storageKeys.favorites, []);
  const visible = games.filter((game) => {
    const matchesQuery = game.name.toLowerCase().includes(state.query.toLowerCase());
    const matchesCategory = state.category === "All" || game.category === state.category;
    const matchesGame = state.gameFilter === "All" ||
      (state.gameFilter === "Other Games" ? !["mobile-legends", "free-fire", "pubg-mobile", "honor-of-kings", "genshin-impact", "roblox"].includes(game.id) : game.id === state.gameFilter);
    return matchesQuery && matchesCategory && matchesGame;
  });
  gameGrid.innerHTML = visible.map((game) => `
    <article class="game-card" data-game-card="${escapeHtml(game.id)}">
      <div class="game-card-select" data-game="${escapeHtml(game.id)}" tabindex="0" role="button" aria-label="Top up ${escapeHtml(game.name)}">
        ${imageFrame(assetFor(game.id, "game_thumbnail", "product_image", "game_banner", "game_icon"), game.name, "game-visual")}
        <div class="game-card-info"><span><strong>${escapeHtml(game.name)}</strong><small>${escapeHtml(game.category)} · Digital credits</small></span><span class="topup-tag">TOP UP</span></div>
      </div>
      <button class="favorite-button ${favorites.includes(game.id) ? "favorited" : ""}" type="button" data-favorite="${escapeHtml(game.id)}" aria-label="${favorites.includes(game.id) ? "Remove from" : "Add to"} favorites">${favorites.includes(game.id) ? "♥" : "♡"}</button>
    </article>`).join("");
  $("#emptyGames").classList.toggle("hidden", visible.length !== 0);
}

function renderHeroArtwork() {
  const game = games.find((entry) => entry.id === "free-fire");
  const image = game && assetFor(game.id, "game_banner", "game_thumbnail", "product_image", "game_icon");
  $("#heroArtwork").innerHTML = image?.src
    ? `<span class="hero-image-frame" data-image-frame="${escapeHtml(image.id)}" data-image-type="${escapeHtml(image.type)}"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || `${game.name} game artwork`)}" data-image-id="${escapeHtml(image.id)}" data-open-image="${escapeHtml(image.id)}"><button class="hero-image-open" type="button" data-open-image="${escapeHtml(image.id)}">View artwork</button></span>`
    : imageFallback("Upload licensed Free Fire artwork in Admin images");
}

function renderAccountArtwork() {
  const game = games.find((entry) => entry.id === "mobile-legends");
  const image = game && assetFor(game.id, "game_thumbnail", "product_image", "game_icon");
  $("#accountArtwork").innerHTML = image?.src
    ? `<span class="account-image-frame" data-image-frame="${escapeHtml(image.id)}" data-image-type="${escapeHtml(image.type)}"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || "Mobile Legends account artwork")}" data-image-id="${escapeHtml(image.id)}" data-open-image="${escapeHtml(image.id)}"></span>`
    : imageFallback("Mobile Legends");
}

function renderGameGallery() {
  if (!state.game) return;
  const images = gameImages(state.game.id).filter((image) => image.src);
  const preferred = assetFor(state.game.id, "game_banner", "game_screenshot", "product_image", "game_thumbnail", "diamond_package_image", "game_inventory_image", "promotional_artwork", "game_icon");
  const gallery = preferred ? [preferred, ...images.filter((image) => image.id !== preferred.id)] : images;
  state.galleryImages = gallery;
  if (!gallery.length) {
    $("#galleryMain").innerHTML = imageFallback(`${state.game.name} · upload licensed game artwork in Admin images`);
    $("#galleryThumbnails").innerHTML = "";
    return;
  }
  state.galleryIndex = Math.min(state.galleryIndex, gallery.length - 1);
  const selected = gallery[state.galleryIndex];
  $("#galleryMain").innerHTML = `${imageFrame(selected, state.game.name, "gallery-main-frame", true)}<span class="gallery-count">${state.galleryIndex + 1} / ${gallery.length}</span>`;
  $("#galleryThumbnails").innerHTML = gallery.map((image, index) => `
    <div class="gallery-thumb ${index === state.galleryIndex ? "selected" : ""}" data-gallery-index="${index}" tabindex="0" role="button" aria-label="Show ${escapeHtml(imageTypeName(image.type))}">
      <span class="gallery-thumb-frame" data-image-frame="${escapeHtml(image.id)}" data-image-type="${escapeHtml(image.type)}"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || imageTypeName(image.type))}" loading="lazy" data-image-id="${escapeHtml(image.id)}"></span>
    </div>`).join("");
}

function imageTypeName(type) {
  return imageTypes.find(([value]) => value === type)?.[1] || type.replaceAll("_", " ");
}

function chooseGame(gameId) {
  const game = games.find((entry) => entry.id === gameId);
  if (!game) return;
  state.game = game;
  state.package = null;
  state.playerVerified = false;
  state.orderSubmitting = false;
  state.verificationAttempt = makeIdempotencyKey();
  state.idempotencyKey = makeIdempotencyKey();
  $("#topupTitle").textContent = `Top up ${game.name}`;
  $("#topupDescription").textContent = game.shortDescription;
  const gameLogo = assetFor(game.id, "game_logo", "game_icon");
  $("#topupGameLogo").innerHTML = gameLogo?.src
    ? `<img src="${escapeHtml(gameLogo.src)}" alt="${escapeHtml(game.name)} logo" data-image-id="${escapeHtml(gameLogo.id)}">`
    : `<span>${escapeHtml(game.initials)}</span>`;
  $("#topupGameLogo").dataset.imageFrame = gameLogo?.id || "";
  $("#summaryGameName").textContent = game.name;
  const icon = assetFor(game.id, "game_icon", "game_logo");
  $("#summaryIcon").innerHTML = icon?.src ? `<img src="${escapeHtml(icon.src)}" alt="">` : escapeHtml(game.initials);
  $("#summaryIcon").style.background = icon?.src ? "#222431" : `linear-gradient(145deg, ${game.colors[0]}, ${game.colors[1]})`;
  $("#summaryPackage").textContent = "Select a package";
  $("#summaryPlayer").textContent = "Not entered";
  $("#summarySubtotal").textContent = money(0);
  $("#summaryDiscount").textContent = money(0);
  $("#summaryFee").textContent = money(0);
  $("#summaryPrice").textContent = money(0);
  $("#mobileCheckoutPrice").textContent = money(0);
  $("#playerId").value = "";
  $("#serverId").value = "";
  $("#playerRegion").value = "";
  $("#playerNickname").value = "";
  $("#verificationStatus").classList.add("hidden");
  $("#verificationStatus").textContent = "";
  const requiresRegion = databaseCatalogEnabled ? game.requiresRegion : game.needsServer;
  const requiresZoneId = databaseCatalogEnabled ? game.requiresZoneId : game.needsServer;
  $("#regionField").classList.toggle("hidden", !requiresRegion);
  $("#serverField").classList.toggle("hidden", !requiresZoneId);
  $("#topupError").classList.add("hidden");
  state.galleryIndex = 0;
  renderGameGallery();
  if (databaseCatalogEnabled) {
    $("#packageGrid").innerHTML = '<p class="modal-empty">Loading database packages…</p>';
    $("#playerRegion").innerHTML = '<option value="">Loading regions…</option>';
    loadProductionGameData(game).catch((error) => {
      if (state.game?.id !== game.id) return;
      $("#packageGrid").innerHTML = `<p class="modal-error" role="alert">${escapeHtml(error.message || "Unable to load game data.")}</p>`;
      $("#playerRegion").innerHTML = '<option value="">Regions unavailable</option>';
    });
  } else {
    $("#playerRegion").innerHTML = '<option value="">Select a region</option><option value="Cambodia">Cambodia</option><option value="Asia">Asia</option><option value="Global">Global</option><option value="Other">Other</option>';
    renderPackageOptions(game);
  }
  $("#topupSection").classList.remove("hidden");
  $("#topupSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

function makeImageId() {
  return crypto.randomUUID ? crypto.randomUUID() : `image-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function validateImageFile(file) {
  if (!file) return Promise.reject(new Error("Choose an image file first."));
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) return Promise.reject(new Error("Use a JPG, PNG, or WebP image."));
  if (file.size > maxImageBytes) return Promise.reject(new Error("Image must be 10 MB or smaller."));
  return createImageBitmap(file).then((bitmap) => {
    const dimensions = { width: bitmap.width, height: bitmap.height };
    bitmap.close();
    if (dimensions.width < 256 || dimensions.height < 256) throw new Error("Image dimensions must be at least 256 × 256 pixels.");
    if (dimensions.width > 8000 || dimensions.height > 8000) throw new Error("Image dimensions must not exceed 8000 × 8000 pixels.");
    return dimensions;
  });
}

function readFileWithProgress(file, progressElement) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onprogress = (event) => {
      if (event.lengthComputable && progressElement) {
        progressElement.value = Math.round(event.loaded / event.total * 70);
      }
    };
    reader.onerror = () => reject(reader.error || new Error("Could not read the selected image."));
    reader.onload = async () => {
      try {
        const dimensions = await validateImageFile(file);
        if (progressElement) progressElement.value = 85;
        resolve({ blob: new Blob([reader.result], { type: file.type }), ...dimensions });
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsArrayBuffer(file);
  });
}

async function saveImage({ gameId, type, file, url, alt, credit = "", owner = "admin", progressElement }) {
  const safeUrl = url ? safeImageUrl(url) : "";
  if (url && !safeUrl) throw new Error("Image URLs must use HTTPS.");
  if (!file && !safeUrl) throw new Error("Choose an image file or provide an HTTPS image URL.");
  const fileData = file ? await readFileWithProgress(file, progressElement) : null;
  const replacing = state.replaceImageId ? state.images.find((image) => image.id === state.replaceImageId) : null;
  const record = {
    id: replacing?.id || makeImageId(),
    gameId,
    type,
    alt: alt.trim(),
    credit: credit.trim(),
    filename: file?.name || new URL(safeUrl).hostname,
    mime: file?.type || "image/remote",
    size: file?.size || 0,
    width: fileData?.width || 0,
    height: fileData?.height || 0,
    order: replacing?.order ?? gameImages(gameId).length,
    isMain: replacing?.isMain || type === "game_thumbnail" || type === "product_image",
    status: owner === "seller" ? "draft" : "available",
    uploadedAt: new Date().toISOString(),
    owner,
    url: safeUrl,
    blob: fileData?.blob || null
  };
  await putImageRecord(record);
  state.replaceImageId = null;
  if (progressElement) progressElement.value = 100;
  await refreshImageRecords();
  return record;
}

function openImageViewer(imageId) {
  const selected = state.images.find((image) => image.id === imageId);
  state.viewerImages = selected ? gameImages(selected.gameId, true).filter((image) => image.src) : state.images.filter((image) => image.src);
  state.viewerIndex = state.viewerImages.findIndex((image) => image.id === imageId);
  if (state.viewerIndex < 0) return;
  state.zoomed = false;
  renderImageViewer();
}

function renderImageViewer() {
  const image = state.viewerImages[state.viewerIndex];
  if (!image) return closeModal();
  modalPanel.classList.add("viewer-panel");
  showModal(`
    <div class="image-viewer">
      <div class="viewer-toolbar">
        <span>${escapeHtml(image.alt || imageTypeName(image.type))}</span>
        <div><button type="button" data-viewer-action="zoom-out" aria-label="Zoom out">−</button><button type="button" data-viewer-action="zoom-in" aria-label="Zoom in">+</button><button type="button" data-viewer-action="fullscreen">Fullscreen</button><button type="button" data-action="close-modal" aria-label="Close image viewer">×</button></div>
      </div>
      <div class="viewer-stage" data-image-frame="${escapeHtml(image.id)}" data-image-type="${escapeHtml(image.type)}"><button type="button" data-viewer-action="previous" aria-label="Previous image">‹</button><img class="${state.zoomed ? "zoomed" : ""}" src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || imageTypeName(image.type))}" data-image-id="${escapeHtml(image.id)}"><button type="button" data-viewer-action="next" aria-label="Next image">›</button></div>
      <div class="viewer-counter">${state.viewerIndex + 1} / ${state.viewerImages.length} · ${escapeHtml(imageTypeName(image.type))}${image.credit ? ` · ${escapeHtml(image.credit)}` : ""}</div>
    </div>
  `);
  modalPanel.classList.add("viewer-panel");
}

function moveViewer(step) {
  if (!state.viewerImages?.length) return;
  state.viewerIndex = (state.viewerIndex + step + state.viewerImages.length) % state.viewerImages.length;
  renderImageViewer();
}

function openAdminImages(errorMessage = "") {
  const gameId = $("#adminGameSelect")?.value || state.game?.id || games[0].id;
  const images = gameImages(gameId, true);
  showModal(`
    <div class="modal-kicker">ASSET LIBRARY</div><h2 class="modal-title" id="modalTitle">Manage game images</h2>
    <p class="modal-copy">Upload artwork you own or are licensed to use, or add an HTTPS image URL. Images are stored in this browser.</p>
    <label class="modal-label" for="adminGameSelect">Game</label>
    <select class="modal-input" id="adminGameSelect">${games.map((game) => `<option value="${game.id}" ${game.id === gameId ? "selected" : ""}>${escapeHtml(game.name)}</option>`).join("")}</select>
    <form id="adminImageForm" class="image-upload-form">
      <label class="modal-label" for="adminImageType">Image type</label>
      <select class="modal-input" id="adminImageType" name="type">${imageTypes.slice(0, 9).map(([value, label]) => `<option value="${value}" ${state.replaceImageId && state.images.find((image) => image.id === state.replaceImageId)?.type === value ? "selected" : ""}>${label}</option>`).join("")}</select>
      <label class="modal-label" for="adminImageFile">Upload game image</label>
      <input class="modal-input file-input" id="adminImageFile" name="file" type="file" accept="image/jpeg,image/png,image/webp">
      <label class="modal-label" for="adminImageUrl">Or image URL (HTTPS)</label>
      <input class="modal-input" id="adminImageUrl" name="url" type="url" placeholder="https://…">
      <label class="modal-label" for="adminImageAlt">Image description</label>
      <input class="modal-input" id="adminImageAlt" name="alt" type="text" maxlength="120" placeholder="Describe the in-game asset">
      <label class="modal-label" for="adminImageCredit">Image credit / source</label>
      <input class="modal-input" id="adminImageCredit" name="credit" type="text" maxlength="180" placeholder="Creator, source, and license when applicable">
      ${state.replaceImageId ? '<small class="upload-help">Replacing the selected image keeps its gallery position.</small>' : ""}
      <small class="upload-help">JPG, PNG, WebP · up to 10 MB · minimum 256 × 256 px. Add image attribution in the description when required by its license.</small>
      <progress class="upload-progress hidden" id="adminUploadProgress" max="100" value="0"></progress>
      ${errorMessage ? `<p class="modal-error" role="alert">${escapeHtml(errorMessage)}</p>` : ""}
      <button class="primary-button modal-primary" type="submit">Save game image</button>
    </form>
    <div class="asset-list-heading"><strong>Image fields</strong><span>${images.length} image${images.length === 1 ? "" : "s"}</span></div>
    ${images.length ? `<div class="asset-list">${images.map((image, index) => `
      <article class="asset-row">
        ${image.src ? `<div class="asset-preview" data-image-frame="${escapeHtml(image.id)}" data-image-type="${escapeHtml(image.type)}"><img src="${escapeHtml(image.src)}" alt="" data-image-id="${escapeHtml(image.id)}"></div>` : `<div class="asset-preview">${imageFallback(image.alt || "Game image", image.id)}</div>`}
        <div class="asset-info"><strong>${escapeHtml(imageTypeName(image.type))}${image.isMain ? ' <span class="asset-main-badge">MAIN</span>' : ""}</strong><small>${escapeHtml(image.filename)} · ${image.width || "URL"}${image.width ? `×${image.height}px` : ""}</small><small>${new Date(image.uploadedAt).toLocaleDateString()} · ${escapeHtml(image.status)}</small>${image.credit ? `<small>${escapeHtml(image.credit)}</small>` : ""}</div>
        <div class="asset-actions">
          <button type="button" data-image-action="replace" data-image-id="${image.id}">Replace</button>
          ${!image.isMain ? `<button type="button" data-image-action="main" data-image-id="${image.id}">Set main</button>` : ""}
          <button type="button" data-image-action="up" data-image-id="${image.id}" ${index === 0 ? "disabled" : ""}>↑</button>
          <button type="button" data-image-action="down" data-image-id="${image.id}" ${index === images.length - 1 ? "disabled" : ""}>↓</button>
          <button type="button" data-image-action="delete" data-image-id="${image.id}">Delete</button>
        </div>
      </article>`).join("")}</div>` : '<div class="modal-empty">No game images yet. Upload a licensed image or add a trusted HTTPS image URL.</div>'}
  `);
  modalPanel.classList.add("asset-manager-panel");
}

function openSellerListing(errorMessage = "") {
  const listing = readStorage(storageKeys.sellerListing, null);
  const previewImages = state.sellerFiles || [];
  const draft = state.sellerDraft;
  showModal(`
    <div class="modal-kicker">SELLER TOOLS</div><h2 class="modal-title" id="modalTitle">Create a game listing</h2>
    <p class="modal-copy">Add game artwork, screenshots, and product proof. Preview images before saving your draft listing.</p>
    ${listing ? `<div class="receipt-box"><div class="receipt-row"><span>Saved draft</span><strong>${escapeHtml(listing.title)}</strong></div><div class="receipt-row"><span>Price</span><strong>${money(listing.price)}</strong></div><div class="receipt-row"><span>Images</span><strong>${listing.imageCount}</strong></div></div>` : ""}
    <form id="sellerListingForm" class="image-upload-form">
      <label class="modal-label" for="sellerGame">Game</label><select class="modal-input" id="sellerGame" name="gameId">${games.map((game) => `<option value="${game.id}" ${game.id === draft?.gameId ? "selected" : ""}>${escapeHtml(game.name)}</option>`).join("")}</select>
      <label class="modal-label" for="sellerTitle">Listing title</label><input class="modal-input" id="sellerTitle" name="title" maxlength="100" placeholder="e.g. Mobile Legends diamond package" value="${escapeHtml(draft?.title || "")}" required>
      <label class="modal-label" for="sellerPrice">Price (USD)</label><input class="modal-input" id="sellerPrice" name="price" type="number" min="0.01" step="0.01" placeholder="49.99" value="${draft?.price || ""}" required>
      ${[["product_image", "Upload game image (required)"], ["seller_screenshot", "Upload screenshot"], ["seller_proof", "Upload product proof"], ["seller_additional", "Upload additional images"]].map(([type, label], index) => `
        <label class="modal-label" for="sellerFile${index}">${label}</label>
        <input class="modal-input file-input" id="sellerFile${index}" name="${type}" type="file" accept="image/jpeg,image/png,image/webp" ${index === 3 ? "multiple" : ""} data-seller-image="${type}">
      `).join("")}
      <div class="seller-preview-grid" id="sellerPreviewGrid">${previewImages.map((preview) => `<div class="seller-preview-item"><img src="${preview.previewUrl}" alt="${escapeHtml(preview.file.name)}"><small>${escapeHtml(preview.file.name)}</small></div>`).join("")}</div>
      <small class="upload-help">JPG, PNG, WebP · 10 MB maximum each · minimum 256 × 256 px.</small>
      <progress class="upload-progress hidden" id="sellerUploadProgress" max="100" value="0"></progress>
      ${errorMessage ? `<p class="modal-error" role="alert">${escapeHtml(errorMessage)}</p>` : ""}
      <button class="primary-button modal-primary" type="submit">Preview &amp; save draft</button>
    </form>
    <p class="demo-notice">Images are stored locally in this browser. Add only content you have permission to use.</p>
  `);
  modalPanel.classList.add("seller-manager-panel");
}

async function updateImageOrder(imageId, action) {
  const record = state.images.find((image) => image.id === imageId);
  if (!record) return;
  if (action === "delete") {
    await removeImageRecord(imageId);
    await refreshImageRecords();
    return openAdminImages();
  }
  const records = gameImages(record.gameId, true);
  if (action === "main") {
    for (const image of records) {
      image.isMain = image.id === imageId;
      await putImageRecord(image);
    }
  } else if (action === "up" || action === "down") {
    const index = records.findIndex((image) => image.id === imageId);
    const destination = index + (action === "up" ? -1 : 1);
    if (destination < 0 || destination >= records.length) return;
    [records[index], records[destination]] = [records[destination], records[index]];
    for (const [order, image] of records.entries()) {
      image.order = order;
      await putImageRecord(image);
    }
  }
  await refreshImageRecords();
  openAdminImages();
}

function previewSellerFiles() {
  const files = state.sellerFiles || [];
  $("#sellerPreviewGrid").innerHTML = files.map((item) => `<div class="seller-preview-item"><img src="${item.previewUrl}" alt="${escapeHtml(item.file.name)}"><small>${escapeHtml(item.file.name)}</small></div>`).join("");
}

async function validateSellerFile(file) {
  await validateImageFile(file);
  return true;
}

function openSellerPreview() {
  const draft = state.sellerDraft;
  if (!draft) return;
  showModal(`
    <div class="modal-kicker">LISTING PREVIEW</div><h2 class="modal-title" id="modalTitle">Review before publishing</h2>
    <p class="modal-copy">Check the artwork and listing details before saving it as a local draft.</p>
    <div class="seller-preview-grid large">${draft.files.map((item) => `<div class="seller-preview-item"><img src="${item.previewUrl}" alt="${escapeHtml(item.file.name)}"><small>${escapeHtml(item.file.name)}</small></div>`).join("")}</div>
    <div class="receipt-box"><div class="receipt-row"><span>Game</span><strong>${escapeHtml(games.find((game) => game.id === draft.gameId)?.name || "Game")}</strong></div><div class="receipt-row"><span>Listing</span><strong>${escapeHtml(draft.title)}</strong></div><div class="receipt-row"><span>Price</span><strong>${money(draft.price)}</strong></div><div class="receipt-row"><span>Images</span><strong>${draft.files.length}</strong></div></div>
    <progress class="upload-progress hidden" id="sellerUploadProgress" max="100" value="0"></progress>
    <button class="primary-button modal-primary" type="button" data-action="publish-listing">Save listing draft</button>
    <button class="modal-secondary" type="button" data-action="edit-listing">← Edit listing</button>
  `);
  modalPanel.classList.add("seller-manager-panel");
}

async function publishSellerListing() {
  const draft = state.sellerDraft;
  if (!draft) return;
  const progress = $("#sellerUploadProgress");
  try {
    progress?.classList.remove("hidden");
    for (const [index, item] of draft.files.entries()) {
      const record = await saveImage({
        gameId: draft.gameId,
        type: item.type,
        file: item.file,
        alt: `${draft.title} · ${imageTypeName(item.type)}`,
        owner: "seller",
        progressElement: progress
      });
      state.sellerDraft.images[index] = record.id;
    }
    const listing = {
      id: `LIST-${Date.now().toString(36).toUpperCase()}`,
      gameId: draft.gameId,
      title: draft.title,
      price: draft.price,
      imageCount: draft.files.length,
      imageIds: state.sellerDraft.images,
      status: "Draft",
      updatedAt: new Date().toISOString()
    };
    saveStorage(storageKeys.sellerListing, listing);
    state.sellerDraft = null;
    (state.sellerFiles || []).forEach((item) => URL.revokeObjectURL(item.previewUrl));
    state.sellerFiles = [];
    showModal(`<div class="order-success"><div class="success-icon">✓</div><div class="modal-kicker">DRAFT SAVED</div><h2 class="modal-title" id="modalTitle">Listing ready for review.</h2><p class="modal-copy">${escapeHtml(listing.title)} is saved in this browser with ${listing.imageCount} image${listing.imageCount === 1 ? "" : "s"}.</p><div class="receipt-box"><div class="receipt-row"><span>Listing reference</span><strong class="receipt-code">${escapeHtml(listing.id)}</strong></div><div class="receipt-row"><span>Status</span><strong>Draft</strong></div></div><button class="primary-button modal-primary" type="button" data-action="close-modal">Done</button></div>`);
  } catch (error) {
    console.error("Unable to save seller listing images.", error);
    openSellerPreview();
    showToast(error.message || "Could not save the listing images.");
  }
}

function selectPackage(index) {
  if (!state.game || !state.game.packages[index]) return;
  const selected = state.game.packages[index];
  state.package = Array.isArray(selected)
    ? { name: selected[0], price: selected[1], discountAmount: 0 }
    : { ...selected, discountAmount: Number((selected.price * selected.discountPercentage / 100).toFixed(2)) };
  state.idempotencyKey = makeIdempotencyKey();
  $$(".package-option").forEach((button, buttonIndex) => button.classList.toggle("selected", buttonIndex === index));
  $("#summaryPackage").textContent = state.package.name;
  updatePriceSummary();
  $("#topupError").classList.add("hidden");
}

function updatePlayerSummary() {
  const player = $("#playerId").value.trim();
  const details = [player || "Not entered"];
  if (state.game?.needsServer && $("#playerRegion").value) details.push(selectedRegionLabel());
  if (state.game?.needsServer && $("#serverId").value.trim()) details.push($("#serverId").value.trim());
  $("#summaryPlayer").textContent = details.join(" · ");
  invalidatePlayerVerification();
}

function invalidatePlayerVerification() {
  const status = $("#verificationStatus");
  const wasVerified = state.playerVerified;
  state.playerVerified = false;
  state.verificationAttempt = makeIdempotencyKey();
  $$(".verify-button").forEach((button) => { button.disabled = false; button.textContent = "Verify player"; });
  if (wasVerified || status.classList.contains("verifying")) {
    status.classList.remove("verifying", "verified", "verification-failed");
    status.classList.add("hidden");
    status.textContent = "";
  }
  if (wasVerified) {
    $("#topupError").textContent = "Player details changed. Verify the player again before checkout.";
    $("#topupError").classList.remove("hidden");
  }
}

function verifyPlayer() {
  if (!state.game) return;
  if (!playerVerificationProvider) return showToast("Player verification is disabled in production until a verified provider is configured.");
  const playerId = $("#playerId").value.trim();
  const serverId = $("#serverId").value.trim();
  const region = $("#playerRegion").value;
  const status = $("#verificationStatus");
  const missing = !playerId ? "Enter your Player ID before verification." :
    state.game.needsServer && !region ? "Select a server or region before verification." :
    state.game.needsServer && !serverId ? "Enter your Server ID / Zone ID before verification." : "";
  if (missing) {
    $("#topupError").textContent = missing;
    $("#topupError").classList.remove("hidden");
    return;
  }
  state.playerVerified = false;
  status.classList.remove("hidden", "verified", "verification-failed");
  status.classList.add("verifying");
  status.textContent = "Verifying player with the demo lookup…";
  $("#topupError").classList.add("hidden");
  $$(".verify-button").forEach((button) => { button.disabled = true; button.textContent = "Verifying…"; });
  const verificationAttempt = makeIdempotencyKey();
  const verificationFingerprint = `${playerId}|${serverId}|${region}|${$("#playerNickname").value.trim()}`;
  state.verificationAttempt = verificationAttempt;
  setTimeout(async () => {
    if (state.verificationAttempt !== verificationAttempt) return;
    const currentFingerprint = `${$("#playerId").value.trim()}|${$("#serverId").value.trim()}|${$("#playerRegion").value}|${$("#playerNickname").value.trim()}`;
    if (currentFingerprint !== verificationFingerprint) {
      status.classList.remove("verifying");
      status.classList.add("verification-failed");
      status.textContent = "Player details changed during verification. Verify again.";
      $$(".verify-button").forEach((button) => { button.disabled = false; button.textContent = "Verify player"; });
      return;
    }
    let verification;
    try {
      verification = await playerVerificationProvider.verifyPlayer({ gameId: state.game.id, playerId, serverId, needsServer: state.game.needsServer });
    } catch (error) {
      console.error("Demo player verification failed.", error);
      status.classList.remove("verifying");
      status.classList.add("verification-failed");
      status.textContent = "Verification is unavailable. Check the details and try again.";
      $$(".verify-button").forEach((button) => { button.disabled = false; button.textContent = "Verify player"; });
      return;
    }
    if (state.verificationAttempt !== verificationAttempt) return;
    status.classList.remove("verifying");
    $$(".verify-button").forEach((button) => { button.disabled = false; button.textContent = "Verify player"; });
    if (!verification.valid) {
      status.classList.add("verification-failed");
      status.innerHTML = "<strong>Player could not be verified</strong><span>Check the Player ID, Server ID, and region, then try again. This demo validates format only.</span>";
      return;
    }
    state.playerVerified = true;
    $("#topupError").classList.add("hidden");
    const nickname = $("#playerNickname").value.trim();
    status.classList.add("verified");
    status.innerHTML = `<strong>✓ Demo Player Found</strong><span>Player Name: ${escapeHtml(nickname || "Sambath")}</span><span>Player ID: ${escapeHtml(playerId)}${state.game.needsServer ? ` · Server: ${escapeHtml(region)} · Zone ${escapeHtml(serverId)}` : ""}</span><small>MOCK · No live game-provider lookup was performed.</small><button class="text-button" type="button" data-action="save-player">Save this account</button>`;
  }, 650);
}

function savePlayer() {
  if (!mockProvidersEnabled || !state.game || !state.playerVerified) return;
  const players = readStorage(storageKeys.players, []);
  const record = {
    id: `${state.game.id}:${$("#playerId").value.trim()}:${$("#serverId").value.trim()}`,
    gameId: state.game.id,
    playerId: $("#playerId").value.trim(),
    serverId: $("#serverId").value.trim(),
    region: $("#playerRegion").value,
    nickname: $("#playerNickname").value.trim(),
    savedAt: new Date().toISOString()
  };
  const next = [record, ...players.filter((player) => player.id !== record.id)];
  saveStorage(storageKeys.players, next.slice(0, 20));
  notify("Player account saved on this device.");
}

function openSavedPlayers() {
  if (!mockProvidersEnabled) return showToast("Saved players are unavailable in production until real accounts are connected.");
  const players = readStorage(storageKeys.players, []);
  showModal(`
    <div class="modal-kicker">SAVED PLAYERS</div><h2 class="modal-title" id="modalTitle">My accounts</h2>
    <p class="modal-copy">Saved on this device only. Review the details and verify again before placing an order.</p>
    ${players.length ? `<div class="order-list">${players.map((player) => `<article class="order-item"><div class="order-item-head"><span><strong>${escapeHtml(player.nickname || gameById(player.gameId)?.name || "Game account")}</strong><small>${escapeHtml(gameById(player.gameId)?.name || player.gameId)} · ${escapeHtml(player.region || "No region")}</small></span></div><div class="receipt-row"><span>Player / Server</span><strong>${escapeHtml(player.playerId)}${player.serverId ? ` · ${escapeHtml(player.serverId)}` : ""}</strong></div><button class="modal-secondary" type="button" data-use-player="${escapeHtml(player.id)}">Top up this account</button><button class="text-button danger-text" type="button" data-delete-player="${escapeHtml(player.id)}">Delete</button></article>`).join("")}</div>` : '<div class="modal-empty">No saved player accounts yet.</div>'}
  `);
}

function useSavedPlayer(id) {
  if (!mockProvidersEnabled) return;
  const record = readStorage(storageKeys.players, []).find((player) => player.id === id);
  if (!record || !gameById(record.gameId)) return;
  closeModal();
  chooseGame(record.gameId);
  $("#playerId").value = record.playerId;
  $("#serverId").value = record.serverId || "";
  $("#playerRegion").value = record.region || "";
  $("#playerNickname").value = record.nickname || "";
  updatePlayerSummary();
  $("#playerId").scrollIntoView({ behavior: "smooth", block: "center" });
}

function deleteSavedPlayer(id) {
  if (!mockProvidersEnabled) return;
  const players = readStorage(storageKeys.players, []);
  saveStorage(storageKeys.players, players.filter((player) => player.id !== id));
  openSavedPlayers();
}

function buyAgain(orderId) {
  if (!mockProvidersEnabled) return showToast("Repeat purchases are disabled in production.");
  const order = getOrders().find((entry) => entry.id === orderId);
  const game = order && gameById(order.gameId);
  if (!order || !game) return showToast("Cannot repeat this order: its game is not available.");
  const packageIndex = game.packages.findIndex(([name]) => name === order.package);
  if (packageIndex < 0) return showToast("Cannot repeat this order: its package is no longer available.");
  closeModal();
  chooseGame(game.id);
  $("#playerId").value = order.playerId || "";
  $("#serverId").value = order.serverId || "";
  $("#playerRegion").value = order.region || "";
  $("#playerNickname").value = order.nickname || "";
  updatePlayerSummary();
  selectPackage(packageIndex);
  $("#playerId").scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("Details prefilled. Verify the player again before checkout.");
}

function adminCompleteOrder(orderId) {
  const orders = getOrders();
  const index = orders.findIndex((order) => order.id === orderId);
  if (index < 0) return showToast("Order not found in local history.");
  const order = orders[index];
  if (order.refundedAt) return showToast("This demo order has already been refunded.");
  if (orderIsComplete(order)) return showToast("This demo order is already completed.");
  if (!paymentIsSuccessful(order)) return showToast("Only an order with a successful simulated payment can be completed.");
  const topUpReference = $(`#adminReference-${orderId}`).value.trim();
  const paymentReviewed = $(`#adminPaymentReviewed-${orderId}`).checked;
  if (!paymentReviewed) return showToast("Review and confirm this demo payment before marking the order complete.");
  if (!topUpReference) return showToast("Enter the demo top-up reference before marking the order complete.");
  const adminNote = $(`#adminNote-${orderId}`).value.trim();
  const now = new Date().toISOString();
  order.status = "COMPLETED · SIMULATED · ADMIN";
  order.topUpStatus = "COMPLETED · SIMULATED · ADMIN";
  order.topUpReference = topUpReference;
  order.adminNote = adminNote;
  order.completedAt = now;
  order.updatedAt = now;
  order.timeline = [...(order.timeline || []), { status: "Marked completed (simulated)", description: `Local admin reference ${topUpReference}.${adminNote ? ` Note: ${adminNote}` : ""} No real payment or top-up provider was checked.`, at: now }];
  orders[index] = order;
  if (!saveStorage(storageKeys.orders, orders)) return;
  notify(`Order ${order.id} marked completed in the demo.`, order.id);
  openAdminOrders();
}

function showModal(content) {
  clearInterval(state.qrTimer);
  state.qrTimer = null;
  modalContent.innerHTML = content;
  modalBackdrop.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  const firstField = $("input:not([type=radio])", modalContent);
  if (firstField) setTimeout(() => firstField.focus(), 40);
}

function closeModal() {
  clearInterval(state.qrTimer);
  state.qrTimer = null;
  modalBackdrop.classList.add("hidden");
  modalPanel.classList.remove("viewer-panel", "asset-manager-panel", "seller-manager-panel");
  document.body.style.overflow = "";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.add("hidden"), 3200);
}

function openCheckout() {
  if (!mockProvidersEnabled) {
    $("#topupError").textContent = appEnv === "production"
      ? "Purchases are disabled until checkout is connected to configured player-validation, payment, and top-up providers."
      : appEnv === "staging"
        ? "Checkout is disabled in staging. Use local development to run demo simulations."
        : "Purchases are disabled because APP_ENV is invalid.";
    $("#topupError").classList.remove("hidden");
    return;
  }
  const playerId = $("#playerId").value.trim();
  const serverId = $("#serverId").value.trim();
  const checkoutEmail = getCheckoutEmail();
  const error = !state.game ? "Choose a game to continue." :
    !playerId ? "Enter your Player ID before continuing." :
    state.game.needsServer && !$("#playerRegion").value ? "Choose a server or region before continuing." :
    state.game.needsServer && !serverId ? "Enter your Server ID before continuing." :
    !state.playerVerified ? "Verify the player details before continuing." :
    !state.package ? "Choose a top-up package to continue." :
    !isValidCheckoutEmail(checkoutEmail) ? "Enter a valid email for your receipt before continuing." : "";
  if (error) {
    $("#topupError").textContent = error;
    $("#topupError").classList.remove("hidden");
    return;
  }
  state.payment = "KHQR";
  state.orderSubmitting = false;
  renderCheckout();
}

function renderCheckout(errorMessage = "") {
  const game = state.game;
  const pkg = state.package;
  const quote = quotePrice(pkg.price, pkg.discountAmount || 0);
  const walletBalance = getDemoWallet().balance;
  const walletSufficient = walletBalance >= quote.total;
  const gameIcon = assetFor(game.id, "game_icon", "game_logo");
  state.checkoutEmail = (document.getElementById("checkoutEmail")?.value || state.checkoutEmail || readStorage(storageKeys.user, null)?.email || "").trim();
  const checkoutEmail = getCheckoutEmail();
  showModal(`
    <div class="modal-kicker">DEMO CHECKOUT · MOCK PROVIDER</div>
    <h2 class="modal-title" id="modalTitle">Review your order</h2>
    <p class="modal-copy">Review your player and package details, then choose a demo payment method.</p>
    <div class="checkout-progress" aria-label="Checkout step 2 of 2">
      <div class="progress-step complete"><span>✓</span> Details</div><div class="progress-line"></div><div class="progress-step active"><span>2</span> Payment</div>
    </div>
    <div class="checkout-game">
      <span class="summary-game-icon" data-image-frame="${gameIcon?.id || ""}" style="background:linear-gradient(145deg,${game.colors[0]},${game.colors[1]})">${gameIcon?.src ? `<img src="${escapeHtml(gameIcon.src)}" alt="" data-image-id="${escapeHtml(gameIcon.id)}">` : game.initials}</span>
      <span><strong>${escapeHtml(game.name)} · ${escapeHtml(pkg.name)}</strong><small>Player ${escapeHtml($("#playerId").value.trim())}${game.needsServer ? ` · ${escapeHtml($("#playerRegion").value)} · Server ${escapeHtml($("#serverId").value.trim())}` : ""}</small></span>
      <b>${money(quote.total)}</b>
    </div>
    <label class="modal-label" for="checkoutEmail">Email for your receipt</label>
    <input class="modal-input" id="checkoutEmail" type="email" value="${escapeHtml(checkoutEmail)}" placeholder="you@example.com" autocomplete="email">
    <span class="modal-label">Select a payment method</span>
    <div class="payment-list">
      ${[
        ["KHQR", "QR", "QR payment · demo only"],
        ["Bank Transfer", "BANK", "Bank transfer · demo only"],
        ["Wallet", "W", `DEMO BALANCE ${money(walletBalance)}`],
        ["Visa / Mastercard", "CARD", "Card payment · demo only"]
      ].map(([name, logo, details]) => `
        <label class="payment-option ${state.payment === name ? "selected" : ""}"><input type="radio" name="payment" value="${name}" ${state.payment === name ? "checked" : ""}><span class="payment-logo">${logo}</span><span><strong>${name === "Wallet" ? "Demo Wallet" : name}</strong><small>${name === "Wallet" ? `DEMO BALANCE ${money(walletBalance)}` : details}</small></span></label>`).join("")}
    </div>
    ${state.payment === "Wallet" ? `<div class="wallet-checkout ${walletSufficient ? "" : "wallet-insufficient"}"><span>DEMO BALANCE</span><strong>${money(walletBalance)}</strong><span>Order total</span><strong>${money(quote.total)}</strong>${walletSufficient ? `<span>Remaining after simulated purchase</span><strong>${money(walletBalance - quote.total)}</strong>` : `<strong>Insufficient demo balance.</strong><button class="text-button" type="button" data-action="wallet-deposit-flow">Simulate deposit</button><button class="text-button" type="button" data-action="wallet-open">Choose another payment method / view wallet</button>`}</div>` : ""}
    <div class="checkout-total"><span>Total due</span><strong>${money(quote.total)}</strong></div>
    ${errorMessage ? `<p class="modal-error" role="alert">${escapeHtml(errorMessage)}</p>` : ""}
    <button class="primary-button modal-primary" type="button" data-action="review-order" ${state.payment === "Wallet" && !walletSufficient ? "disabled" : ""}>Review and confirm <span>→</span></button>
    <button class="modal-secondary" type="button" data-action="close-modal">← Edit player details</button>
    <p class="demo-notice">DEMO PAYMENT. All payment methods are simulated locally; no real payment provider or game top-up API is connected.</p>
  `);
}

function openOrderConfirmation() {
  if (!mockProvidersEnabled || !state.game || !state.package || !state.playerVerified || state.orderSubmitting) return;
  const quote = quotePrice(state.package.price, state.package.discountAmount || 0);
  const checkoutEmail = (document.getElementById("checkoutEmail")?.value || getCheckoutEmail()).trim();
  state.checkoutEmail = checkoutEmail;
  if (state.payment === "Wallet" && getDemoWallet().balance < quote.total) {
    renderCheckout("Insufficient demo wallet balance. Simulate a demo deposit or select another payment method.");
    return;
  }
  if (!isValidCheckoutEmail(checkoutEmail)) {
    renderCheckout("Enter a valid email address for your receipt before confirming the order.");
    return;
  }
  const game = state.game;
  const pkg = state.package;
  const price = quotePrice(pkg.price);
  showModal(`
    <div class="modal-kicker">FINAL REVIEW</div><h2 class="modal-title" id="modalTitle">Confirm purchase</h2>
    <p class="modal-copy">Review all delivery details carefully. A real payment will not be taken in this demo.</p>
    <div class="receipt-box">
      <div class="receipt-row"><span>Game</span><strong>${escapeHtml(game.name)}</strong></div>
      <div class="receipt-row"><span>Player ID</span><strong>${escapeHtml($("#playerId").value.trim())}</strong></div>
      ${game.needsServer ? `<div class="receipt-row"><span>Server / Region</span><strong>${escapeHtml($("#playerRegion").value)} · ${escapeHtml($("#serverId").value.trim())}</strong></div>` : ""}
      <div class="receipt-row"><span>Nickname</span><strong>${escapeHtml($("#playerNickname").value.trim() || "Not provided")}</strong></div>
      <div class="receipt-row"><span>Package</span><strong>${escapeHtml(pkg.name)}</strong></div>
      <div class="receipt-row"><span>Receipt email</span><strong>${escapeHtml(checkoutEmail)}</strong></div>
      <div class="receipt-row"><span>Payment method</span><strong>${escapeHtml(state.payment)}</strong></div>
      <div class="receipt-row"><span>Subtotal</span><strong>${money(price.subtotal)}</strong></div>
      <div class="receipt-row"><span>Discount · Platform fee</span><strong>${money(price.discount)} · ${money(price.platformFee)}</strong></div>
      <div class="receipt-row"><span>Total</span><strong>${money(price.total)}</strong></div>
    </div>
    <p class="demo-notice">Please make sure the Player ID and Server are correct before confirming.</p>
    <label class="confirm-check"><input id="confirmPlayerDetails" type="checkbox"> I reviewed and confirm these player details.</label>
    <p class="modal-error hidden" id="confirmOrderError" role="alert"></p>
    <button class="primary-button modal-primary" type="button" data-action="confirm-order">Confirm demo order</button>
    <button class="modal-secondary" type="button" data-action="edit-checkout">← Change payment or details</button>
  `);
}

function confirmOrder() {
  if (!mockProvidersEnabled || !paymentProvider) return showToast("Order confirmation is disabled because a production payment service is not configured.");
  if (state.orderSubmitting) return;
  if (!$("#confirmPlayerDetails")?.checked) {
    const error = $("#confirmOrderError");
    if (error) {
      error.textContent = "Confirm that you reviewed the Player ID and server details.";
      error.classList.remove("hidden");
    }
    return;
  }
  const checkoutEmail = (document.getElementById("checkoutEmail")?.value || getCheckoutEmail()).trim();
  state.checkoutEmail = checkoutEmail;
  if (!isValidCheckoutEmail(checkoutEmail)) {
    const error = $("#confirmOrderError");
    if (error) {
      error.textContent = "Enter a valid email address for the receipt before confirming.";
      error.classList.remove("hidden");
    }
    return;
  }
  const orders = getOrders();
  const existing = orders.find((entry) => entry.idempotencyKey && entry.idempotencyKey === state.idempotencyKey);
  if (existing) {
    state.activeOrderId = existing.id;
    showOrderReceipt(existing);
    return;
  }
  const nextOrderNo = Math.max(10000, ...orders.map((entry) => Number(String(entry.id || "").match(/^ORD(?:-DEMO)?-(\d+)$/)?.[1] || 0))) + 1;
  const now = new Date().toISOString();
  const quote = quotePrice(state.package.price, state.package.discountAmount || 0);
  const wallet = state.payment === "Wallet" ? getDemoWallet() : null;
  if (wallet && wallet.balance < quote.total) {
    const error = $("#confirmOrderError");
    if (error) {
      error.textContent = "Insufficient demo wallet balance. Return to payment and simulate a demo deposit or choose another method.";
      error.classList.remove("hidden");
    }
    return;
  }
  const order = {
    id: `ORD-DEMO-${nextOrderNo}`,
    idempotencyKey: state.idempotencyKey || makeIdempotencyKey(),
    createdAt: now,
    updatedAt: now,
    userId: readStorage(storageKeys.user, null)?.email || "guest-local",
    email: checkoutEmail,
    gameId: state.game.id,
    productId: state.game.productId,
    game: state.game.name,
    package: state.package.name,
    price: state.package.price,
    discount: quote.discount,
    platformFee: quote.platformFee,
    total: quote.total,
    playerId: $("#playerId").value.trim(),
    serverId: $("#serverId").value.trim(),
    region: $("#playerRegion").value,
    nickname: $("#playerNickname").value.trim(),
    payment: state.payment,
    paymentStatus: wallet ? "SUCCESS · DEMO WALLET" : "PENDING · SIMULATED",
    topUpStatus: wallet ? "PENDING · DEMO TOP-UP" : "NOT STARTED · PAYMENT PENDING",
    status: wallet ? "PROCESSING · SIMULATED" : "PENDING · SIMULATED",
    walletDebited: Boolean(wallet),
    completedAt: "",
    timeline: [{ status: "Order created", description: wallet ? "Order saved locally and paid with non-monetary demo balance." : "Order saved locally; payment is not yet confirmed.", at: now }, ...(wallet ? [{ status: "Payment success (simulated)", description: "Demo wallet balance was used; no money was taken.", at: now }] : [])],
    notificationsSent: ["Order Created"]
  };
  state.orderSubmitting = true;
  state.activeOrderId = order.id;
  orders.unshift(order);
  if (!saveStorage(storageKeys.orders, orders)) {
    state.orderSubmitting = false;
    return;
  }
  if (wallet) {
    const previousBalance = wallet.balance;
    wallet.balance = Number((wallet.balance - quote.total).toFixed(2));
    wallet.transactions.unshift({ id: makeIdempotencyKey(), orderId: order.id, type: "purchase", description: `Demo purchase ${order.id}`, amount: -quote.total, createdAt: now });
    if (!saveDemoWallet(wallet)) {
      saveStorage(storageKeys.orders, orders.filter((entry) => entry.id !== order.id));
      state.orderSubmitting = false;
      return;
    }
    order.walletBalanceAfter = wallet.balance;
    order.walletBalanceBefore = previousBalance;
    orders[0] = order;
    if (!saveStorage(storageKeys.orders, orders)) {
      wallet.balance = previousBalance;
      wallet.transactions = wallet.transactions.filter((entry) => entry.orderId !== order.id);
      saveDemoWallet(wallet);
      state.orderSubmitting = false;
      return;
    }
  }
  updateOrderCount();
  state.orderSubmitting = false;
  notify(wallet
    ? `Order ${order.id} created with DEMO BALANCE. Mock top-up is still pending.`
    : `Order ${order.id} created. Demo payment is still pending.`, order.id);
  showOrderReceipt(order);
}

function showOrderReceipt(order) {
  const isComplete = orderIsComplete(order);
  const isRefunded = orderIsRefunded(order);
  const isFailed = orderIsFailed(order);
  const isWaiting = paymentIsPending(order);
  const isCancelled = (order.status || "").toUpperCase().includes("CANCELLED");
  const paymentSucceeded = paymentIsSuccessful(order);
  showModal(`
    <div class="order-success">
      <div class="success-icon">${isComplete || isRefunded ? "✓" : isFailed ? "!" : "…"}</div>
      <div class="modal-kicker">MOCK FLOW · ${escapeHtml(order.status)}</div>
      <h2 class="modal-title" id="modalTitle">${isRefunded ? "Demo refund recorded" : isComplete ? "Simulated top-up complete" : order.status.toUpperCase().includes("TIMEOUT") ? paymentSucceeded ? "Demo top-up timed out" : "Demo payment timed out" : isCancelled ? "Demo payment cancelled" : isFailed ? "Simulated transaction failed" : isWaiting ? "Demo payment pending" : paymentSucceeded ? "Demo payment confirmed" : "Demo order pending"}</h2>
      <p class="modal-copy">${isRefunded ? "The refund is only a local simulation. No real funds were returned." : isComplete ? "The mock workflow completed. No real game account was credited." : isFailed ? "This simulated step failed. No external payment or game provider was contacted." : isWaiting ? "Select a test outcome below. No real payment can be made from this screen." : paymentSucceeded ? "Payment success is simulated. Continue to test the mock top-up workflow." : "Order status is generated from local demo data."}</p>
      <div class="receipt-box">
        <div class="receipt-row"><span>Order ID</span><strong class="receipt-code">${escapeHtml(order.id)}</strong></div>
        <div class="receipt-row"><span>Game / Package</span><strong>${escapeHtml(order.game)} · ${escapeHtml(order.package)}</strong></div>
        <div class="receipt-row"><span>Player</span><strong>${escapeHtml(order.playerId)}${order.serverId ? ` · ${escapeHtml(order.region)} · ${escapeHtml(order.serverId)}` : ""}</strong></div>
        ${order.email ? `<div class="receipt-row"><span>Receipt email</span><strong>${escapeHtml(order.email)}</strong></div>` : ""}
        <div class="receipt-row"><span>Payment</span><strong>${escapeHtml(order.payment)} · ${escapeHtml(order.paymentStatus || "Pending (demo)")}</strong></div>
        ${order.transactionId ? `<div class="receipt-row"><span>Demo transaction</span><strong>${escapeHtml(order.transactionId)}</strong></div>` : ""}
        <div class="receipt-row"><span>Top-up status</span><strong>${escapeHtml(order.topUpStatus || order.status)}</strong></div>
        <div class="receipt-row"><span>Total</span><strong>${money(order.total ?? order.price)}</strong></div>
        ${order.walletBalanceAfter != null ? `<div class="receipt-row"><span>Remaining DEMO BALANCE</span><strong>${money(order.walletBalanceAfter)}</strong></div>` : ""}
      </div>
      ${isWaiting && order.payment === "KHQR" ? `<section class="qr-payment"><div class="qr-placeholder"><span>▦</span><strong>DEMO QR</strong><small>Not payable or scannable</small></div><div class="qr-payment-info"><span>Demo payment amount</span><strong>${money(order.total ?? order.price)}</strong><span>Simulated status</span><strong>PENDING</strong><span>Time remaining</span><strong id="qrCountdown">10:00</strong></div></section>` : ""}
      ${isWaiting ? `<div class="mock-outcome-actions"><button class="primary-button modal-primary" type="button" data-action="simulate-payment" data-outcome="success" data-order-id="${escapeHtml(order.id)}">Simulate payment success</button><button class="modal-secondary" type="button" data-action="simulate-payment" data-outcome="failed" data-order-id="${escapeHtml(order.id)}">Simulate payment failure</button><button class="modal-secondary" type="button" data-action="simulate-payment" data-outcome="pending" data-order-id="${escapeHtml(order.id)}">Keep payment pending</button><button class="modal-secondary" type="button" data-action="simulate-payment" data-outcome="timeout" data-order-id="${escapeHtml(order.id)}">Simulate payment timeout</button><button class="text-button" type="button" data-action="cancel-demo-payment" data-order-id="${escapeHtml(order.id)}">Cancel demo order</button></div>` : ""}
      ${paymentSucceeded && !isComplete && /PENDING|PROCESSING/i.test(order.topUpStatus || "PENDING") ? `<div class="mock-outcome-actions"><div class="demo-status-inline">DEMO TOP-UP · MOCK PROVIDER</div><button class="primary-button modal-primary" type="button" data-action="simulate-topup" data-outcome="success" data-order-id="${escapeHtml(order.id)}">Simulate top-up success</button><button class="modal-secondary" type="button" data-action="simulate-topup" data-outcome="failed" data-order-id="${escapeHtml(order.id)}">Simulate top-up failure</button><button class="modal-secondary" type="button" data-action="simulate-topup" data-outcome="pending" data-order-id="${escapeHtml(order.id)}">Keep top-up pending</button><button class="modal-secondary" type="button" data-action="simulate-topup" data-outcome="timeout" data-order-id="${escapeHtml(order.id)}">Simulate top-up timeout</button></div>` : ""}
      ${isFailed || isCancelled ? `<button class="primary-button modal-primary" type="button" data-action="${paymentSucceeded ? "retry-demo-order" : "retry-demo-payment"}" data-order-id="${escapeHtml(order.id)}">${paymentSucceeded ? "Retry demo top-up" : "Retry demo payment"}</button><button class="modal-secondary" type="button" data-action="support-order" data-order-id="${escapeHtml(order.id)}">Contact support</button>` : ""}
      ${(isComplete || isFailed && paymentSucceeded) && !order.refundedAt ? `<button class="modal-secondary" type="button" data-action="simulate-refund" data-order-id="${escapeHtml(order.id)}">Simulate refund · demo only</button>` : ""}
      ${order.refundedAt ? '<p class="demo-notice">REFUNDED · SIMULATED</p>' : ""}
      ${isComplete ? `<button class="primary-button modal-primary" type="button" data-order-invoice="${escapeHtml(order.id)}">Download invoice</button><button class="modal-secondary" type="button" data-action="buy-again" data-order-id="${escapeHtml(order.id)}">Buy again</button>` : ""}
      <button class="modal-secondary" type="button" data-action="orders">View order history</button>
      <p class="demo-notice">DEMO / MOCK ONLY. No real payment was received and no diamonds were delivered.</p>
    </div>
  `);
  if (isWaiting && order.payment === "KHQR") startDemoQrTimer(order.id);
}

function startDemoQrTimer(orderId, seconds = 600) {
  let remaining = seconds;
  const update = () => {
    const timer = $("#qrCountdown");
    if (!timer) {
      clearInterval(state.qrTimer);
      state.qrTimer = null;
      return;
    }
    timer.textContent = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
    remaining -= 1;
    if (remaining < 0) {
      clearInterval(state.qrTimer);
      state.qrTimer = null;
      simulatePaymentOutcome(orderId, "timeout");
    }
  };
  update();
  state.qrTimer = setInterval(update, 1000);
}

function endDemoPayment(orderId, status) {
  const outcome = status.toLowerCase().includes("timeout") ? "timeout" :
    status.toLowerCase().includes("cancel") ? "cancelled" : "failed";
  return simulatePaymentOutcome(orderId, outcome);
}

function restartDemoPayment(orderId) {
  const orders = getOrders();
  const index = orders.findIndex((order) => order.id === orderId);
  if (index < 0) return showToast("Order not found in local history.");
  const order = orders[index];
  if (!orderIsFailed(order) || paymentIsSuccessful(order)) return showToast("This order does not have an ended demo payment session.");
  const now = new Date().toISOString();
  order.status = "PENDING · SIMULATED";
  order.paymentStatus = "PENDING · SIMULATED";
  order.topUpStatus = "NOT STARTED · PAYMENT PENDING";
  order.updatedAt = now;
  order.timeline = [...(order.timeline || []), { status: "Payment session restarted", description: "A new local demo session was opened. No payment was collected.", at: now }];
  orders[index] = order;
  if (!saveStorage(storageKeys.orders, orders)) return;
  showOrderReceipt(order);
}

function showOrderProcessing(order) {
  const timeline = order.timeline || [];
  showModal(`
    <div class="modal-kicker">DEMO ORDER TRACKING</div>
    <h2 class="modal-title" id="modalTitle">Processing order</h2>
    <p class="modal-copy">${escapeHtml(order.id)} · ${escapeHtml(order.game)} · ${escapeHtml(order.package)}</p>
    <ol class="order-timeline processing-timeline">${timeline.map((item) => `<li><strong>${escapeHtml(item.status)}</strong><small>${escapeHtml(item.description)}</small><time>${new Date(item.at).toLocaleTimeString()}</time></li>`).join("")}</ol>
    <p class="demo-notice">Progress is simulated locally. No payment provider or game service is contacted.</p>
  `);
}

async function simulatePaymentOutcome(orderId, outcome) {
  if (!mockProvidersEnabled || !paymentProvider) return showToast("Payment simulations are disabled in production.");
  if (!["success", "failed", "pending", "timeout", "cancelled"].includes(outcome)) return showToast("Unsupported demo payment outcome.");
  if (state.orderSubmitting) return showToast("The current mock request is processing.");
  const orders = getOrders();
  const index = orders.findIndex((order) => order.id === orderId);
  if (index < 0) return showToast("Order no longer exists in local history.");
  const order = orders[index];
  if (order.payment === "Wallet" || !paymentIsPending(order)) return showToast("This order is not waiting for simulated payment.");
  state.orderSubmitting = true;
  showOrderProcessing(order);
  try {
    const response = await paymentProvider.simulatePayment({ order, outcome });
    await new Promise((resolve) => setTimeout(resolve, 450));
    const now = new Date().toISOString();
    order.paymentReference = response.reference;
    order.updatedAt = now;
    if (response.status === "success") {
      order.paymentStatus = "SUCCESS · SIMULATED";
      order.topUpStatus = "PENDING · DEMO TOP-UP";
      order.status = "PROCESSING · SIMULATED";
      order.timeline = [...(order.timeline || []), { status: "Payment success (simulated)", description: "Mock payment provider returned success. No money was received.", at: now }];
    } else if (response.status === "failed") {
      order.paymentStatus = "FAILED · SIMULATED";
      order.topUpStatus = "NOT STARTED · PAYMENT FAILED";
      order.status = "FAILED · PAYMENT · SIMULATED";
      order.timeline = [...(order.timeline || []), { status: "Payment failed (simulated)", description: "Mock payment provider returned failure; no payment was received.", at: now }];
    } else if (response.status === "timeout") {
      order.paymentStatus = "TIMEOUT · SIMULATED";
      order.topUpStatus = "NOT STARTED · PAYMENT TIMEOUT";
      order.status = "FAILED · PAYMENT TIMEOUT · SIMULATED";
      order.timeline = [...(order.timeline || []), { status: "Payment timeout (simulated)", description: "Mock payment session expired; no payment was received.", at: now }];
    } else if (response.status === "cancelled") {
      order.paymentStatus = "CANCELLED · SIMULATED";
      order.topUpStatus = "NOT STARTED · PAYMENT CANCELLED";
      order.status = "CANCELLED · SIMULATED";
      order.timeline = [...(order.timeline || []), { status: "Payment cancelled (simulated)", description: "Mock payment was cancelled; no payment was received.", at: now }];
    } else {
      order.paymentStatus = "PENDING · SIMULATED";
      order.status = "PENDING · SIMULATED";
      order.timeline = [...(order.timeline || []), { status: "Payment pending (simulated)", description: "Mock provider is waiting; no payment was received.", at: now }];
    }
    orders[index] = order;
    if (!saveStorage(storageKeys.orders, orders)) return;
    notify(`${order.id}: demo payment ${response.status}. No real payment occurred.`, order.id);
  } catch (error) {
    console.error("Mock payment simulation failed.", error);
    showToast("Mock payment simulation failed. The order is still available in local history.");
  } finally {
    state.orderSubmitting = false;
  }
  const updated = getOrders().find((entry) => entry.id === orderId);
  if (updated) showOrderReceipt(updated);
}

async function simulateOrderOutcome(orderId, outcome = "success") {
  if (!mockProvidersEnabled || !topUpProvider) return showToast("Top-up simulations are disabled in production.");
  if (!["success", "failed", "pending", "timeout"].includes(outcome)) return showToast("Unsupported demo top-up outcome.");
  if (state.orderSubmitting) return;
  state.orderSubmitting = true;
  state.activeOrderId = orderId;
  const startingOrder = getOrders().find((entry) => entry.id === orderId);
  if (!startingOrder) {
    state.orderSubmitting = false;
    return showToast("Order no longer exists in local history.");
  }
  if (!paymentIsSuccessful(startingOrder)) {
    state.orderSubmitting = false;
    return showToast("Simulate successful payment before testing the top-up provider.");
  }
  if (!/PENDING|PROCESSING/i.test(startingOrder.topUpStatus || "PENDING")) {
    state.orderSubmitting = false;
    return showToast("This demo top-up is not in a pending state.");
  }
  showOrderProcessing(startingOrder);
  try {
    const providerResponse = await topUpProvider.createTopUp({ order: startingOrder, outcome });
    const providerStatus = outcome === "success" && providerResponse.accepted
      ? await topUpProvider.checkTopUpStatus(providerResponse.reference)
      : { status: providerResponse.status };
    const outcomes = outcome === "success" && providerStatus.status === "success"
      ? [["Top-up processing (simulated)", "Mock provider accepted the request."], ["Top-up completed (simulated)", "Mock provider reported success; no game account was credited."]]
      : outcome === "pending"
        ? [["Top-up pending (simulated)", "Mock provider returned a pending state."]]
        : outcome === "timeout"
          ? [["Top-up timeout (simulated)", "Mock provider timed out; no real delivery occurred."]]
          : [["Top-up failed (simulated)", "Mock provider returned a failure; no real delivery occurred."]];
    for (const [title, description] of outcomes) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      const currentOrders = getOrders();
      const index = currentOrders.findIndex((entry) => entry.id === orderId);
      if (index < 0) {
        state.orderSubmitting = false;
        return showToast("Order no longer exists in local history.");
      }
      const order = currentOrders[index];
      const now = new Date().toISOString();
      order.updatedAt = now;
      order.topUpReference = providerResponse.reference;
      if (title.includes("completed")) {
        order.topUpStatus = "COMPLETED · SIMULATED";
        order.status = "COMPLETED · SIMULATED";
        order.completedAt = now;
        if (!order.pointsAwarded) {
          saveStorage(storageKeys.points, getPoints() + Math.max(1, Math.floor(order.price)));
          order.pointsAwarded = true;
        }
      } else if (title.includes("processing")) {
        order.topUpStatus = "PROCESSING · SIMULATED";
        order.status = "PROCESSING · SIMULATED";
      } else if (title.includes("pending")) {
        order.topUpStatus = "PENDING · SIMULATED";
        order.status = "PROCESSING · SIMULATED";
      } else if (title.includes("timeout")) {
        order.topUpStatus = "TIMEOUT · SIMULATED";
        order.status = "FAILED · TOP-UP TIMEOUT · SIMULATED";
      } else {
        order.topUpStatus = "FAILED · SIMULATED";
        order.status = "FAILED · TOP-UP · SIMULATED";
      }
      order.timeline = [...(order.timeline || []), { status: title, description, at: now }];
      currentOrders[index] = order;
      if (!saveStorage(storageKeys.orders, currentOrders)) return;
      notify(`${order.id}: ${title.toLowerCase()}. No real diamonds were delivered.`, order.id);
      showOrderProcessing(order);
    }
  } catch (error) {
    console.error("Mock top-up simulation failed.", error);
    showToast("Mock top-up simulation failed. The order remains available to retry.");
  } finally {
    state.orderSubmitting = false;
  }
  updateOrderCount();
  const updated = getOrders().find((entry) => entry.id === orderId);
  if (updated) showOrderReceipt(updated);
}

function retryDemoOrder(orderId) {
  const order = getOrders().find((entry) => entry.id === orderId);
  if (!mockProvidersEnabled || !order || !paymentIsSuccessful(order) ||
      !orderIsFailed(order) || order.refundedAt) {
    return showToast("Only a failed, paid demo top-up can be retried.");
  }
  const orders = getOrders();
  const index = orders.findIndex((entry) => entry.id === orderId);
  order.status = "PROCESSING · SIMULATED";
  order.topUpStatus = "PENDING · SIMULATED";
  order.timeline = [...(order.timeline || []), { status: "Retry started (simulated)", description: "A mock retry was started; no payment was charged again.", at: new Date().toISOString() }];
  orders[index] = order;
  if (!saveStorage(storageKeys.orders, orders)) return;
  simulateOrderOutcome(orderId, "success");
}

function updateOrderCount() {
  if (databaseCatalogEnabled) {
    fetch("/api/orders/mine", { headers: { accept: "application/json" } })
      .then((response) => response.ok ? response.json() : { orders: [] })
      .then((result) => { $("#orderCount").textContent = String(result.orders?.length || 0); })
      .catch(() => { $("#orderCount").textContent = "0"; });
    return;
  }
  $("#orderCount").textContent = String(mockProvidersEnabled ? getOrders().length : 0);
}

function mapDatabaseOrder(order) {
  const relation = (value) => Array.isArray(value) ? value[0] : value;
  const game = relation(order.games);
  const pkg = relation(order.diamond_packages);
  return {
    id: order.id,
    orderNumber: order.order_number,
    game: game?.name || order.game_id,
    package: pkg?.name || order.package_id,
    playerId: order.player_id,
    serverId: order.zone_id,
    status: order.order_status,
    paymentStatus: order.payment_status,
    topUpStatus: order.topup_status,
    payment: order.payment_method,
    price: Number(order.subtotal),
    discount: Number(order.discount_amount),
    platformFee: Number(order.platform_fee),
    total: Number(order.total_amount),
    currency: order.currency,
    createdAt: order.created_at,
    updatedAt: order.updated_at,
    raw: order
  };
}

async function openProductionOrders(filter = "All") {
  showModal('<div class="modal-kicker">YOUR ACTIVITY</div><h2 class="modal-title" id="modalTitle">My orders</h2><p class="modal-copy">Loading orders from your account…</p>');
  try {
    const response = await fetch("/api/orders/mine", { headers: { accept: "application/json" } });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Unable to load your orders.");
    const orders = (result.orders || []).map(mapDatabaseOrder);
    const filteredOrders = filter === "All" ? orders : orders.filter((order) => {
      const value = `${order.status} ${order.paymentStatus} ${order.topUpStatus}`.toLowerCase();
      return filter === "Pending" ? value.includes("pending") : filter === "Completed" ? value.includes("completed") : filter === "Failed" ? value.includes("failed") || value.includes("cancelled") : value.includes(filter.toLowerCase());
    });
    showModal(`
      <div class="modal-kicker">YOUR ACTIVITY</div><h2 class="modal-title" id="modalTitle">My orders</h2>
      <p class="modal-copy">${orders.length ? "Order status is loaded from your account." : "No orders are on your account yet."}</p>
      <div class="order-filters">${["All", "Pending", "Processing", "Completed", "Failed"].map((name) => `<button class="filter-chip ${filter === name ? "selected" : ""}" type="button" data-order-filter="${name}">${name}</button>`).join("")}</div>
      ${filteredOrders.length ? `<div class="order-list">${filteredOrders.map((order) => `
        <article class="order-item"><div class="order-item-head"><span><strong>${escapeHtml(order.game)}</strong><small>${escapeHtml(order.package)} · ${new Date(order.createdAt).toLocaleString()}</small></span><span class="order-badge">${escapeHtml(order.status)}</span></div>
        <div class="receipt-row"><span>Order number</span><strong class="receipt-code">${escapeHtml(order.orderNumber)}</strong></div>
        <div class="receipt-row"><span>Payment · Total</span><strong>${escapeHtml(order.payment)} · ${money(order.total, order.currency)}</strong></div>
        <button class="modal-secondary" type="button" data-view-order="${escapeHtml(order.id)}">View details</button></article>`).join("")}</div>` : '<div class="modal-empty">No orders match this filter.</div>'}
    `);
  } catch (error) {
    showModal(`<div class="modal-kicker">YOUR ACTIVITY</div><h2 class="modal-title" id="modalTitle">My orders</h2><p class="modal-error" role="alert">${escapeHtml(error.message || "Unable to load your orders.")}</p>`);
  }
}

async function openProductionOrder(orderId) {
  showModal('<div class="modal-kicker">ORDER DETAILS</div><h2 class="modal-title" id="modalTitle">Loading order</h2>');
  try {
    const response = await fetch(`/api/orders/mine?id=${encodeURIComponent(orderId)}`, { headers: { accept: "application/json" } });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Unable to load order details.");
    const order = mapDatabaseOrder(result.order);
    const raw = order.raw;
    const payment = Array.isArray(raw.payments) ? raw.payments[0] : raw.payments;
    const topup = Array.isArray(raw.topup_transactions) ? raw.topup_transactions[0] : raw.topup_transactions;
    showModal(`<div class="modal-kicker">ORDER DETAILS</div><h2 class="modal-title" id="modalTitle">Order ${escapeHtml(order.orderNumber)}</h2>
      <p class="modal-copy">Last updated ${new Date(order.updatedAt).toLocaleString()}</p><div class="receipt-box">
      <div class="receipt-row"><span>Game / Package</span><strong>${escapeHtml(order.game)} · ${escapeHtml(order.package)}</strong></div>
      <div class="receipt-row"><span>Player ID / Zone</span><strong>${escapeHtml(order.playerId)}${order.serverId ? ` · ${escapeHtml(order.serverId)}` : ""}</strong></div>
      <div class="receipt-row"><span>Order status</span><strong>${escapeHtml(order.status)}</strong></div>
      <div class="receipt-row"><span>Payment status</span><strong>${escapeHtml(order.paymentStatus)}</strong></div>
      <div class="receipt-row"><span>Top-up status</span><strong>${escapeHtml(order.topUpStatus)}</strong></div>
      <div class="receipt-row"><span>Payment method · Total</span><strong>${escapeHtml(order.payment)} · ${money(order.total, order.currency)}</strong></div>
      <div class="receipt-row"><span>Payment reference</span><strong>${escapeHtml(payment?.provider_transaction_id || "Not created")}</strong></div>
      <div class="receipt-row"><span>Top-up reference</span><strong>${escapeHtml(topup?.response_reference || topup?.provider_transaction_id || "Not started")}</strong></div></div>
      <p class="demo-notice">Statuses come from the server database. Delivery and payment status require configured providers.</p>`);
  } catch (error) {
    showModal(`<div class="modal-kicker">ORDER DETAILS</div><h2 class="modal-title" id="modalTitle">Order unavailable</h2><p class="modal-error" role="alert">${escapeHtml(error.message || "Unable to load order details.")}</p>`);
  }
}

function openOrders(filter = "All") {
  if (databaseCatalogEnabled) return openProductionOrders(filter);
  const allOrders = mockProvidersEnabled ? getOrders() : [];
  const filteredOrders = filter === "All" ? allOrders : allOrders.filter((order) => {
    const status = `${order.status} ${order.topUpStatus || ""}`.toLowerCase();
    if (filter === "Pending") return status.includes("awaiting") || status.includes("pending");
    if (filter === "Failed") return status.includes("failed") || status.includes("timeout") || status.includes("cancelled");
    if (filter === "Completed") return status.includes("completed") || status.includes("refunded");
    return status.includes(filter.toLowerCase());
  });
  showModal(`
    <div class="modal-kicker">YOUR ACTIVITY</div>
    <h2 class="modal-title" id="modalTitle">My orders</h2>
    <p class="modal-copy">${allOrders.length ? "Your recent orders are saved on this device." : "Your recent top-ups will appear here once you place an order."}</p>
    <div class="order-filters">${["All", "Pending", "Processing", "Completed", "Failed"].map((name) => `<button class="filter-chip ${filter === name ? "selected" : ""}" type="button" data-order-filter="${name}">${name}</button>`).join("")}</div>
    ${filteredOrders.length ? `<div class="order-list">${filteredOrders.map((order) => `
      <article class="order-item">
        <div class="order-item-head"><span><strong>${escapeHtml(order.game)}</strong><small>${escapeHtml(order.package)} · ${new Date(order.createdAt).toLocaleString()}</small></span><span class="order-badge">${escapeHtml(order.status)}</span></div>
        <div class="receipt-row"><span>Reference</span><strong class="receipt-code">${escapeHtml(order.id)}</strong></div>
        <div class="receipt-row"><span>Player</span><strong>${escapeHtml(order.playerId || "")}${order.serverId ? ` · ${escapeHtml(order.serverId)}` : ""}</strong></div>
        <div class="receipt-row"><span>Payment · Total</span><strong>${escapeHtml(order.payment || "")} · ${money(order.total ?? order.price)}</strong></div>
        <button class="modal-secondary" type="button" data-view-order="${escapeHtml(order.id)}">View details</button>
      </article>`).join("")}</div>` : '<div class="modal-empty">No orders match this filter.</div>'}
    <p class="demo-notice">Order history is stored locally. Payment and top-up statuses are demonstrations, not provider confirmations.</p>
  `);
}

function viewOrder(orderId) {
  if (databaseCatalogEnabled) return openProductionOrder(orderId);
  if (!mockProvidersEnabled) return showToast("Local order history is disabled in production.");
  const order = getOrders().find((entry) => entry.id === orderId);
  if (!order) return showToast("This order is no longer available in local history.");
  const timeline = order.timeline || [{ status: order.status, description: "Previous demo order", at: order.createdAt }];
  showModal(`
    <div class="modal-kicker">ORDER DETAILS</div><h2 class="modal-title" id="modalTitle">Order #${escapeHtml(order.id)}</h2>
    <p class="modal-copy">Status: <strong>${escapeHtml(order.status)}</strong> · Last updated ${new Date(order.updatedAt || order.createdAt).toLocaleString()}</p>
    <div class="receipt-box">
      <div class="receipt-row"><span>Game / Package</span><strong>${escapeHtml(order.game)} · ${escapeHtml(order.package)}</strong></div>
      <div class="receipt-row"><span>Player ID</span><strong>${escapeHtml(order.playerId)}</strong></div>
      ${order.serverId ? `<div class="receipt-row"><span>Region / Server</span><strong>${escapeHtml(order.region || "")} · ${escapeHtml(order.serverId)}</strong></div>` : ""}
      <div class="receipt-row"><span>Payment status</span><strong>${escapeHtml(order.paymentStatus || order.status)}</strong></div>
      <div class="receipt-row"><span>Top-up status</span><strong>${escapeHtml(order.topUpStatus || order.status)}</strong></div>
      <div class="receipt-row"><span>Subtotal · Discount · Fee · Total</span><strong>${money(order.price)} · ${money(order.discount || 0)} · ${money(order.platformFee || 0)} · ${money(order.total ?? order.price)}</strong></div>
      <div class="receipt-row"><span>Payment method</span><strong>${escapeHtml(order.payment || "Unknown")}</strong></div>
      ${order.transactionId ? `<div class="receipt-row"><span>Transaction ID</span><strong>${escapeHtml(order.transactionId)}</strong></div>` : ""}
      ${order.topUpReference ? `<div class="receipt-row"><span>Top-up reference</span><strong>${escapeHtml(order.topUpReference)}</strong></div>` : ""}
      ${order.adminNote ? `<div class="receipt-row"><span>Admin note</span><strong>${escapeHtml(order.adminNote)}</strong></div>` : ""}
    </div>
    <h3 class="timeline-title">Order timeline</h3>
    <ol class="order-timeline">${timeline.map((item) => `<li><strong>${escapeHtml(item.status)}</strong><small>${escapeHtml(item.description)}</small><time>${new Date(item.at).toLocaleString()}</time></li>`).join("")}</ol>
    ${paymentIsPending(order) ? `<button class="primary-button modal-primary" type="button" data-action="open-pending-order" data-order-id="${escapeHtml(order.id)}">Continue demo payment</button>` : ""}
    <button class="primary-button modal-primary" type="button" data-order-invoice="${escapeHtml(order.id)}">Download invoice</button>
    <button class="modal-secondary" type="button" data-action="buy-again" data-order-id="${escapeHtml(order.id)}">Buy again</button>
    <p class="demo-notice">This order record is local demo data. No real provider state is available.</p>
  `);
}

function downloadInvoice(orderId) {
  if (!mockProvidersEnabled) return showToast("Demo invoices are disabled in production.");
  const order = getOrders().find((entry) => entry.id === orderId);
  if (!order) return showToast("Invoice unavailable: order was not found.");
  const safe = (value) => escapeHtml(String(value ?? ""));
  const invoice = `<!doctype html><html lang="en"><meta charset="utf-8"><title>Invoice ${safe(order.id)}</title><style>body{font:16px Arial,sans-serif;max-width:760px;margin:40px auto;color:#20222e}h1{color:#25283a}.meta{color:#686b78}.row{display:flex;justify-content:space-between;border-bottom:1px solid #ddd;padding:12px 0}.note{margin-top:28px;padding:14px;background:#f1f3f7}</style><h1>Jeff Topup — Demo invoice</h1><p class="meta">Invoice ${safe(order.id)} · ${safe(new Date(order.createdAt).toLocaleString())}</p><div class="row"><span>Order ID</span><strong>${safe(order.id)}</strong></div><div class="row"><span>Customer</span><strong>${safe(order.userId || "Guest")}</strong></div><div class="row"><span>Game / Product</span><strong>${safe(order.game)} · ${safe(order.productId || "")}</strong></div><div class="row"><span>Player ID / Server</span><strong>${safe(order.playerId)} · ${safe(order.serverId || "—")}</strong></div><div class="row"><span>Package</span><strong>${safe(order.package)}</strong></div><div class="row"><span>Subtotal / Discount / Fee</span><strong>${money(order.price)} / ${money(order.discount || 0)} / ${money(order.platformFee || 0)}</strong></div><div class="row"><span>Payment method / status</span><strong>${safe(order.payment)} · ${safe(order.paymentStatus || order.status)}</strong></div><div class="row"><span>Transaction ID</span><strong>${safe(order.transactionId || "Not available")}</strong></div><div class="row"><span>Total</span><strong>${money(order.total ?? order.price)}</strong></div><p class="note">Demo invoice only. No payment was collected and no game top-up was delivered by this browser-only application.</p></html>`;
  const url = URL.createObjectURL(new Blob([invoice], { type: "text/html;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `jeff-topup-invoice-${order.id}.html`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function openNotifications() {
  if (!mockProvidersEnabled) return showToast("Local notifications are disabled in production.");
  const notifications = readStorage(storageKeys.notifications, []);
  showModal(`<div class="modal-kicker">LOCAL ACTIVITY</div><h2 class="modal-title" id="modalTitle">Notifications</h2><p class="modal-copy">Updates generated by this browser demo.</p>${notifications.length ? `<div class="order-list">${notifications.map((item) => `<article class="order-item"><strong>${escapeHtml(item.message)}</strong><small>${new Date(item.createdAt).toLocaleString()}</small>${item.orderId ? `<button class="modal-secondary" type="button" data-view-order="${escapeHtml(item.orderId)}">View order</button>` : ""}</article>`).join("")}</div>` : '<div class="modal-empty">No notifications yet.</div>'}<p class="demo-notice">Notifications are local and are not connected to payment or game services.</p>`);
}

async function openProductionAdminOverview() {
  showModal('<div class="modal-kicker">ADMIN DATA</div><h2 class="modal-title" id="modalTitle">Checking admin access</h2><p class="modal-copy">Loading authorized database records…</p>');
  try {
    const response = await fetch("/api/orders?admin=1", { headers: { accept: "application/json" } });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Unable to load admin data.");
    const orders = result.orders || [];
    const sections = [
      ["Games", result.games], ["Game regions", result.regions], ["Packages", result.packages],
      ["Users", result.users], ["Payments", result.payments], ["Top-up transactions", result.topupTransactions]
    ];
    showModal(`<div class="modal-kicker">ADMIN DATA · READ ONLY</div><h2 class="modal-title" id="modalTitle">Operations overview</h2>
      <p class="modal-copy">This view is backed by Supabase and shown only after server-side ADMIN role verification.</p>
      <div class="order-list">${sections.map(([name, entries]) => `<article class="order-item"><div class="order-item-head"><strong>${escapeHtml(name)}</strong><span class="order-badge">${entries?.length || 0}</span></div></article>`).join("")}</div>
      ${orders.length ? `<h3 class="timeline-title">Recent orders</h3><div class="order-list">${orders.map((order) => {
        const game = Array.isArray(order.games) ? order.games[0] : order.games;
        const pkg = Array.isArray(order.diamond_packages) ? order.diamond_packages[0] : order.diamond_packages;
        return `<article class="order-item"><div class="order-item-head"><span><strong>${escapeHtml(order.order_number)} · ${escapeHtml(game?.name || "Game")}</strong><small>${escapeHtml(pkg?.name || "Package")} · ${escapeHtml(order.player_id)}</small></span><span class="order-badge">${escapeHtml(order.order_status)}</span></div><div class="receipt-row"><span>Payment / top-up</span><strong>${escapeHtml(order.payment_status)} · ${escapeHtml(order.topup_status)}</strong></div><div class="receipt-row"><span>Total</span><strong>${money(order.total_amount, order.currency)}</strong></div></article>`;
      }).join("")}</div>` : '<div class="modal-empty">There are no database orders yet.</div>'}
      <p class="demo-notice">Catalog edits, user administration, promotions, manual payment decisions, and top-up actions do not have production write endpoints yet. No order can be marked paid or completed from this screen.</p>`);
  } catch (error) {
    showModal(`<div class="modal-kicker">ADMIN DATA</div><h2 class="modal-title" id="modalTitle">Admin access unavailable</h2><p class="modal-error" role="alert">${escapeHtml(error.message || "Unable to load admin data.")}</p>`);
  }
}

function openAdminOrders() {
  if (databaseCatalogEnabled) return openProductionAdminOverview();
  if (!mockProvidersEnabled) return showToast("Admin actions are unavailable outside the local demo environment.");
  const orders = getOrders();
  const pricing = getPricingConfig();
  showModal(`<div class="modal-kicker">DEMO ADMIN</div><h2 class="modal-title" id="modalTitle">Order management</h2><p class="modal-copy">Administrative actions affect local demo records only.</p>
    <form id="adminFeeForm" class="pricing-settings">
      <h3>Demo fee settings</h3>
      <div class="pricing-fields">
        <label class="modal-label" for="platformFeePercent">Platform fee %<input class="modal-input" id="platformFeePercent" name="platformFeePercent" type="number" min="0" max="100" step="0.1" value="${pricing.platformFeePercent}" required></label>
        <label class="modal-label" for="sellerCommissionPercent">Seller commission %<input class="modal-input" id="sellerCommissionPercent" name="sellerCommissionPercent" type="number" min="0" max="100" step="0.1" value="${pricing.sellerCommissionPercent}" required></label>
        <label class="modal-label" for="minimumFee">Minimum fee<input class="modal-input" id="minimumFee" name="minimumFee" type="number" min="0" step="0.01" value="${pricing.minimumFee}" required></label>
        <label class="modal-label" for="maximumFee">Maximum fee<input class="modal-input" id="maximumFee" name="maximumFee" type="number" min="0" step="0.01" value="${pricing.maximumFee}" required></label>
      </div>
      <button class="primary-button modal-primary" type="submit">Save demo pricing</button>
      <p class="demo-notice">Rates apply only to new local demo orders. Seller commission is stored for future seller integration.</p>
    </form>
    ${orders.length ? `<div class="order-list">${orders.map((order) => `<article class="order-item"><div class="order-item-head"><span><strong>${escapeHtml(order.id)} · ${escapeHtml(order.game)}</strong><small>${escapeHtml(order.playerId)} · ${escapeHtml(order.package)}</small></span><span class="order-badge">${escapeHtml(order.status)}</span></div><div class="receipt-row"><span>Payment</span><strong>${escapeHtml(order.paymentStatus || "Legacy demo")}</strong></div><button class="modal-secondary" type="button" data-view-order="${escapeHtml(order.id)}">View order</button>${!orderIsComplete(order) && !order.refundedAt && paymentIsSuccessful(order) ? `<label class="modal-label" for="adminReference-${escapeHtml(order.id)}">Demo top-up reference<input class="modal-input" id="adminReference-${escapeHtml(order.id)}" placeholder="Enter demo reference"></label><label class="modal-label" for="adminNote-${escapeHtml(order.id)}">Admin note (optional)<input class="modal-input" id="adminNote-${escapeHtml(order.id)}" placeholder="Internal demo note"></label><label class="confirm-check"><input id="adminPaymentReviewed-${escapeHtml(order.id)}" type="checkbox"> I reviewed this demo payment</label><button class="text-button" type="button" data-admin-complete="${escapeHtml(order.id)}">Mark demo completed</button>` : ""}</article>`).join("")}</div>` : '<div class="modal-empty">There are no orders to manage yet.</div>'}<p class="demo-notice">This is not a protected admin dashboard and must not be used to verify real payments.</p>`);
}

function openRewards() {
  if (!mockProvidersEnabled) return showToast("Rewards are disabled in production until a verified rewards service is connected.");
  const points = getPoints();
  showModal(`
    <div class="modal-kicker">PLAYER PERKS</div>
    <h2 class="modal-title" id="modalTitle">Rewards, on us.</h2>
    <p class="modal-copy">Earn points with each top-up. You have <strong style="color:var(--lime)">${points} points</strong> available in this demo.</p>
    <div class="reward-list">${rewards.map((reward, index) => `
      <article class="reward-item"><span class="reward-gem">✦</span><span><strong>${reward.name}</strong><small>${reward.game} · ${reward.points} points</small></span>
      <button type="button" data-redeem="${index}" ${points < reward.points ? "disabled" : ""}>${points >= reward.points ? "Redeem" : "Need more"}</button></article>`).join("")}</div>
    <p class="demo-notice">Rewards are examples for this demo; redemption does not deliver in-game items.</p>
  `);
}

function redeemReward(index) {
  const reward = rewards[index];
  if (!reward || getPoints() < reward.points) return;
  saveStorage(storageKeys.points, getPoints() - reward.points);
  openRewards();
  showToast(`${reward.name} redeemed in the demo.`);
}

function openLogin() {
  if (!mockProvidersEnabled) {
    openAuthenticatedProfile();
    return;
  }
  const existingUser = readStorage(storageKeys.user, null);
  if (existingUser) {
    showModal(`<div class="modal-kicker">PLAYER PROFILE</div><h2 class="modal-title" id="modalTitle">Welcome back.</h2><p class="modal-copy">Signed in as ${escapeHtml(existingUser.email)} on this browser.</p><button class="primary-button modal-primary" type="button" data-action="sign-out">Sign out</button><p class="demo-notice">This demo profile is stored locally and is not a real authentication service.</p>`);
    return;
  }
  showModal(`
    <div class="modal-kicker">PLAYER PROFILE</div><h2 class="modal-title" id="modalTitle">Sign in to your account</h2>
    <p class="modal-copy">Keep your order history and rewards together.</p>
    <form id="loginForm">
      <label class="modal-label" for="loginEmail">Email</label><input class="modal-input" id="loginEmail" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>
      <label class="modal-label" for="loginPassword">Password</label><input class="modal-input" id="loginPassword" name="password" type="password" autocomplete="current-password" placeholder="Enter a password" minlength="4" required>
      <p class="modal-error hidden" id="loginError" role="alert"></p>
      <button class="primary-button modal-primary" type="submit">Continue <span>→</span></button>
    </form>
    <p class="demo-notice">Demo sign-in only: credentials are not transmitted or stored. Only your email is remembered in this browser.</p>
  `);
}

async function openAuthenticatedProfile() {
  try {
    const response = await fetch("/api/auth/me", { headers: { accept: "application/json" } });
    if (response.ok) {
      const { user } = await response.json();
      showModal(`<div class="modal-kicker">PLAYER PROFILE</div><h2 class="modal-title" id="modalTitle">Welcome back.</h2><p class="modal-copy">Signed in as ${escapeHtml(user.email || "your account")}.</p><button class="primary-button modal-primary" type="button" data-action="sign-out">Sign out</button>`);
      return;
    }
    renderAuthenticationForm();
  } catch (error) {
    console.error("Unable to check the signed-in user.", error);
    renderAuthenticationForm("sign-in", "Authentication service is unavailable. Try again shortly.");
  }
}

function renderAuthenticationForm(mode = "sign-in", errorMessage = "") {
  const isSignUp = mode === "sign-up";
  showModal(`
    <div class="modal-kicker">PLAYER PROFILE</div><h2 class="modal-title" id="modalTitle">${isSignUp ? "Create your account" : "Sign in to your account"}</h2>
    <p class="modal-copy">Use your account to keep your order history and profile together.</p>
    <form id="loginForm" data-auth-mode="${mode}">
      ${isSignUp ? '<label class="modal-label" for="loginDisplayName">Display name</label><input class="modal-input" id="loginDisplayName" name="displayName" autocomplete="name" maxlength="80" required>' : ""}
      <label class="modal-label" for="loginEmail">Email</label><input class="modal-input" id="loginEmail" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>
      <label class="modal-label" for="loginPassword">Password</label><input class="modal-input" id="loginPassword" name="password" type="password" autocomplete="${isSignUp ? "new-password" : "current-password"}" minlength="10" maxlength="128" required>
      <p class="modal-error ${errorMessage ? "" : "hidden"}" id="loginError" role="alert">${escapeHtml(errorMessage)}</p>
      <button class="primary-button modal-primary" type="submit">${isSignUp ? "Create account" : "Sign in"} <span>→</span></button>
    </form>
    <button class="text-button" type="button" data-action="toggle-auth-mode" data-mode="${isSignUp ? "sign-in" : "sign-up"}">${isSignUp ? "Already have an account? Sign in" : "New here? Create an account"}</button>
    <p class="demo-notice">Authentication is handled by the configured Supabase project. Email confirmation may be required.</p>
  `);
}

async function signOutAuthenticatedUser() {
  try {
    const response = await fetch("/api/auth/sign-out", { method: "POST" });
    if (!response.ok) throw new Error("The server could not sign you out.");
    closeModal();
    showToast("You have signed out.");
  } catch (error) {
    console.error("Unable to sign out.", error);
    showToast(error.message || "Unable to sign out.");
  }
}

function openAccounts() {
  const game = games.find((entry) => entry.id === "mobile-legends");
  const image = assetFor(game.id, "game_thumbnail", "product_image", "game_icon");
  showModal(`
    <div class="modal-kicker">PLAYER MARKET</div><h2 class="modal-title" id="modalTitle">Game account listing</h2>
    <p class="modal-copy">Example listing · account details are shown before purchase.</p>
    <div class="checkout-game"><span class="summary-game-icon" data-image-frame="${image?.id || ""}" style="background:#222431">${image?.src ? `<img src="${escapeHtml(image.src)}" alt="" data-image-id="${escapeHtml(image.id)}">` : escapeHtml(game.initials)}</span><span><strong>Mobile Legends · Global</strong><small>Sample seller · Listing TZ-A001</small></span><b>$60.00</b></div>
    <div class="receipt-box"><div class="receipt-row"><span>Rank</span><strong>Unranked · Sample</strong></div><div class="receipt-row"><span>Skins / heroes</span><strong>Sample listing details</strong></div><div class="receipt-row"><span>Delivery</span><strong>Not available in demo</strong></div></div>
    <p class="demo-notice">Account purchases are not enabled in this demo. Browse the game top-up catalog to try the complete checkout flow.</p>
    <button class="primary-button modal-primary" type="button" data-action="close-modal">Got it</button>
  `);
}

function openSupport(orderId = "") {
  const order = orderId ? getOrders().find((entry) => entry.id === orderId) : null;
  showModal(`<div class="modal-kicker">PLAYER SUPPORT</div><h2 class="modal-title" id="modalTitle">Need a hand?</h2><p class="modal-copy">Review the order details below before contacting support.</p>${order ? `<div class="receipt-box"><div class="receipt-row"><span>Order ID</span><strong>${escapeHtml(order.id)}</strong></div><div class="receipt-row"><span>Game / Player</span><strong>${escapeHtml(order.game)} · ${escapeHtml(order.playerId)}</strong></div><div class="receipt-row"><span>Transaction</span><strong>${escapeHtml(order.paymentStatus || "Demo only")}</strong></div></div>` : ""}<button class="primary-button modal-primary" type="button" data-action="orders">View my orders <span>→</span></button><p class="demo-notice">No support message is sent. Never share payment credentials or card details here.</p>`);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

document.addEventListener("error", (event) => {
  const image = event.target.closest?.("img[data-image-id]");
  if (!image) return;
  const frame = image.closest("[data-image-frame]");
  if (!frame) return;
  const record = state.images.find((entry) => entry.id === image.dataset.imageId);
  frame.innerHTML = imageFallback(record?.alt || "Game image", image.dataset.imageId);
}, true);

document.addEventListener("load", (event) => {
  const image = event.target.closest?.("img[data-image-id]");
  if (!image || image.naturalWidth >= 256 && image.naturalHeight >= 256) return;
  const frame = image.closest("[data-image-frame]");
  const record = state.images.find((entry) => entry.id === image.dataset.imageId);
  if (frame && record?.owner !== "bundled") frame.innerHTML = imageFallback("Image dimensions are too small", image.dataset.imageId);
}, true);

document.addEventListener("click", (event) => {
  const openImage = event.target.closest("[data-open-image]");
  if (openImage) {
    event.preventDefault();
    event.stopPropagation();
    openImageViewer(openImage.dataset.openImage);
    return;
  }

  const retryImage = event.target.closest("[data-retry-image]");
  if (retryImage) {
    const image = state.images.find((entry) => entry.id === retryImage.dataset.retryImage);
    if (image) {
      image.src = image.objectUrl || `${safeImageUrl(image.url)}${image.url.includes("?") ? "&" : "?"}retry=${Date.now()}`;
      const frame = retryImage.closest("[data-image-frame]");
      if (frame) frame.innerHTML = `<img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || "Game image")}" data-image-id="${escapeHtml(image.id)}"><button class="image-open-button" type="button" data-open-image="${escapeHtml(image.id)}" aria-label="Open image">Expand</button>`;
    } else {
      refreshImageRecords().catch((error) => showToast(error.message));
    }
    return;
  }

  const viewerAction = event.target.closest("[data-viewer-action]");
  if (viewerAction) {
    const action = viewerAction.dataset.viewerAction;
    if (action === "next") moveViewer(1);
    if (action === "previous") moveViewer(-1);
    if (action === "zoom-in" || action === "zoom-out") {
      state.zoomed = action === "zoom-in";
      $(".viewer-stage img", modalPanel)?.classList.toggle("zoomed", state.zoomed);
    }
    if (action === "fullscreen") {
      if (!document.fullscreenElement) modalPanel.requestFullscreen?.().catch((error) => showToast(`Fullscreen is unavailable: ${error.message}`));
      else document.exitFullscreen?.();
    }
    return;
  }

  const galleryThumb = event.target.closest("[data-gallery-index]");
  if (galleryThumb) {
    state.galleryIndex = Number(galleryThumb.dataset.galleryIndex);
    renderGameGallery();
    return;
  }

  const imageAction = event.target.closest("[data-image-action]");
  if (imageAction) {
    const action = imageAction.dataset.imageAction;
    const imageId = imageAction.dataset.imageId;
    if (action === "replace") {
      state.replaceImageId = imageId;
      const record = state.images.find((image) => image.id === imageId);
      openAdminImages();
      $("#adminImageType").value = record.type;
      $("#adminImageAlt").value = record.alt || "";
      $("#adminImageCredit").value = record.credit || "";
      return;
    }
    updateImageOrder(imageId, action).catch((error) => {
      console.error("Unable to update game image.", error);
      showToast(error.message || "Could not update the image.");
    });
    return;
  }

  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    event.stopPropagation();
    const favorites = readStorage(storageKeys.favorites, []);
    const gameId = favorite.dataset.favorite;
    const next = favorites.includes(gameId) ? favorites.filter((id) => id !== gameId) : [...favorites, gameId];
    saveStorage(storageKeys.favorites, next);
    renderGames();
    return;
  }

  const packageButton = event.target.closest("[data-package]");
  if (packageButton) return selectPackage(Number(packageButton.dataset.package));

  const redeemButton = event.target.closest("[data-redeem]");
  if (redeemButton) return redeemReward(Number(redeemButton.dataset.redeem));

  const orderFilter = event.target.closest("[data-order-filter]");
  if (orderFilter) return openOrders(orderFilter.dataset.orderFilter);
  const orderViewer = event.target.closest("[data-view-order]");
  if (orderViewer) return viewOrder(orderViewer.dataset.viewOrder);
  const invoiceButton = event.target.closest("[data-order-invoice]");
  if (invoiceButton) return downloadInvoice(invoiceButton.dataset.orderInvoice);
  const usePlayerButton = event.target.closest("[data-use-player]");
  if (usePlayerButton) return useSavedPlayer(usePlayerButton.dataset.usePlayer);
  const deletePlayerButton = event.target.closest("[data-delete-player]");
  if (deletePlayerButton) {
    if (window.confirm("Delete this saved player account from this device?")) deleteSavedPlayer(deletePlayerButton.dataset.deletePlayer);
    return;
  }

  const actionElement = event.target.closest("[data-action]");
  if (actionElement) {
    const action = actionElement.dataset.action;
    if (action === "focus-search") $("#gameSearch").focus();
    if (action === "menu") {
      state.menuOpen = !state.menuOpen;
      $(".main-nav").classList.toggle("open", state.menuOpen);
    }
    if (action === "show-all") {
      state.category = "All";
      state.query = "";
      $("#gameSearch").value = "";
      $$(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.category === "All"));
      renderGames();
      $("#games").scrollIntoView({ behavior: "smooth" });
    }
    if (action === "checkout") openCheckout();
    if (action === "close-modal") closeModal();
    if (action === "orders") openOrders();
    if (action === "wallet") openDemoWallet();
    if (action === "wallet-open") openDemoWallet(true);
    if (action === "wallet-deposit-flow") openDemoWallet(true);
    if (action === "return-checkout") renderCheckout();
    if (action === "feature-status") openFeatureStatus();
    if (action === "notifications") openNotifications();
    if (action === "admin-orders") openAdminOrders();
    if (action === "verify-player") verifyPlayer();
    if (action === "save-player") savePlayer();
    if (action === "saved-players") openSavedPlayers();
    if (action === "rewards") openRewards();
    if (action === "login") openLogin();
    if (action === "toggle-auth-mode") renderAuthenticationForm(actionElement.dataset.mode);
    if (action === "account-market") openAccounts();
    if (action === "support") openSupport();
    if (action === "admin-images") {
      state.replaceImageId = null;
      openAdminImages();
    }
    if (action === "seller-listing") openSellerListing();
    if (action === "publish-listing") publishSellerListing();
    if (action === "edit-listing") openSellerListing();
    if (action === "back-games") {
      $("#topupSection").classList.add("hidden");
      $("#games").scrollIntoView({ behavior: "smooth" });
    }
    if (action === "review-order") {
      const checkedPayment = $('input[name="payment"]:checked');
      state.payment = checkedPayment ? checkedPayment.value : "KHQR";
      openOrderConfirmation();
    }
    if (action === "edit-checkout") renderCheckout();
    if (action === "confirm-order") confirmOrder();
    if (action === "simulate-payment") simulatePaymentOutcome(actionElement.dataset.orderId, actionElement.dataset.outcome);
    if (action === "simulate-topup") simulateOrderOutcome(actionElement.dataset.orderId, actionElement.dataset.outcome);
    if (action === "simulate-refund") simulateWalletRefund(actionElement.dataset.orderId);
    if (action === "retry-demo-order") retryDemoOrder(actionElement.dataset.orderId);
    if (action === "retry-demo-payment") restartDemoPayment(actionElement.dataset.orderId);
    if (action === "cancel-demo-payment") endDemoPayment(actionElement.dataset.orderId, "Cancelled (demo)");
    if (action === "open-pending-order") {
      const order = getOrders().find((entry) => entry.id === actionElement.dataset.orderId);
      if (order) showOrderReceipt(order);
    }
    if (action === "buy-again") buyAgain(actionElement.dataset.orderId);
    if (action === "support-order") openSupport(actionElement.dataset.orderId);
    if (action === "sign-out") {
      if (mockProvidersEnabled) {
        localStorage.removeItem(storageKeys.user);
        closeModal();
        showToast("You have signed out.");
      } else {
        signOutAuthenticatedUser();
      }
    }
    return;
  }

  const adminCompleteButton = event.target.closest("[data-admin-complete]");
  if (adminCompleteButton) return adminCompleteOrder(adminCompleteButton.dataset.adminComplete);

  const card = event.target.closest("[data-game]");
  if (card) chooseGame(card.dataset.game);

  const category = event.target.closest("[data-category]");
  if (category) {
    state.category = category.dataset.category;
    $$(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip === category));
    renderGames();
  }

  const payment = event.target.closest(".payment-option");
  if (payment) {
    if ($("input", payment).disabled) return;
    const selectedPayment = $("input", payment).value;
    if (state.payment !== selectedPayment) {
      state.payment = selectedPayment;
      renderCheckout();
    }
    return;
  }

  const walletDeposit = event.target.closest("[data-wallet-deposit]");
  if (walletDeposit) return simulateWalletDeposit(Number(walletDeposit.dataset.walletDeposit));
});

document.addEventListener("input", (event) => {
  if (event.target.id === "checkoutEmail") {
    state.checkoutEmail = event.target.value.trim();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "gameSelector") {
    state.gameFilter = event.target.value;
    renderGames();
  }
  if (event.target.id === "adminGameSelect") {
    state.replaceImageId = null;
    openAdminImages();
    $("#adminGameSelect").value = event.target.value;
  }
  if (event.target.matches("[data-seller-image]")) {
    const selected = [...event.target.files];
    const type = event.target.dataset.sellerImage;
    const retained = (state.sellerFiles || []).filter((item) => item.type !== type);
    state.sellerFiles = retained;
    Promise.all(selected.map(async (file) => {
      await validateSellerFile(file);
      return { type, file, previewUrl: URL.createObjectURL(file) };
    })).then((newFiles) => {
      state.sellerFiles.push(...newFiles);
      previewSellerFiles();
    }).catch((error) => {
      console.error("Invalid seller image.", error);
      showToast(error.message);
      event.target.value = "";
    });
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "adminFeeForm") {
    event.preventDefault();
    const values = new FormData(event.target);
    const config = Object.fromEntries(["platformFeePercent", "sellerCommissionPercent", "minimumFee", "maximumFee"].map((key) => [key, Number(values.get(key))]));
    if (Object.values(config).some((value) => !Number.isFinite(value) || value < 0) ||
      config.platformFeePercent > 100 || config.sellerCommissionPercent > 100 ||
      config.minimumFee > config.maximumFee) {
      showToast("Enter fee percentages from 0–100 and set maximum fee at or above minimum fee.");
      return;
    }
    if (!saveStorage(storageKeys.pricing, config)) return;
    updatePriceSummary();
    openAdminOrders();
    showToast("Demo pricing settings saved.");
    return;
  }
  if (event.target.id === "adminImageForm") {
    event.preventDefault();
    const form = event.target;
    const progress = $("#adminUploadProgress");
    const file = $("#adminImageFile").files[0];
    progress.classList.remove("hidden");
    saveImage({
      gameId: $("#adminGameSelect").value,
      type: $("#adminImageType").value,
      file,
      url: $("#adminImageUrl").value.trim(),
      alt: $("#adminImageAlt").value.trim(),
      credit: $("#adminImageCredit").value.trim(),
      progressElement: progress
    }).then(() => {
      state.replaceImageId = null;
      openAdminImages();
      showToast("Game image saved.");
    }).catch((error) => {
      console.error("Unable to save game image.", error);
      openAdminImages(error.message || "Could not save this image.");
    });
    return;
  }
  if (event.target.id === "sellerListingForm") {
    event.preventDefault();
    const formData = new FormData(event.target);
    const files = (state.sellerFiles || []).filter((item) => item.file);
    const productImage = files.some((item) => item.type === "product_image");
    if (!productImage) return openSellerListing("Upload a product image before previewing the listing.");
    const price = Number(formData.get("price"));
    if (!Number.isFinite(price) || price <= 0) return openSellerListing("Enter a valid listing price.");
    state.sellerDraft = {
      gameId: String(formData.get("gameId")),
      title: String(formData.get("title")).trim(),
      price,
      files: files.slice(),
      images: []
    };
    openSellerPreview();
    return;
  }
  if (event.target.id !== "loginForm") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  if (!mockProvidersEnabled) {
    const mode = event.target.dataset.authMode;
    const endpoint = mode === "sign-up" ? "/api/auth/sign-up" : "/api/auth/sign-in";
    const payload = { email, password };
    if (mode === "sign-up") payload.displayName = String(formData.get("displayName") || "").trim();
    const submitButton = $('button[type="submit"]', event.target);
    submitButton.disabled = true;
    fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(payload)
    }).then(async (response) => {
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Authentication failed.");
      state.checkoutEmail = email;
      if (result.needsEmailConfirmation) {
        showModal(`<div class="modal-kicker">CONFIRM YOUR EMAIL</div><h2 class="modal-title" id="modalTitle">Check your inbox.</h2><p class="modal-copy">Follow the confirmation link sent to ${escapeHtml(email)}, then sign in.</p><button class="primary-button modal-primary" type="button" data-action="close-modal">Done</button>`);
        return;
      }
      showModal(`<div class="modal-kicker">PLAYER PROFILE</div><h2 class="modal-title" id="modalTitle">Welcome.</h2><p class="modal-copy">Signed in as ${escapeHtml(email)}.</p><button class="primary-button modal-primary" type="button" data-action="close-modal">Continue</button>`);
    }).catch((error) => {
      $("#loginError").textContent = error.message || "Authentication failed.";
      $("#loginError").classList.remove("hidden");
      submitButton.disabled = false;
    });
    return;
  }
  if (!email || !password) {
    $("#loginError").textContent = "Enter your email and password to continue.";
    $("#loginError").classList.remove("hidden");
    return;
  }
  state.checkoutEmail = email;
  saveStorage(storageKeys.user, { email });
  closeModal();
  showToast("Demo profile ready. Welcome!");
});

$("#gameSearch").addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderGames();
});
$("#gameSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const firstCard = $("[data-game]", gameGrid);
    if (firstCard) chooseGame(firstCard.dataset.game);
  }
});
$("#playerId").addEventListener("input", updatePlayerSummary);
$("#serverId").addEventListener("input", updatePlayerSummary);
$("#playerRegion").addEventListener("change", updatePlayerSummary);
$("#playerNickname").addEventListener("input", updatePlayerSummary);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.classList.contains("hidden")) closeModal();
  if (!modalBackdrop.classList.contains("hidden") && event.key === "ArrowRight" && state.viewerImages) moveViewer(1);
  if (!modalBackdrop.classList.contains("hidden") && event.key === "ArrowLeft" && state.viewerImages) moveViewer(-1);
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".game-card-select, .gallery-thumb")) {
    event.preventDefault();
    if (event.target.matches(".game-card-select")) chooseGame(event.target.dataset.game);
    else {
      state.galleryIndex = Number(event.target.dataset.galleryIndex);
      renderGameGallery();
    }
  }
  if (event.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
    event.preventDefault();
    $("#gameSearch").focus();
  }
});

renderGames();
renderEnvironmentBadge();
updateOrderCount();
if (databaseCatalogEnabled) {
  loadProductionIntegrationStatus();
  loadProductionCatalog().catch((error) => {
    $("#emptyGames").textContent = error.message || "The live game catalog is unavailable.";
    $("#emptyGames").classList.remove("hidden");
    console.error("The production game catalog could not be loaded.", { name: error?.name || "Error" });
  });
}
refreshImageRecords().catch((error) => {
  console.error("Unable to initialize game image library.", error);
  showToast(error.message || "The game image library could not be opened.");
});
