import { useState } from 'react'
import { Box } from '@mui/material'
import Sidebar from './components/layout/Sidebar'
import DashboardPage from './pages/DashboardPage'
import { SIDEBAR_WIDTH } from './theme/theme'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Box component="main" sx={{ ml: { md: `${SIDEBAR_WIDTH}px` }, p: { xs: 2, md: 4 }, minWidth: 0 }}>
        <DashboardPage onMenu={() => setMenuOpen(true)} />
      </Box>
    </Box>
  )
}
