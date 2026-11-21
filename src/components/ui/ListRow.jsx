import { Box } from '@mui/material'

export default function ListRow({ leading, trailing, children }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1.75, '&:not(:last-child)': { borderBottom: 1, borderColor: 'divider' } }}>
      {leading}
      <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>
      {trailing}
    </Box>
  )
}
