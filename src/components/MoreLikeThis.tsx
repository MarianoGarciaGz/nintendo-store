import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Heart, LayoutGrid } from 'lucide-react'
import product from '@/data/product.json'

type Game = {
    title: string
    date: string
    image: string
    price: number
    regularPrice?: number
    discount?: number
    saleEndsDays?: number
    freeDemo?: boolean
    category: string
}

const games = product.moreLikeThis as Game[]

export default function MoreLikeThis() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        slidesToScroll: 'auto' // avanza por página (los slides que caben completos), no de a uno
    })
    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(true)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setCanPrev(emblaApi.canScrollPrev())
        setCanNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className=''>
            <h2 className='mb-5 text-h2 font-semibold lg:text-h1'>More like this</h2>

            <div className='relative'>
                <div
                    className='overflow-hidden'
                    ref={emblaRef}>
                    <div className='flex gap-4'>
                        {games.map((game) => (
                            <div
                                key={game.title}
                                className='flex-[0_0_80%] sm:flex-[0_0_46%] md:flex-[0_0_30%] lg:flex-[0_0_25.2%]'>
                                <GameCard game={game} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flechas */}
                <Arrow
                    dir='prev'
                    disabled={!canPrev}
                    onClick={() => emblaApi?.scrollPrev()}
                />
                <Arrow
                    dir='next'
                    disabled={!canNext}
                    onClick={() => emblaApi?.scrollNext()}
                />
            </div>
        </div>
    )
}

function Arrow({ dir, disabled, onClick }: { dir: 'prev' | 'next'; disabled: boolean; onClick: () => void }) {
    const Icon = dir === 'prev' ? ChevronLeft : ChevronRight
    return (
        <button
            type='button'
            onClick={onClick}
            disabled={disabled}
            aria-label={dir === 'prev' ? 'Previous' : 'Next'}
            className={`absolute top-1/2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition disabled:pointer-events-none disabled:opacity-0 md:flex ${
                dir === 'prev' ? '-left-4' : '-right-4'
            }`}>
            <Icon
                className='size-6'
                strokeWidth={2.5}
            />
        </button>
    )
}

function GameCard({ game }: { game: Game }) {
    const [wished, setWished] = useState(false)
    const onSale = game.discount != null

    return (
        <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className='flex h-full flex-col overflow-hidden rounded-xl border border-mist bg-white max-w-[16.375rem]'>
            <img
                src={game.image}
                alt={game.title}
                className='aspect-square w-full object-cover'
            />

            <div className='flex flex-1 flex-col p-3'>
                <h3 className='font-semibold leading-snug'>{game.title}</h3>
                <p className='mt-0.5 text-xs text-ink/60'>{game.date}</p>

                {/* Bloque inferior alineado al fondo */}
                <div className='mt-auto pt-3'>
                    {game.saleEndsDays != null && (
                        <span className='mb-2 inline-block rounded bg-primary px-1.5 py-0.5 text-xs font-semibold text-white'>
                            Sale ends: {game.saleEndsDays} days
                        </span>
                    )}
                    {game.freeDemo && <p className='mb-1 text-xs font-semibold text-ink/70'>Free demo</p>}

                    <div className='flex items-center gap-2'>
                        <span className='font-semibold'>${game.price.toFixed(2)}</span>
                        {onSale && (
                            <>
                                <span className='text-sm text-ink/50 line-through'>
                                    ${game.regularPrice?.toFixed(2)}
                                </span>
                                <span className='rounded bg-primary px-1 py-0.5 text-xs font-bold text-white'>
                                    {game.discount}%
                                </span>
                            </>
                        )}
                    </div>

                    {/* Footer: categoría + wishlist */}
                    <div className='mt-3 flex items-center justify-between border-t border-mist pt-2 text-xs text-ink/70'>
                        <span className='flex items-center gap-1'>
                            <LayoutGrid className='size-3.5 text-primary' />
                            {game.category}
                        </span>
                        <motion.button
                            type='button'
                            aria-label='Add to wishlist'
                            onClick={() => setWished((w) => !w)}
                            whileTap={{ scale: 0.85 }}
                            className='text-primary'>
                            <Heart
                                className='size-5'
                                strokeWidth={2}
                                fill={wished ? 'currentColor' : 'none'}
                            />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.article>
    )
}
