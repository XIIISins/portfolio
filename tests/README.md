# Testing Setup

This project includes comprehensive testing with both unit tests (Jest + React Testing Library) and end-to-end tests (Playwright).

## Test Structure

```
tests/
├── unit/           # Unit and integration tests
│   ├── button.test.tsx
│   ├── card.test.tsx
│   └── navbar.test.tsx
└── e2e/            # End-to-end tests
    └── homepage.spec.ts
```

## Running Tests

### Unit Tests (Jest + React Testing Library)

```bash
# Run all unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### End-to-End Tests (Playwright)

```bash
# Run all e2e tests
pnpm test:e2e

# Run e2e tests with UI
pnpm test:e2e:ui

# Run e2e tests in headed mode (visible browser)
pnpm test:e2e:headed
```

## Test Coverage

- **Unit Tests**: Test individual components and their functionality
- **Integration Tests**: Test component interactions and user events
- **E2E Tests**: Test complete user workflows across multiple browsers

## Writing Tests

### Unit Tests

Use React Testing Library for component testing:

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('handles click events', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    
    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### E2E Tests

Use Playwright for end-to-end testing:

```tsx
import { test, expect } from '@playwright/test'

test('should load homepage', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
})
```

## Configuration

- **Jest**: Configured in `jest.config.js` with Next.js support
- **Playwright**: Configured in `playwright.config.ts` with multiple browser support
- **Coverage**: Set to 70% minimum for branches, functions, lines, and statements
