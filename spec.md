# Distum Anzures — Feature Expansion v7

## Current State
- Live real estate landing page with bilingual (ES/EN) support, lead capture, WhatsApp integration, property explorer, amenities, location, stats, neighborhood sections.
- Admin panel at `#admin` with lead table, CSV export, coming-soon FFoccus features.
- Backend stores leads with name/email/phone/intent/source/language/timestamp.
- Language toggle in navbar; default language is always Spanish.
- WhatsApp number is correct in WhatsAppButton.tsx but still wrong (old number) in BrochureModal, PropertyExplorer, IntentSection, Footer.

## Requested Changes (Diff)

### Add
- **Brochure request counter** — social proof text near brochure button/modal showing how many people requested it (sourced from lead count with source=brochure)
- **Unit availability status** — Available / Reserved / Sold badge on each property card; admin can toggle per property in admin settings
- **Schedule a Visit floating button** — second floating CTA near brochure button, opens WhatsApp with "Quiero agendar una visita" message
- **TestimonialsSection** — 3 bilingual testimonial cards between Amenities and Location sections
- **FAQSection** — 6 bilingual FAQ items (delivery, financing, parking, amenities, rental, pricing) between Location and Footer
- **Admin Settings tab** — settings panel in admin with: default landing page language (ES/EN), admin panel language (ES/EN), property availability management table
- **Backend: SiteSettings** — `defaultLanguage` field; `getSiteSettings`/`saveSiteSettings` functions
- **Backend: Property availability** — Map<Text, Text> for propertyId→status; `getPropertyAvailability`/`setPropertyAvailability` functions

### Modify
- **LanguageContext** — expose `setLang` so App.tsx can load default language from backend settings
- **App.tsx** — load `getSiteSettings` on mount and apply default language; add two floating buttons (brochure + schedule visit)
- **AdminPanel** — add Settings tab with default language selector + admin UI language toggle + property availability table
- **BrochureModal** — fix WA link to use correct number (5215521864824 with autofill message), add social proof counter
- **PropertyExplorer** — add availability badge fetched from backend, fix WA link
- **IntentSection** — fix WA links to correct number + autofill message
- **Footer** — fix phone number to +52 55 2186 4824, fix WA link
- **Full translation audit** — ensure every text string in every component uses `t(es, en)` pattern; no untranslated hardcoded Spanish strings
- **useQueries.ts** — add `useGetSiteSettings`, `useGetPropertyAvailability`, `useGetBrochureCount` hooks

### Remove
- No features removed

## Implementation Plan
1. Update `src/backend/main.mo` to add SiteSettings type, propertyAvailability map, and 4 new public functions
2. Update `src/frontend/src/backend.d.ts` to add new types and function signatures
3. Update `LanguageContext.tsx` to expose `setLang` in context
4. Update `useQueries.ts` with 3 new hooks
5. Update `App.tsx`: load site settings on mount, apply default lang, add Schedule Visit floating button
6. Update `AdminPanel.tsx`: add tab navigation (Leads / Settings), Settings tab with language + availability controls
7. Update `BrochureModal.tsx`: fix WA link, add social proof
8. Update `PropertyExplorer.tsx`: add availability badge, fix WA link
9. Update `IntentSection.tsx`: fix WA links
10. Update `Footer.tsx`: fix phone + WA link, full translation audit
11. Create `TestimonialsSection.tsx`: 3 bilingual testimonials
12. Create `FAQSection.tsx`: 6 bilingual accordions
13. Add TestimonialsSection and FAQSection to App.tsx render order
14. Full translation audit across all components
