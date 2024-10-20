// components/Header.tsx
import siteMeta from '@/data/siteMeta'
import Link from "next/link";
import Logo from '@/data/logo.svg'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMeta.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          {typeof siteMeta.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMeta.headerTitle}
            </div>
          ) : (
            siteMeta.headerTitle
          )}
        </div>
      </Link>
    </header>
  );
};

export default Header;
