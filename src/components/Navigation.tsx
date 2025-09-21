import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-black transition-colors">
              Log in
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-black transition-colors">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
