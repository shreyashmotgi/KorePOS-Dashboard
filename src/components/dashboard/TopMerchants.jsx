import { Typography } from '@mui/material'
import SectionCard from '../ui/SectionCard'
import ListRow from '../ui/ListRow'
import { topMerchants } from '../../data/mock'

export default function TopMerchants() {
  return (
    <SectionCard title="Top Merchants" subtitle="Transaction volume • Last 30 days">
      {topMerchants.map((m, i) => (
        <ListRow
          key={m.name}
          leading={
            <Typography variant="caption" color="text.secondary" sx={{ width: 16, fontWeight: 700 }}>
              {i + 1}
            </Typography>
          }
          trailing={<Typography variant="h4">{m.volume}</Typography>}
        >
          <Typography sx={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>
            {m.name} - <span style={{ fontWeight: 500 }}>{m.type}</span>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {m.transactions}
          </Typography>
        </ListRow>
      ))}
    </SectionCard>
  )
}
