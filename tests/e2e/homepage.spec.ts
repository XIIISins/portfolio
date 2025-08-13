import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check page title
    await expect(page).toHaveTitle(/Portfolio/)
    
    // Check main heading
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Senior Platform / Infrastructure Engineer')
  })

  test('should display navbar with all elements', async ({ page }) => {
    await page.goto('/')
    
    // Check navbar elements - use more specific selectors
    await expect(page.locator('nav').getByText('Myron Janssen')).toBeVisible()
    await expect(page.getByText('Work')).toBeVisible()
    await expect(page.getByText('Code')).toBeVisible()
    await expect(page.getByText('SKills')).toBeVisible()
    await expect(page.locator('nav').getByText('GitHub')).toBeVisible()
    await expect(page.locator('nav').getByText('Resume')).toBeVisible()
  })

  test('should display terminal component', async ({ page }) => {
    await page.goto('/')
    
    // Check terminal window - use more specific selector
    await expect(page.locator('.bg-slate-900\\/60')).toBeVisible()
    
    // Check terminal header with dots
    await expect(page.locator('.bg-red-500')).toBeVisible()
    await expect(page.locator('.bg-yellow-500')).toBeVisible()
    await expect(page.locator('.bg-green-500')).toBeVisible()
    
    // Check terminal content has code
    await expect(page.locator('pre')).toBeVisible()
    await expect(page.locator('pre')).toContainText('const express = require')
  })

  test('should display professional experience cards', async ({ page }) => {
    await page.goto('/')
    
    // Check experience cards - use more specific text
    await expect(page.getByText('Linux Engineer')).toBeVisible()
    await expect(page.getByText('IT Analyst')).toBeVisible()
    await expect(page.getByText('IT Consultant')).toBeVisible()
    // Remove the duplicate "Consultant" test since it conflicts with "IT Consultant"
  })

  test('should display skills section', async ({ page }) => {
    await page.goto('/')
    
    // Check skills heading - use the actual heading text
    await expect(page.getByRole('heading', { name: /Skills & Technologies/i })).toBeVisible()
    
    // Check some key skills
    await expect(page.getByText('Linux')).toBeVisible()
    await expect(page.getByText('Docker')).toBeVisible()
    await expect(page.getByText('Kubernetes')).toBeVisible()
  })

  test('should display footer with social links', async ({ page }) => {
    await page.goto('/')
    
    // Check footer buttons - use more specific selectors to avoid navbar conflicts
    await expect(page.locator('main').getByRole('button', { name: /GitHub/i })).toBeVisible()
    await expect(page.locator('main').getByRole('button', { name: /LinkedIn/i })).toBeVisible()
    await expect(page.locator('main').getByRole('button', { name: /Email/i })).toBeVisible()
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
