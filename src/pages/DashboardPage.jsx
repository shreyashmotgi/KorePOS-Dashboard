import { Box } from "@mui/material";
import Header from "../components/layout/Header";
import StatCard from "../components/ui/StatCard";
import TransactionChart from "../components/dashboard/TransactionChart";
import NeedsAttention from "../components/dashboard/NeedsAttention";
import RecentActivity from "../components/dashboard/RecentActivity";
import TopMerchants from "../components/dashboard/TopMerchants";
import { stats } from "../data/mock";

const statsGrid = {
  display: "grid",
  gap: 2,
  gridTemplateColumns: {
    xs: "repeat(2, minmax(0, 1fr))",
    md: "repeat(3, minmax(0, 1fr))",
    lg: "repeat(5, minmax(0, 1fr))",
  },
  "& > :last-child": { gridColumn: { xs: "1 / -1", md: "auto" } },
};

const twoColumns = {
  display: "grid",
  gap: 2,
  gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "minmax(0, 1fr) 366px" },
};

export default function DashboardPage({ onMenu }) {
  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Header
        title="Dashboard Overview"
        subtitle="Sample data • Last 30 days • Updated 2 mins ago"
        onMenu={onMenu}
      />
      <Box sx={statsGrid}>
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Box>
      <Box sx={twoColumns}>
        <TransactionChart />
        <NeedsAttention />
      </Box>
      <Box sx={twoColumns}>
        <RecentActivity />
        <TopMerchants />
      </Box>
    </Box>
  );
}
