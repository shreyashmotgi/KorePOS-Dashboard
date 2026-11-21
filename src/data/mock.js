export const stats = [
  { label: "Total Merchants", value: "1,284", note: "+48  Last 30 days", tone: "positive" },
  { label: "Active Merchants", value: "1,102", note: "85.8% of total", tone: "positive" },
  { label: "Pending Applications", value: "36", note: "12 need review", tone: "alert" },
  { label: "Total Transaction Volume", value: "£4.82M", note: "+12.4% · Last 30 days", tone: "positive" },
  { label: "Payment Revenue", value: "£48.2K", note: "+9.8% · Last 30 days", tone: "positive" },
];

const dailyVolume = [
  95, 108, 105, 125, 118, 108, 135, 142, 128, 120, 148, 158, 142, 138, 155, 170,
  160, 152, 185, 175, 168, 200, 190, 182, 210, 195, 215, 225, 230, 228,
].map((v) => v * 1000);

export const metrics = {
  volume: {
    label: "Volume",
    total: "£4.82M",
    change: "+12.4% vs previous period",
    values: dailyVolume,
  },
  revenue: {
    label: "Revenue",
    total: "£48.2K",
    change: "+9.8% vs previous period",
    values: dailyVolume.map((v) => v * 0.01),
  },
  transactions: {
    label: "Transactions",
    total: "196,420",
    change: "+7.1% vs previous period",
    values: dailyVolume.map((v) => Math.round(v / 24.62)),
  },
};

export const attentionItems = [
  {
    icon: "doc",
    title: "12 Pending Verifications",
    description: "Documents require review",
    tone: "alert",
  },
  {
    icon: "wallet",
    title: "8 Payout Issues",
    description: "Need investigation",
    tone: "alert",
  },
  {
    icon: "history",
    title: "5 Chargebacks",
    description: "Recent disputes",
    tone: "alert",
  },
  {
    icon: "pause",
    title: "3 Inactive Merchants",
    description: "No recent activity",
    tone: "neutral",
  },
];

export const activities = [
  {
    icon: "check",
    name: "The SunSet",
    category: "Cafe",
    status: "Application approved",
    time: "12 mins ago",
    tone: "positive",
  },
  {
    icon: "swap",
    name: "The Humble Barber",
    category: "Barbershop",
    status: "First transaction £48.20",
    time: "1h ago",
    tone: "positive",
  },
  {
    icon: "doc",
    name: "Bombay Spice",
    category: "Restaurant",
    status: "Application submitted",
    time: "2h ago",
    tone: "alert",
  },
];

export const topMerchants = [
  { name: "The Daily Grind", type: "Cafe", transactions: "3,420 transactions", volume: "£84.2k" },
  { name: "Fade & Co.", type: "Barbershop", transactions: "1,840 transactions", volume: "£42.1k" },
  { name: "Ironfit", type: "Gym", transactions: "620 transactions", volume: "£12.4k" },
  { name: "Green Lane Market", type: "Store", transactions: "410 transactions", volume: "£8.9k" },
  { name: "Carnival", type: "Restaurant", transactions: "125 transactions", volume: "£5k" },
];
