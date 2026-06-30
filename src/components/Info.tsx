import { useState } from 'react'
import { motion } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import product from '@/data/product.json'
import { asset } from '@/lib/asset'

const { description } = product
const [intro, ...rest] = description.paragraphs

export default function Info() {
    const [open, setOpen] = useState(false)

    return (
        <div className='grid grid-cols-1 items-start gap-7 py-12 md:grid-cols-2'>
            {/* Texto */}
            <div>
                <h2 className='mb-4 text-h2 font-semibold'>{description.heading}</h2>

                <p className='text-body leading-relaxed text-ink/90'>{intro}</p>

                {open && (
                    <div className='overflow-hidden'>
                        {rest.map((p, i) => (
                            <p
                                key={i}
                                className='mt-4 text-body leading-relaxed text-ink/90'>
                                {p}
                            </p>
                        ))}
                    </div>
                )}

                {!open && <p className='mt-1 text-ink/60'>…</p>}

                <button
                    type='button'
                    onClick={() => setOpen((o) => !o)}
                    className='mt-4 flex items-center gap-1.5 font-semibold text-primary hover:underline'>
                    {open ? (
                        <Minus
                            className='size-4'
                            strokeWidth={3}
                        />
                    ) : (
                        <Plus
                            className='size-4'
                            strokeWidth={3}
                        />
                    )}
                    {open ? 'Read less' : description.readMore}
                </button>

                <p className='mt-4 text-xs text-ink/60'>{description.publisherNote}</p>

                <motion.a
                    href='#'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: 'spring', stiffness: 600, damping: 20 }}
                    className='mt-5 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#ac000d]'>
                    {description.officialSiteCta}
                </motion.a>
            </div>

            {/* Imagen */}
            <div className='overflow-hidden rounded-xl'>
                <img
                    src={asset(product.gallery[0].src)}
                    alt={product.title}
                    className='aspect-video w-full object-cover'
                />
            </div>
        </div>
    )
}
