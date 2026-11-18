# BOTE Cosmetic — Web Product Case Study

**Project type:** Cosmetic storefront and personalised product discovery  
**Focus:** Next.js, TypeScript, state management and responsive UI  
**Source:** [GitHub repository](https://github.com/bomberman9000/botecosmetic-site)

## Product problem

Build a product discovery experience that combines catalog browsing with a guided skincare questionnaire.

## Implemented scope described by the repository

- Next.js 14.2.5, React 18 and TypeScript (per `package.json`)
- Responsive pages, catalogue and product cards
- A multi-question product selection flow
- Zustand for client-side questionnaire state
- Framer Motion for UI transitions
- Cart / checkout screens and Telegram/email order handoff described in README

## Engineering focus

- Separate product data and selection logic from presentation
- Manage state across questionnaire steps
- Support desktop and mobile layouts
- Configure integrations through environment settings

## Evidence and limitations

This is a **source-code case study**, not a claim of verified live sales or payments. Full checkout delivery, operational uptime and production security require independent testing.

## How to review

Read `README.md`, inspect `app/`, `components/`, `lib/`, and `store/`. Run in an isolated local environment with test-only integration settings.

## Next steps

Add approved screenshots and a short recorded flow showing questionnaire → recommendation → cart with synthetic data.
