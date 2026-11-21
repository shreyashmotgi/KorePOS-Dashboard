import { Typography } from '@mui/material'
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined'
import SwapHorizOutlined from '@mui/icons-material/SwapHorizOutlined'
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined'
import SectionCard from '../ui/SectionCard'
import ListRow from '../ui/ListRow'
import IconTile from '../ui/IconTile'
import { toneStyles } from '../../theme/theme'
import { activities } from '../../data/mock'

const icons = {
  check: <CheckCircleOutlined fontSize="small" />,
  swap: <SwapHorizOutlined fontSize="small" />,
  doc: <DescriptionOutlined fontSize="small" />,
}

export default function RecentActivity() {
  return (
    <SectionCard title="Recent Merchant Activity" subtitle="The latest updates across your merchants">
      {activities.map((a) => (
        <ListRow
          key={a.name}
          leading={<IconTile round icon={icons[a.icon]} tone={a.tone} />}
          trailing={
            <Typography variant="caption" color="text.secondary" noWrap>
              {a.time}
            </Typography>
          }
        >
          <Typography noWrap sx={{ fontSize: 14, fontWeight: 700 }}>
            {a.name} - <span style={{ fontWeight: 500 }}>{a.category}</span>
          </Typography>
          <Typography variant="caption" noWrap sx={{ display: 'block', color: toneStyles[a.tone].fg }}>
            {a.status}
          </Typography>
        </ListRow>
      ))}
    </SectionCard>
  )
}
