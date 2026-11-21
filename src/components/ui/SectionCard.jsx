import { Box, Card, Typography } from '@mui/material'

export default function SectionCard({ title, subtitle, alertSubtitle = false, action, children, sx }) {
  return (
    <Card sx={{ p: { xs: 2.5, md: 3 }, minWidth: 0, ...sx }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1.5, flexWrap: 'wrap', mb: 1.5 }}>
        <Box>
          <Typography variant="h2" component="h2">
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="caption"
              sx={{ display: 'block', fontWeight: alertSubtitle ? 700 : 500, color: alertSubtitle ? 'primary.main' : 'text.secondary' }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        {action}
      </Box>
      {children}
    </Card>
  )
}
