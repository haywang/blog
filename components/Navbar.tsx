// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/learning">Learning</Link>
          <Link href="/tags">Tags</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
