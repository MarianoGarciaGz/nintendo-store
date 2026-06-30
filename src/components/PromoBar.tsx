import { Truck, BadgePercent } from 'lucide-react'
import product from '@/data/product.json'

const icons: Record<string, typeof Truck> = {
    truck: Truck,
    points: BadgePercent
}

export default function PromoBar() {
    return (
        <div className='border-b border-mist bg-mist/40'>
            <div className='mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2.5 text-sm lg:px-6'>
                {product.promoBar.map((item, i) => {
                    const Icon = icons[item.icon]
                    return (
                        <div
                            key={i}
                            className='flex items-center'>
                            {i === 1 && <span className='mx-4 hidden h-5 w-px bg-mist md:block' />}
                            <Icon
                                className='mr-2 size-5 shrink-0 text-primary'
                                strokeWidth={2}
                            />
                            <p>
                                {item.segments.map((seg, j) =>
                                    seg.link ? (
                                        <a
                                            key={j}
                                            href='#'
                                            className='font-semibold text-primary underline hover:no-underline'>
                                            {seg.text}
                                        </a>
                                    ) : seg.bold ? (
                                        <strong
                                            key={j}
                                            className='font-semibold'>
                                            {seg.text}
                                        </strong>
                                    ) : (
                                        <span key={j}>{seg.text}</span>
                                    )
                                )}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
