import { motion } from 'motion/react'
import product from '@/data/product.json'

const { relatedTags } = product

export default function RelatedTags() {
    return (
        <div className=''>
            <h2 className='mb-6 text-[1.3125rem] font-semibold lg:text-[1.75rem]'>Related tags</h2>

            <div className='flex flex-wrap gap-3'>
                {relatedTags.map((tag) => (
                    <motion.a
                        key={tag}
                        href='#'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ type: 'spring', stiffness: 600, damping: 20 }}
                        className='rounded-md bg-ink/9 px-4 py-2 text-sm font-semibold text-ink/90 hover:text-primary transition-colors duration-300 lg:text-base'>
                        {tag}
                    </motion.a>
                ))}
            </div>
        </div>
    )
}
