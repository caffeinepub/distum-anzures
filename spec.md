# Distum Anzures

## Current State
Two investment calculators exist:
1. IntentSection.tsx has a mini slider calculator inside the Investment modal
2. InvestmentCalculatorSection.tsx has the full standalone section

The InvestmentCalculatorSection uses a reveal scroll animation class that may prevent it from rendering.

## Requested Changes (Diff)

### Add
- Nothing new

### Modify
- IntentSection.tsx: Remove slider calculator from Investment modal. Replace with benefits list and CTA that scrolls to #investment section
- InvestmentCalculatorSection.tsx: Remove reveal scroll class and useScrollReveal hook. Fix layout issues. Polish for premium feel matching reference image in dark gold UI

### Remove
- Duplicate mini-calculator from IntentSection.tsx investment modal

## Implementation Plan
1. Edit IntentSection.tsx - remove Slider, calculator state, metric boxes from investment modal, add CTA scroll button to #investment
2. Edit InvestmentCalculatorSection.tsx - remove useScrollReveal, remove reveal CSS class, ensure always visible, refine visual design, fix all calculations
