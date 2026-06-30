import { ChevronRight } from 'lucide-react'
import product from '@/data/product.json'
import Gallery from '@/components/Gallery'
import PurchasePanel from '@/components/PurchasePanel'
import EsrbRating from '@/components/EsrbRating'
import Switch2Box from '@/components/Switch2Box'

const { breadcrumb } = product

export default function Hero() {
    return (
        <section className='bg-sky'>
            <div className='mx-auto max-w-[1240px] translate-y-[0em] lg:translate-y-[2em]'>
                <div className='sm:rounded-2xl bg-white shadow-lg p-0 sm:p-12 pt-3'>
                    {/* Breadcrumb */}
                    <nav className='mb-3 px-4 sm:px-0 flex items-center gap-1.5 text-legal font-semibold text-ink/70'>
                        {breadcrumb.map((crumb, i) => (
                            <span
                                key={crumb}
                                className='flex items-center gap-1.5'>
                                {i > 0 && <ChevronRight className='size-3.5 text-ink/40' />}
                                <a
                                    href='#'
                                    className={i === breadcrumb.length - 1 ? 'text-ink' : 'hover:text-primary'}>
                                    {crumb}
                                </a>
                            </span>
                        ))}
                    </nav>

                    {/* Dos columnas */}
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-[3fr_2fr] md:gap-12'>
                        {/* Izquierda: galería + (ESRB y compat solo en desktop) */}
                        <div className='flex flex-col gap-5'>
                            <Gallery />

                            {/* ESRB y compat: en desktop van aquí; en mobile se renderizan dentro del panel */}
                            <EsrbRating className='hidden md:flex' />
                            <Switch2Box className='hidden md:flex' />
                        </div>

                        {/* Derecha: card de compra */}
                        <PurchasePanel />
                    </div>
                </div>
            </div>
        </section>
    )
}
