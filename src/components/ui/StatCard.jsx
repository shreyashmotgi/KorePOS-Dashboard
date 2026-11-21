import { Card, Typography } from "@mui/material";
import { toneStyles } from "../../theme/theme";

export default function StatCard({ label, value, note, tone }) {
  return (
    <Card sx={{ p: 2 }}>
      <Typography
        variant="caption"
        sx={{
          display: "block",
          minHeight: { lg: "2.8em" },
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "text.secondary",
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h3"
        sx={{ my: 1, fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
      >
        {value}
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 700, color: toneStyles[tone].fg }}
      >
        {note}
      </Typography>
    </Card>
  );
}
