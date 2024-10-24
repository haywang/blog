// components/Header.tsx
import siteMeta from '@/data/siteMeta'
import Link from 'next/link'
// import Logo from '@/data/logo.svg'
import headerNavLinks from '@/data/headerNavLinks'

const Header = () => {
  const headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMeta.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">{/* <Logo /> */}</div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 block font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        {/* <SearchButton />
        <ThemeSwitch />
        <MobileNav /> */}
      </div>
    </header>
  )
}

export default Header