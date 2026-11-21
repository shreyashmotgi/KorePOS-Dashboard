const trim = (n) => Number(n.toFixed(2)).toString()

export function compactCurrency(value) {
  if (value >= 1e6) return `£${trim(value / 1e6)}M`
  if (value >= 1e3) return `£${trim(value / 1e3)}k`
  return `£${Math.round(value)}`
}

export function formatMetric(metric, value) {
  return metric === 'transactions' ? Math.round(value).toLocaleString('en-GB') : compactCurrency(value)
}
