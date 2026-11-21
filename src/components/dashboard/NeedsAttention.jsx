import { Typography } from '@mui/material'
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined'
import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined'
import History from '@mui/icons-material/History'
import PauseCircleOutlined from '@mui/icons-material/PauseCircleOutlined'
import SectionCard from '../ui/SectionCard'
import ListRow from '../ui/ListRow'
import IconTile from '../ui/IconTile'
import ReviewButton from '../ui/ReviewButton'
import { attentionItems } from '../../data/mock'

const icons = {
  doc: <DescriptionOutlined fontSize="small" />,
  wallet: <AccountBalanceWalletOutlined fontSize="small" />,
  history: <History fontSize="small" />,
  pause: <PauseCircleOutlined fontSize="small" />,
}

export default function NeedsAttention() {
  return (
    <SectionCard title="Needs Attention" subtitle="28 Open Items" alertSubtitle>
      {attentionItems.map((item) => (
        <ListRow key={item.title} leading={<IconTile icon={icons[item.icon]} tone={item.tone} />} trailing={<ReviewButton />}>
          <Typography sx={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3 }}>{item.title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {item.description}
          </Typography>
        </ListRow>
      ))}
    </SectionCard>
  )
}
