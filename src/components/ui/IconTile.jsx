import { Box } from '@mui/material'
import { toneStyles } from '../../theme/theme'

export default function IconTile({ icon, tone = 'neutral', round = false }) {
  const { bg, fg } = toneStyles[tone]
  return (
    <Box sx={{ width: 36, height: 36, flexShrink: 0, display: 'grid', placeItems: 'center', borderRadius: round ? '50%' : '10px', bgcolor: bg, color: fg }}>
      {icon}
    </Box>
  )
}
