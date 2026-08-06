import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="font-mono text-sm font-medium tracking-tight text-content"
          >
            <span className="text-primary">&lt;</span>
            DG
            <span className="text-primary">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-content-muted hover:text-content'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary-strong md:inline-flex"
          >
            Let's talk
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-content transition-colors hover:bg-surface md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="text-xl leading-none">
              {isMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border py-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-content-secondary hover:bg-surface hover:text-content'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-primary-strong"
              >
                Let's talk
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar