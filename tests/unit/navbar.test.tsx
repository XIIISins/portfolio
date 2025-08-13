import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/navbar'

describe('Navbar', () => {
  it('renders navbar with user name', () => {
    render(<Navbar />)
    expect(screen.getByText('Myron Janssen')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Code')).toBeInTheDocument()
    expect(screen.getByText('SKills')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Navbar />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
  })

  it('renders user avatar with initials', () => {
    render(<Navbar />)
    const avatar = screen.getByText('MJ')
    expect(avatar).toBeInTheDocument()
    expect(avatar.closest('div')).toHaveClass('h-8', 'w-8', 'rounded-full', 'bg-gradient-to-br', 'from-cyan-400', 'to-fuchsia-400', 'flex', 'items-center', 'justify-center')
  })

  it('has proper navigation structure', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(nav).toHaveClass('flex', 'items-center', 'justify-between')
  })

  it('renders with glass morphism styling', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('rounded-2xl', 'border', 'border-white/10', 'bg-white/5', 'backdrop-blur-md')
  })
})
