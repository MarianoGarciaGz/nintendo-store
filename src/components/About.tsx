import product from '@/data/product.json'

const { aboutItem } = product

export default function About() {
    return (
        <div>
            <h2 className='mb-4 text-[1.75rem] font-semibold'>About this item</h2>

            {/* una fila por cada objeto del array */}
            {aboutItem.map((row) => (
                <div
                    key={row.label}
                    className='border-b border-t border-ink/10 py-4'>
                    <h3 className='text-lg font-medium'>{row.label}</h3>
                </div>
            ))}
        </div>
    )
}
