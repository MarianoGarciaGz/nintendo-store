import { motion } from 'motion/react'
import product from '@/data/product.json'

const { relatedTags } = product

export default function RelatedTags() {
    return (
        <div className=''>
            <h2 className='mb-6 text-h2 font-semibold lg:text-h1'>Related tags</h2>

            <div className='flex flex-wrap gap-3'>
                {relatedTags.map((tag) => (
                    <motion.a
                        key={tag}
                        href='#'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ type: 'spring', stiffness: 600, damping: 20 }}
                        className='rounded-md bg-ink/9 px-4 py-2 text-body font-semibold text-ink/90 hover:text-primary transition-colors duration-300'>
                        {tag}
                    </motion.a>
                ))}
            </div>
        </div>
    )
}
