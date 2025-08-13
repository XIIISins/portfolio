import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check page title
    await expect(page).toHaveTitle(/Portfolio/)
    
    // Check main heading
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Platform Engineer building paved roads for developers.')
  })

  test('should display navbar with all elements', async ({ page }) => {
    await page.goto('/')
    
    // Check navbar elements - use more specific selectors
    await expect(page.locator('nav').getByText('Myron Janssen')).toBeVisible()
    
    // Check navigation links - these are hidden on mobile, so check based on viewport
    const viewport = page.viewportSize()
    if (viewport && viewport.width >= 768) {
      // Desktop: navigation links should be visible
      await expect(page.locator('nav').getByRole('link', { name: 'Work' })).toBeVisible()
      await expect(page.locator('nav').getByRole('link', { name: 'Code' })).toBeVisible()
      await expect(page.locator('nav').getByRole('link', { name: 'SKills' })).toBeVisible()
    } else {
      // Mobile: navigation links should be hidden
      await expect(page.locator('nav').getByRole('link', { name: 'Work' })).not.toBeVisible()
      await expect(page.locator('nav').getByRole('link', { name: 'Code' })).not.toBeVisible()
      await expect(page.locator('nav').getByRole('link', { name: 'SKills' })).not.toBeVisible()
    }
    
    // Check buttons - GitHub is hidden on small screens, Resume is always visible
    if (viewport && viewport.width >= 640) {
      // Desktop: both buttons should be visible
      await expect(page.locator('nav').getByText('GitHub')).toBeVisible()
      await expect(page.locator('nav').getByText('Resume')).toBeVisible()
    } else {
      // Mobile: GitHub is hidden, Resume is visible
      await expect(page.locator('nav').getByText('GitHub')).not.toBeVisible()
      await expect(page.locator('nav').getByText('Resume')).toBeVisible()
    }
  })

  test('should display terminal component', async ({ page }) => {
    await page.goto('/')
    
    // Check terminal window - use the correct class
    await expect(page.locator('.bg-slate-900\\/60')).toBeVisible()
    
    // Check terminal header exists
    await expect(page.locator('.bg-slate-900\\/80')).toBeVisible()
    
    // Check terminal content has code
    await expect(page.locator('pre')).toBeVisible()
    await expect(page.locator('pre')).toContainText('Harden CentOS 9 System')
    
    // Check terminal filename
    await expect(page.locator('div.text-xs.font-mono')).toContainText('~/homelab/playbooks/baseline.yml')
  })

  test('should display professional experience cards', async ({ page }) => {
    await page.goto('/')
    
    // Check experience cards - use the actual company names
    await expect(page.getByText('SORSIT')).toBeVisible()
    await expect(page.getByText('Accenture')).toBeVisible()
    await expect(page.getByText('Sentia')).toBeVisible()
    await expect(page.getByText('Yenlo')).toBeVisible()
  })

  test('should display skills section', async ({ page }) => {
    await page.goto('/')
    
    // Check skills cards - these are the actual skill categories on the page
    await expect(page.getByRole('heading', { name: 'Linux Platform & Virtualization' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Automation & IaC' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Databases' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Reliability & Observability' })).toBeVisible()
  })

  test('should display footer with social links', async ({ page }) => {
    await page.goto('/')
    
    // Check footer buttons - use more specific selectors to avoid navbar conflicts
    await expect(page.locator('footer').getByRole('button', { name: /GitHub/i })).toBeVisible()
    await expect(page.locator('footer').getByRole('button', { name: /LinkedIn/i })).toBeVisible()
    await expect(page.locator('footer').getByRole('button', { name: /Contact/i })).toBeVisible()
  })

  test('should have proper responsive design', async ({ page }) => {
    await page.goto('/')
    
    // Test mobile viewport - use more specific selector
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('nav').getByText('Myron Janssen')).toBeVisible()
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 })
    await expect(page.locator('nav').getByText('Myron Janssen')).toBeVisible()
  })

  test('should have accessible structure', async ({ page }) => {
    await page.goto('/')
    
    // Check for proper heading hierarchy
    const h1 = page.getByRole('heading', { level: 1 })
    await expect(h1).toBeVisible()
    
    // Check for navigation landmark
    const nav = page.getByRole('navigation')
    await expect(nav).toBeVisible()
    
    // Check for main landmark
    const main = page.getByRole('main')
    await expect(main).toBeVisible()
  })
})
