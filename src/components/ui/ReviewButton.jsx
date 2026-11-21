import { Button } from '@mui/material'

export default function ReviewButton({ label = 'Review', onClick }) {
  return (
    <Button
      size="small"
      onClick={onClick}
      sx={{ flexShrink: 0, px: 2, borderRadius: 999, fontSize: '0.75rem', color: 'text.primary', bgcolor: 'background.default', '&:hover': { bgcolor: 'divider' } }}
    >
      {label}
    </Button>
  )
}
