# KorePOS Admin Dashboard

A responsive **Dashboard Overview** screen for an internal admin team to monitor merchants and payment activity. Built as part of the KorePOS UI/UX & React Developer Intern assessment.

- **Live demo:** https://korepos-dashboard.vercel.app/
- **Figma design:** https://www.figma.com/design/g4WZEkCNrN8lj6rXhY61a7/Merchant-Management-Dashboard?node-id=0-1&t=uK8LAXzwVjLIJ2Xd-1

## Features

- KPI cards: total merchants, active merchants, pending applications, transaction volume, payment revenue
- Transaction activity chart with Volume, Revenue and Transactions tabs
- Needs Attention list with quick review actions
- Recent merchant activity feed
- Top merchants ranking
- Fully responsive: five KPI cards in one row on desktop, reflowing to three and two columns on smaller screens
- Sidebar becomes a slide-in drawer on tablet and mobile

## Tech Stack

| Area | Choice |
| --- | --- |
| Framework | React 19 with Vite |
| UI library | MUI (Material UI) with a custom theme |
| Charts | Recharts |
| Language | JavaScript (JSX) |
| Data | Mock data, no backend |

## Getting Started

```bash
git clone <your-repo-url>
cd korepos-dashboard
npm install
npm run dev
```

Other commands:

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project Structure

```
src/
  assets/            logo
  components/
    layout/          Sidebar, Header
    ui/              SectionCard, StatCard, ListRow, IconTile, ReviewButton, SegmentedTabs
    dashboard/       TransactionChart, NeedsAttention, RecentActivity, TopMerchants
  pages/             DashboardPage
  data/              mock data
  theme/             colours, typography, shared constants
  utils/             number formatting helpers
  App.jsx
  main.jsx
```

## Design Decisions

- **Design first.** The UI was designed in Figma, and the colours, fonts, spacing and corner radius were taken from that file.
- **One theme file.** Brand colours and typography live in `src/theme/theme.js`, so a change happens in one place.
- **Reusable components.** Repeated patterns are shared: `SectionCard` wraps every dashboard panel, `ListRow` handles divided list rows, and `StatCard` is used for every KPI.
- **Data separated from UI.** Components receive data as props from `src/data/mock.js`, so a real API can replace it without changing the interface.
- **Responsive layout.** CSS grid with breakpoints, plus a drawer navigation on small screens.
- **Typography.** Bricolage Grotesque for headings and numbers, Manrope for body text.

## Mock Data

All merchant names, transactions and figures are fictional sample data.

## Notes

- MUI is used as the component library. The visual design is custom, based on the Figma file.
- AI tools were used to assist development and code review.
