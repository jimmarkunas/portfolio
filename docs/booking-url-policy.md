# Booking URL Policy

## Source of truth

- All calendar booking URLs are defined in `src/content/site/config.ts` via `siteBookingUrls`.
- Product/application TypeScript files must not contain direct `https://calendar.app.google/...` literals.

## Static founder exceptions

- Direct booking URLs are allowed only in these static HTML files:
  - `public/founder/cwg/index.html`
  - `public/founder/zevo/index.html`
- Those static pages must use the founder booking URL (`HOMEPAGE_HERO_BOOKING_URL`) from `src/content/site/config.ts`.

## Enforcement

- `npm run check:booking-url-drift` enforces all rules above.
- The check is included in `npm run verify:predeploy`.
