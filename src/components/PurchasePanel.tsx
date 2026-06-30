import { useState } from 'react'
import { motion } from 'motion/react'
import { Check, Download, Heart } from 'lucide-react'
import product from '@/data/product.json'

const { category, title, purchase } = product

export default function PurchasePanel() {
    const [selected, setSelected] = useState(purchase.versions.find((v) => v.selected)?.id ?? purchase.versions[0].id)
    const [wished, setWished] = useState(false)

    return (
        <div className='flex flex-col'>
            {/* Categoría */}
            <span className='mb-3 flex items-center gap-2 text-sm text-ink/70'>
                <span className='h-4 w-0.5 bg-gray-900' />
                {category}
            </span>

            {/* Título */}
            <h1 className='mb-5 text-[1.75rem] font-semibold leading-tight lg:text-[2.375rem]'>{title}</h1>

            {/* Selector de versión */}
            <p className='mb-2 text-sm font-medium'>Select a version</p>
            <div className='grid grid-cols-2 gap-2'>
                {purchase.versions.map((v) => {
                    const active = selected === v.id
                    return (
                        <motion.button
                            key={v.id}
                            type='button'
                            onClick={() => setSelected(v.id)}
                            whileTap={{ scale: 0.99 }}
                            className={`flex items-center gap-2.5 rounded-lg border-2 px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                                active ? 'border-primary' : 'border-mist hover:border-ink/30'
                            }`}>
                            <span
                                className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${
                                    active ? 'border-primary bg-primary text-white' : 'border-ink/40'
                                }`}>
                                {active && (
                                    <Check
                                        className='size-3'
                                        strokeWidth={3}
                                    />
                                )}
                            </span>
                            {v.label}
                        </motion.button>
                    )
                })}
            </div>

            {/* Link upgrade */}
            <a
                href='#'
                className='mt-3 text-sm font-semibold text-primary underline hover:no-underline'>
                {purchase.upgradeLink}
            </a>

            {/* Edition */}
            <div className='mt-5 flex items-center gap-2 text-sm'>
                <span className='font-semibold'>Edition</span>
                <span className='rounded bg-ink/5 px-4 py-2 text-ink/80'>{purchase.edition}</span>
            </div>

            {/* Precio + wishlist */}
            <div className='mt-4 flex items-center justify-between'>
                <span className='text-[1.75rem] font-semibold'>${purchase.price}</span>
                <motion.button
                    type='button'
                    aria-label='Add to wishlist'
                    onClick={() => setWished((w) => !w)}
                    whileTap={{ scale: 0.85 }}
                    className='text-primary'>
                    <Heart
                        className='size-6'
                        strokeWidth={2.5}
                        fill={wished ? 'currentColor' : 'none'}
                    />
                </motion.button>
            </div>

            {/* CTA */}
            <motion.button
                type='button'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 600, damping: 20 }}
                className='mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-base font-semibold text-white hover:bg-[#ac000d]'>
                <Download
                    className='size-5'
                    strokeWidth={2.5}
                />
                {purchase.cta}
            </motion.button>

            <p className='mt-3 text-sm text-ink/70'>{purchase.note}</p>
        </div>
    )
}
