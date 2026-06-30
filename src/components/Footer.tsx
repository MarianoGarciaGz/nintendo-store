import product from '@/data/product.json'
import { asset } from '@/lib/asset'

const { footer } = product

const socials = [
    {
        name: 'Facebook',
        path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'
    },
    {
        name: 'Instagram',
        path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
    },
    {
        name: 'X',
        path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    },
    {
        name: 'YouTube',
        path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
    }
]

export default function Footer() {
    return (
        <footer>
            <div className='mx-auto max-w-[1280px] px-4 pt-8 lg:px-6'>
                {/* Columnas de links */}
                <div className='grid grid-cols-2 gap-x-8 gap-y-10 pt-8 md:grid-cols-3 lg:grid-cols-4'>
                    {footer.columns.map((col) => (
                        <div
                            key={col.title}
                            className='border-e border-ink/15 px-4 first:border-l-0 last:border-r-0 md:px-0'>
                            <h3 className='mb-4 text-caption font-semibold'>{col.title}</h3>
                            <ul className='space-y-2.5 text-h3'>
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href='#'
                                            className='font-semibold text-primary hover:underline'>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Redes sociales + badge BBB */}
                <div className='flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='flex items-center gap-5'>
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                href='#'
                                aria-label={s.name}
                                className='text-ink transition-colors hover:text-ink/60'>
                                <svg
                                    viewBox='0 0 24 24'
                                    className='size-6'
                                    fill='currentColor'
                                    aria-hidden='true'>
                                    <path d={s.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                    <img
                        src={asset('/assets/footer/BBB.svg')}
                        alt='BBB National Programs - CARU COPPA Safe Harbor'
                        className='h-16 w-auto'
                    />
                </div>
            </div>

            {/* Barra inferior oscura */}
            <div className='bg-[#1d1d1f] text-white'>
                <div className='mx-auto flex max-w-[1280px] flex-col gap-4 px-4 py-5 text-xs lg:flex-row lg:items-center lg:justify-between lg:px-6'>
                    <p className='text-white/70'>{footer.copyright}</p>
                    <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
                        {footer.bottomLinks.map((link) => (
                            <a
                                key={link}
                                href='#'
                                className='hover:underline'>
                                {link}
                            </a>
                        ))}
                        <span
                            className='flex items-center gap-2'
                            aria-label={footer.region.label}>
                            <span className='text-base leading-none'>🇺🇸</span>
                            {footer.region.language}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
