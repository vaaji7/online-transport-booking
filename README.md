# Online Bus/Train Booking – React (Frontend Only)

A self-contained demo app built with **Vite + React + React Router**. It lets users:

- Search trips (bus/train) by route and date
- See available seats (based on local bookings)
- Select seats and enter passenger info
- Confirm bookings and view/cancel them later

> Note: This is **frontend-only**; data and bookings are stored in **localStorage**.

## Quick Start (VS Code)

1. Ensure Node.js 18+ is installed.
2. **Download and extract** this project.
3. Open the folder in **VS Code**.
4. Install deps:
   ```bash
   npm install
   ```
5. Run the dev server:
   ```bash
   npm run dev
   ```
6. Open the local URL printed in the terminal.

## Key Folders

```
src/
  components/       # UI building blocks
  context/          # Global booking store (localStorage-backed)
  data/             # Mock trips
  pages/            # Route-level pages
  utils/            # Formatting helpers
```

## Main Concepts

- **Search → Results → Seat Selection → Booking → My Bookings**
- **Seat availability** is computed from existing bookings for a given trip and date.
- **Bookings** include passenger name & phone and can be canceled.
- **No backend**: this demo is perfect as a starting point for wiring to a REST/GraphQL API later.

## Customize

- Edit `src/data/trips.json` to add routes.
- Change seat layout logic in `SeatMap.jsx` (columns-by-mode) or add better coaches/berths.
- Replace localStorage in `BookingContext.jsx` with real API calls when you have a backend.
