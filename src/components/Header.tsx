import { Search, Heart, ShoppingCart, CircleUserRound, Compass, ShoppingBag, LifeBuoy } from 'lucide-react'

const navLinks = [
    { label: 'Explore', icon: Compass },
    { label: 'Shop', icon: ShoppingBag },
    { label: 'Support', icon: LifeBuoy }
]

function UsFlag({ className = '' }: { className?: string }) {
    return (
        <span
            className={`inline-flex h-4 w-6 items-center justify-center overflow-hidden rounded-sm bg-mist text-[8px] font-semibold text-ink ${className}`}>
            US
        </span>
    )
}

export default function Header() {
    return (
        <header className='bg-primary lg:bg-white'>
            {/* ---- Barra compacta (móvil/tablet, < lg) ---- */}
            <div className='flex h-[52px] w-full items-center justify-between px-4 lg:hidden'>
                <a
                    href='#'
                    aria-label='Nintendo'
                    className=''>
                    <img
                        src='/assets/brand/nintendo-logo.svg'
                        alt='Nintendo'
                        className='h-9 w-auto'
                    />
                </a>
                <div className='flex items-center gap-3 text-white'>
                    <a
                        href='#'
                        className='flex items-center gap-1.5 text-sm font-semibold'>
                        <ShoppingBag
                            className='size-5'
                            strokeWidth={2.25}
                        />
                        Nintendo Store
                    </a>
                    <UsFlag />
                </div>
            </div>

            {/* ---- Header completo (lg+) ---- */}
            <div className='hidden h-[59px] w-full items-center gap-6 pe-4 lg:flex lg:pe-6'>
                {/* Logo */}
                <a
                    href='#'
                    className='flex h-full items-center bg-primary px-2'
                    aria-label='Nintendo'>
                    <img
                        src='/assets/brand/nintendo-logo.svg'
                        alt='Nintendo'
                        className='h-[2.5rem] w-auto'
                    />
                </a>

                {/* Nav izquierda */}
                <nav className='flex items-center gap-5'>
                    {navLinks.map(({ label, icon: Icon }) => (
                        <a
                            key={label}
                            href='#'
                            className='flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-primary'>
                            <Icon
                                className='size-4 text-primary'
                                strokeWidth={2.5}
                            />
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Acciones derecha */}
                <div className='ml-auto flex items-center gap-4'>
                    <button className='flex items-center gap-1.5 rounded-full bg-gray-100 p-2 text-sm font-medium'>
                        <Search
                            className='size-5'
                            strokeWidth={2.5}
                        />
                        Search
                    </button>
                    <button
                        aria-label='Wishlist'
                        className='rounded-full bg-gray-100 p-2'>
                        <Heart
                            className='size-5'
                            strokeWidth={2.5}
                        />
                    </button>
                    <button
                        aria-label='Cart'
                        className='rounded-full bg-gray-100 p-2'>
                        <ShoppingCart
                            className='size-5'
                            strokeWidth={2.5}
                        />
                    </button>
                    <button className='flex items-center gap-1.5 rounded-full border-1 border-primary px-3 py-1.5 text-sm font-semibold text-primary transition-colors'>
                        <CircleUserRound
                            className='size-4'
                            strokeWidth={2.5}
                        />
                        <span className='hidden sm:inline'>Log in / Sign up</span>
                    </button>
                    <UsFlag />
                </div>
            </div>
        </header>
    )
}
