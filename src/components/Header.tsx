import {
  Search,
  Heart,
  ShoppingCart,
  CircleUserRound,
  Compass,
  ShoppingBag,
  LifeBuoy,
} from "lucide-react";

const navLinks = [
  { label: "Explore", icon: Compass },
  { label: "Shop", icon: ShoppingBag },
  { label: "Support", icon: LifeBuoy },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex h-[59px] w-full items-center gap-6 pe-4 lg:pe-6">
        {/* Logo */}
        <a
          href="#"
          className="bg-primary h-full flex items-center bg-primary px-2"
          aria-label="Nintendo"
        >
          <img
            src="/assets/brand/nintendo-logo.svg"
            alt="Nintendo"
            className="h-[2.5rem] w-auto"
          />
        </a>

        {/* Nav izquierda */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-primary"
            >
              <Icon className="size-4 text-primary" strokeWidth={2.5} />
              {label}
            </a>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="ml-auto flex items-center gap-4">
          <button className="hidden items-center gap-1.5 text-sm font-medium bg-gray-100 md:flex  p-2 rounded-full">
            <Search className="size-5" strokeWidth={2.5} />
            Search
          </button>
          <button
            aria-label="Wishlist"
            className="bg-gray-100  p-2 rounded-full"
          >
            <Heart className="size-5" strokeWidth={2.5} />
          </button>
          <button aria-label="Cart" className="bg-gray-100  p-2 rounded-full">
            <ShoppingCart className="size-5" strokeWidth={2.5} />
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border-2 border-primary px-3 py-1.5 text-sm font-semibold text-primary transition-colors">
            <CircleUserRound className="size-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">Log in / Sign up</span>
          </button>
          <button
            aria-label="Region: USA"
            className="hidden h-4 w-6 overflow-hidden rounded-sm sm:block"
          >
            <span className="flex h-full w-full items-center justify-center bg-mist text-[8px]">
              US
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
