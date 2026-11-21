import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import SectionCard from '../ui/SectionCard'
import SegmentedTabs from '../ui/SegmentedTabs'
import { metrics } from '../../data/mock'
import { formatMetric } from '../../utils/format'

const tabs = Object.entries(metrics).map(([key, { label }]) => ({ key, label }))
const labelledDays = [1, 5, 10, 15, 20, 25, 30].map((day) => `Day ${day}`)
const tickStyle = { fontSize: 10, fill: '#73736B' }

export default function TransactionChart() {
  const [metric, setMetric] = useState('volume')
  const { total, change, values } = metrics[metric]
  const data = values.map((value, i) => ({ day: `Day ${i + 1}`, value }))

  return (
    <SectionCard
      title="Transaction Activity"
      subtitle="Last 30 days"
      action={<SegmentedTabs options={tabs} value={metric} onChange={setMetric} />}
    >
      <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
        {total}
      </Typography>
      <Typography variant="caption" sx={{ fontWeight: 700, color: 'success.main' }}>
        {change}
      </Typography>

      <Box sx={{ height: { xs: 200, md: 240 }, mt: 2 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2D735C" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#2D735C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#ECEBE5" />
            <XAxis dataKey="day" ticks={labelledDays} interval={0} tick={tickStyle} axisLine={false} tickLine={false} />
            <YAxis
              width={48}
              tickCount={5}
              domain={[0, (max) => max * 1.3]}
              tick={tickStyle}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => formatMetric(metric, v)}
            />
            <Tooltip formatter={(v) => [formatMetric(metric, v), metrics[metric].label]} />
            <Area type="linear" dataKey="value" stroke="#2D735C" strokeWidth={2} fill="url(#areaFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </SectionCard>
  )
}
