import { Box, Button } from '@mui/material'

export default function SegmentedTabs({ options, value, onChange }) {
  return (
    <Box role="tablist" sx={{ display: 'flex', gap: 0.5, p: 0.5, borderRadius: 999, bgcolor: 'background.default', width: { xs: '100%', sm: 'auto' } }}>
      {options.map((option) => {
        const active = option.key === value
        return (
          <Button
            key={option.key}
            role="tab"
            aria-selected={active}
            size="small"
            onClick={() => onChange(option.key)}
            sx={{
              flex: { xs: 1, sm: 'none' },
              px: 2.25,
              borderRadius: 999,
              fontSize: '0.6875rem',
              fontWeight: active ? 700 : 500,
              color: active ? 'primary.contrastText' : 'text.secondary',
              bgcolor: active ? 'primary.main' : 'transparent',
              '&:hover': { bgcolor: active ? 'primary.main' : 'divider' },
            }}
          >
            {option.label}
          </Button>
        )
      })}
    </Box>
  )
}
