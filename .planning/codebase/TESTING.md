# Testing Patterns

**Analysis Date:** 2026-07-27

## Test Framework

**Runner:**
- Not detected — no test runner in `package.json` dependencies or devDependencies

**Assertion Library:**
- Not detected

**Run Commands:**
```bash
npm run lint    # Only automated check available
npm run build   # Type-check + compile via Next.js
npm run dev     # Development server
```

No `test`, `test:watch`, or `test:coverage` scripts exist.

## Test File Organization

**Location:**
- No test files found in the repository (no `*.test.ts`, `*.test.tsx`, `*.spec.ts`, `*.spec.tsx`)

**Naming:**
- Not established — no convention to follow yet

**Structure:**
```
# Current state — no test directory
src/
├── app/
├── components/
├── data/
└── lib/
```

## Test Structure

**Suite Organization:**
- Not applicable — no tests exist

**Patterns:**
- Not established in codebase

## Mocking

**Framework:** Not detected

**Patterns:**
- Not established

**What to Mock:**
- When adding tests, mock external `fetch` calls in form components (`Contact`, `NewsletterForm`)
- Mock `next/navigation` (`notFound`, `useRouter`) in page component tests
- Mock `framer-motion` or test with `MotionConfig reducedMotion="always"` for animation components

**What NOT to Mock:**
- Pure data getters in `src/data/` — test against real static data
- `cn()` utility — trivial passthrough to `clsx`

## Fixtures and Factories

**Test Data:**
- Production static data in `src/data/` can serve as fixtures directly
- Example entities: `projects[0]` from `src/data/projects.ts`, `services[0]` from `src/data/services.ts`

**Location:**
- No `__tests__/`, `tests/`, or `fixtures/` directory exists
- Recommended: `src/__tests__/fixtures/` or co-located `*.test.tsx` files

## Coverage

**Requirements:** None enforced — no coverage tooling configured

**View Coverage:**
```bash
# Not available — would require adding a test runner with coverage support
```

## Test Types

**Unit Tests:**
- Not present
- High-value candidates:
  - `getProject()`, `getService()`, `getSector()`, `getBlog()`, `getNews()` in `src/data/`
  - `isEmail()` validation (currently duplicated in 4 files — candidate for extraction + unit test)
  - API route handlers in `src/app/api/contact/route.ts` and `src/app/api/newsletter/route.ts`

**Integration Tests:**
- Not present
- High-value candidates:
  - Form submission flow in `src/components/home/Contact.tsx`
  - Newsletter subscription in `src/components/shared/NewsletterForm.tsx`

**E2E Tests:**
- Not used — no Playwright, Cypress, or similar dependency

## CI/CD Testing

**CI Pipeline:**
- No `.github/workflows/` directory detected
- No automated test step in any CI configuration

**Pre-deploy checks:**
- `npm run lint` — ESLint via `eslint-config-next`
- `npm run build` — Next.js production build (includes TypeScript checking via `strict: true`)

## Linting as Quality Gate

**ESLint config:** `eslint.config.mjs`
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

**Invocation:**
```bash
npm run lint
```

This is the only automated code-quality check beyond TypeScript compilation during `npm run build`.

## Recommended Setup (Not Yet Implemented)

If adding tests, align with the existing stack:

**Suggested stack:**
- Vitest — fast, native ESM, works well with Next.js App Router
- `@testing-library/react` + `@testing-library/jest-dom` — component testing
- `msw` or `vi.fn()` — mock API routes for form tests

**Suggested `package.json` scripts:**
```json
{
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

**Suggested file placement:**
```
src/
├── lib/
│   └── cn.ts
│   └── cn.test.ts              # co-located unit test
├── app/
│   └── api/
│       └── contact/
│           └── route.ts
│           └── route.test.ts   # co-located API test
├── components/
│   └── home/
│       └── Contact.tsx
│       └── Contact.test.tsx    # co-located component test
```

## Common Patterns

**Async Testing:**
```typescript
// Recommended pattern for form components (not yet in codebase)
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "@/components/home/Contact";

it("submits contact form", async () => {
  global.fetch = vi.fn().mockResolvedValue({ ok: true });
  const user = userEvent.setup();
  render(<Contact />);
  await user.type(screen.getByLabelText(/full name/i), "Jane Doe");
  await user.type(screen.getByLabelText(/email/i), "jane@example.com");
  await user.type(screen.getByLabelText(/message/i), "Project enquiry details here.");
  await user.click(screen.getByRole("button", { name: /submit enquiry/i }));
  await waitFor(() => {
    expect(screen.getByRole("status")).toHaveTextContent(/thank you/i);
  });
});
```

**API Route Testing:**
```typescript
// Recommended pattern for route handlers (not yet in codebase)
import { POST } from "@/app/api/contact/route";

it("rejects invalid email", async () => {
  const req = new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify({ name: "Jane", email: "bad", message: "short" }),
  });
  const res = await POST(req);
  expect(res.status).toBe(400);
  const body = await res.json();
  expect(body.ok).toBe(false);
});
```

**Error Testing:**
```typescript
// Recommended pattern (not yet in codebase)
it("shows error on network failure", async () => {
  global.fetch = vi.fn().mockRejectedValue(new Error("network"));
  // ... render form, submit, assert role="alert" message
});
```

**Reduced Motion Testing:**
```typescript
// For Reveal, TiltCard, Hero components
import { MotionConfig } from "framer-motion";

render(
  <MotionConfig reducedMotion="always">
    <Reveal>Content</Reveal>
  </MotionConfig>
);
// Assert static div rendered, no motion.div
```

## Test Coverage Gaps

**API route validation (`src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`):**
- What's not tested: payload validation, error responses, success responses
- Risk: Regression in form backend during handover wiring (Resend/SMTP)
- Priority: High

**Form components (`src/components/home/Contact.tsx`, `src/components/shared/NewsletterForm.tsx`):**
- What's not tested: client validation, error display, success state, loading state
- Risk: Broken UX on validation edge cases
- Priority: High

**Data getters (`src/data/projects.ts`, `src/data/services.ts`, `src/data/sectors.ts`, `src/data/content.ts`):**
- What's not tested: slug lookup, missing slug handling
- Risk: Broken dynamic routes if slug data drifts
- Priority: Medium

**Page static generation (`generateStaticParams` in `src/app/*/[slug]/page.tsx`):**
- What's not tested: all slugs resolve to valid entities
- Risk: Build-time failures or empty pages
- Priority: Medium

**Accessibility (`src/components/ui/Reveal.tsx`, form `aria-*` attributes):**
- What's not tested: reduced motion fallbacks, ARIA roles, keyboard focus
- Risk: Accessibility regressions
- Priority: Medium

**Animation components (`src/components/ui/TiltCard.tsx`, `src/components/home/Hero.tsx`):**
- What's not tested: reduced-motion code paths
- Risk: Motion effects applied when they should be disabled
- Priority: Low

## What Exists Today

| Check | Tool | Command |
|-------|------|---------|
| Linting | ESLint + eslint-config-next | `npm run lint` |
| Type checking | TypeScript (`strict: true`) | `npm run build` |
| Unit tests | None | — |
| Integration tests | None | — |
| E2E tests | None | — |
| Coverage | None | — |
| CI automation | None | — |

---

*Testing analysis: 2026-07-27*
