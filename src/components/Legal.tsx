import product from '@/data/product.json'

const { legal } = product

export default function Legal() {
    return (
        <div className='space-y-3 py-10 text-xs leading-relaxed text-ink/60'>
            {legal.map((line, i) => (
                <p key={i}>
                    {line.split(/(nintendo\.com\/online)/).map((part, j) =>
                        part === 'nintendo.com/online' ? (
                            <a
                                key={j}
                                href='#'>
                                {part}
                            </a>
                        ) : (
                            part
                        )
                    )}
                </p>
            ))}
        </div>
    )
}
