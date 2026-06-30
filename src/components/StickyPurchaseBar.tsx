import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Download } from 'lucide-react'
import product from '@/data/product.json'

const { title, purchase } = product

export default function StickyPurchaseBar() {
    // Aparece cuando el CTA del Hero deja de verse (igual que la barra mobile).
    const [show, setShow] = useState(false)

    useEffect(() => {
        const heroCta = document.getElementById('hero-cta')
        if (!heroCta) return
        const observer = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), { threshold: 0 })
        observer.observe(heroCta)
        return () => observer.disconnect()
    }, [])

    return (
        <div className='pointer-events-none fixed inset-x-0 top-0 z-40 hidden lg:block'>
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        className='pointer-events-auto border-b border-mist bg-[#f8f8f8] shadow-sm'>
                        <div className='mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-3'>
                            <span className='text-lg font-semibold'>{title}</span>

                            <div className='flex items-center gap-5'>
                                <span className='text-sm font-semibold text-ink/60'>{purchase.edition}</span>
                                <span className='text-lg font-semibold'>${purchase.price}</span>
                                <motion.button
                                    type='button'
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 600, damping: 20 }}
                                    className='flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#ac000d]'>
                                    <Download
                                        className='size-5'
                                        strokeWidth={2.5}
                                    />
                                    {purchase.cta}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
