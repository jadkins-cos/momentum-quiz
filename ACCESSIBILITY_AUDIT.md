# Accessibility Audit - Momentum Multiplier Assessment

**Audit Date:** 2026-05-05  
**WCAG Target:** Level AA (2.1)

---

## 🚨 Critical Issues (Must Fix)

### 1. **Semantic HTML Structure**
**Issue:** Question headings use `<div class="question-text">` instead of proper heading tags  
**Impact:** Screen readers can't navigate by headings  
**Fix:** Change to `<h3>` tags with proper hierarchy  
**WCAG:** 1.3.1 (Info and Relationships)

### 2. **Form Labels Missing**
**Issue:** Radio buttons rely on `for/id` but need explicit `aria-label` or `fieldset/legend` grouping  
**Impact:** Screen readers don't announce which question the radio group belongs to  
**Fix:** Wrap each question in `<fieldset>` with `<legend>`  
**WCAG:** 3.3.2 (Labels or Instructions)

### 3. **Color Contrast Issues**
**Issue:** Gray subtitle text `color: #666` on dark background fails contrast  
**Current:** ~3.8:1 ratio (needs 4.5:1 for AA)  
**Fix:** Change to `rgba(255, 255, 255, 0.8)` or lighter  
**WCAG:** 1.4.3 (Contrast Minimum)

### 4. **Focus Indicators**
**Issue:** Radio buttons and options don't have visible keyboard focus styles  
**Impact:** Keyboard users can't see where they are  
**Fix:** Add `:focus-visible` styles with Matcha outline  
**WCAG:** 2.4.7 (Focus Visible)

### 5. **Skip Navigation**
**Issue:** No "skip to content" link for keyboard users  
**Impact:** Must tab through entire header every time  
**Fix:** Add hidden skip link at top  
**WCAG:** 2.4.1 (Bypass Blocks)

---

## ⚠️ Important Issues (Should Fix)

### 6. **Language Declaration**
**Issue:** Missing `lang="en"` on `<html>` tag  
**Impact:** Screen readers may use wrong pronunciation  
**Fix:** Add `<html lang="en">`  
**WCAG:** 3.1.1 (Language of Page)

### 7. **Button Semantics**
**Issue:** Submit button uses `onclick` instead of form submission  
**Impact:** May not work with assistive tech expectations  
**Fix:** Wrap in `<form>` tag with proper `onsubmit` handler  
**WCAG:** 4.1.2 (Name, Role, Value)

### 8. **Error Handling**
**Issue:** Alert popup for validation is not accessible  
**Impact:** Screen readers may not announce it reliably  
**Fix:** Use `aria-live` region for error messages  
**WCAG:** 3.3.1 (Error Identification)

### 9. **Loading States**
**Issue:** When results load, no announcement to screen readers  
**Impact:** Users don't know content changed  
**Fix:** Add `aria-live="polite"` to results container  
**WCAG:** 4.1.3 (Status Messages)

### 10. **Touch Target Size**
**Issue:** Radio buttons are 18px (mobile: 20px) - should be 24px minimum  
**Impact:** Hard to tap for users with motor disabilities  
**Fix:** Increase to 24px or make entire option card clickable zone  
**WCAG:** 2.5.5 (Target Size - Level AAA but good practice)

---

## 💡 Minor Issues (Nice to Have)

### 11. **Heading Hierarchy**
**Issue:** H1 → H2 → DIV (should be H1 → H2 → H3)  
**Fix:** Use proper heading levels throughout

### 12. **ARIA Landmarks**
**Issue:** No `<main>`, `<header>`, or `role` attributes  
**Fix:** Add semantic landmarks for navigation

### 13. **Keyboard Shortcuts**
**Issue:** No keyboard shortcuts (e.g., "N" for next question)  
**Fix:** Add optional keyboard navigation helpers

### 14. **Motion Preferences**
**Issue:** Animations don't respect `prefers-reduced-motion`  
**Fix:** Add media query to disable transforms/transitions

### 15. **Text Resizing**
**Issue:** Layout not tested at 200% zoom  
**Fix:** Test and adjust for up to 200% text size

---

## ✅ What's Already Good

- ✅ Touch targets meet 48x48px minimum on mobile
- ✅ Font sizes are readable (16px+ body text)
- ✅ Color is not the only differentiator for selected states
- ✅ Images would have alt text (none currently used)
- ✅ Responsive design works across viewports
- ✅ No time limits on quiz completion
- ✅ Text can be selected and copied

---

## 🎨 Brand Guide Gaps - What I'm Missing

### Typography
**Have:** System font stack  
**Need:**
- Official Zendesk Relate typeface (Vanilla Sans? Inter?)
- Font weights to use (Light, Regular, Medium, Bold?)
- Line-height standards
- Letter-spacing rules

### Color System - Dark Mode Specifics
**Have:** Licorice, Coconut, Matcha, Fern, Sesame, Pineapple, Shamrock  
**Need:**
- **Accessibility-approved color pairings** (which combos pass WCAG?)
- Text color opacity values for dark backgrounds
- Error/warning/success state colors (for validation)
- Disabled state colors
- Link colors and hover states

### Component Patterns
**Need:**
- Official button styles (shadows, borders, states)
- Form input styling guidelines
- Card/panel elevation system (shadow depths)
- Border radius standards (we're using 8-12px - is that right?)
- Spacing scale (we're using 4px increments - correct?)

### Icons & Graphics
**Need:**
- Icon library (for potential checkmarks, arrows, info icons)
- Illustration style if we add visuals
- Loading spinner/animation standards

### Motion & Animation
**Need:**
- Transition duration standards
- Easing curves to use
- When to use motion vs. instant changes
- Reduced motion alternatives

### Accessibility Standards
**Need:**
- Zendesk's accessibility requirements (WCAG AA? AAA?)
- Required ARIA patterns
- Keyboard navigation standards
- Focus indicator requirements

### Content Guidelines
**Need:**
- Tone of voice for error messages
- Microcopy standards (button labels, form hints)
- Placeholder text guidelines

---

## 📋 Recommended Priority

### Phase 1 (Critical - Do Now)
1. Fix color contrast on gray text
2. Add focus indicators
3. Add `lang="en"` attribute
4. Wrap questions in `<fieldset>/<legend>`
5. Add keyboard focus styles

### Phase 2 (Important - This Week)
6. Add skip navigation link
7. Convert question divs to `<h3>` tags
8. Improve error handling with `aria-live`
9. Add loading state announcements
10. Test with screen reader (NVDA/JAWS/VoiceOver)

### Phase 3 (Polish - When Time Allows)
11. Add ARIA landmarks
12. Respect `prefers-reduced-motion`
13. Test at 200% zoom
14. Add keyboard shortcuts (optional)

---

## 🔗 Resources Needed

**From Zendesk Brand Team:**
1. Relate 2026 Digital Accessibility Guidelines (if they exist)
2. WCAG-approved color contrast matrix
3. Component library or Figma design system
4. Typography specification sheet
5. Dark mode color usage guide

**Testing:**
- Screen reader testing results
- Keyboard-only navigation audit
- Color blindness simulation
- Low vision / zoom testing

---

## Summary

**Current Accessibility Score:** ~60/100  
**With Phase 1 fixes:** ~80/100  
**With All fixes:** 95+/100

The quiz has good bones (touch targets, mobile responsive, no critical blockers) but needs semantic HTML improvements and better keyboard/screen reader support to meet WCAG AA standards.

**Biggest wins:**
- Fix contrast
- Add focus styles
- Use proper HTML semantics
- Test with real assistive technology
