import { Avatar, Box, IconButton, InputBase, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined'
import ExpandMore from '@mui/icons-material/ExpandMore'

const pill = { height: 44, borderRadius: 999, bgcolor: 'background.paper' }

export default function Header({ title, subtitle, onMenu }) {
  return (
    <Box component="header" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <IconButton onClick={onMenu} aria-label="Open navigation" sx={{ ...pill, width: 44, display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
            {title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: { xs: '100%', sm: 'auto' } }}>
        <Box sx={{ ...pill, display: 'flex', alignItems: 'center', gap: 1, px: 2, flex: { xs: 1, sm: 'none' }, width: { sm: 246 }, color: 'text.secondary' }}>
          <SearchIcon fontSize="small" />
          <InputBase placeholder="Search merchants..." sx={{ flex: 1, fontSize: 12 }} inputProps={{ 'aria-label': 'Search merchants' }} />
        </Box>
        <Box sx={{ ...pill, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1, px: 2, fontSize: 12, fontWeight: 700 }}>
          <CalendarMonthOutlined fontSize="small" />
          Last 30 days
          <ExpandMore fontSize="small" />
        </Box>
        <IconButton aria-label="Notifications" sx={{ ...pill, width: 44 }}>
          <NotificationsNoneIcon />
        </IconButton>
        <Avatar src="/avatar.png" sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
          S
        </Avatar>
      </Box>
    </Box>
  )
}
