import { Avatar, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import GridViewOutlined from '@mui/icons-material/GridViewOutlined'
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined'
import SwapHorizOutlined from '@mui/icons-material/SwapHorizOutlined'
import ListAltOutlined from '@mui/icons-material/ListAltOutlined'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import ExpandMore from '@mui/icons-material/ExpandMore'
import logo from '../../assets/logo.png'
import { SIDEBAR_WIDTH } from '../../theme/theme'

const navItems = [
  { label: 'Dashboard Overview', icon: <GridViewOutlined />, active: true },
  { label: 'Merchants', icon: <StorefrontOutlined /> },
  { label: 'Transactions', icon: <SwapHorizOutlined /> },
  { label: 'Applications', icon: <ListAltOutlined /> },
  { label: 'Settings', icon: <SettingsOutlined /> },
]

const paperStyles = { width: SIDEBAR_WIDTH, bgcolor: 'secondary.main', color: '#fff', border: 0, p: 2 }

function SidebarContent({ onNavigate }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1, pt: 1.5, pb: 3, borderBottom: '1px solid #35352E' }}>
        <Box component="img" src={logo} alt="KorePOS logo" sx={{ height: 36 }} />
        <Typography variant="h2" sx={{ fontSize: '1.375rem', color: 'background.default' }}>
          KorePOS
        </Typography>
      </Box>

      <List sx={{ mt: 2, display: 'grid', gap: 1 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            onClick={onNavigate}
            sx={{
              height: 50,
              borderRadius: 999,
              color: item.active ? '#fff' : '#A8A29E',
              bgcolor: item.active ? 'primary.main' : 'transparent',
              '&:hover': { bgcolor: item.active ? 'primary.main' : '#26261F', color: '#fff' },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} slotProps={{ primary: { fontWeight: 700, fontSize: 16, noWrap: true } }} />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', gap: 1.5, px: 1, pt: 3, borderTop: '1px solid #35352E' }}>
        <Avatar src="/avatar.png" sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
          S
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: 13, fontWeight: 700 }}>Admin Team</Typography>
          <Typography sx={{ fontSize: 11, color: '#ACACA2' }}>Internal admin</Typography>
        </Box>
        <ExpandMore sx={{ color: '#ACACA2' }} />
      </Box>
    </Box>
  )
}

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
        slotProps={{ paper: { sx: paperStyles } }}
      >
        <SidebarContent onNavigate={onClose} />
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{ display: { xs: 'none', md: 'block' } }}
        slotProps={{ paper: { sx: paperStyles } }}
      >
        <SidebarContent />
      </Drawer>
    </>
  )
}
