import { CircleCheck } from 'lucide-react'
import product from '@/data/product.json'

const { switch2Compatibility } = product

export default function Switch2Box({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-start gap-3 rounded-md bg-mist/50 p-4 ${className}`}>
            <CircleCheck className='mt-0.5 size-5 shrink-0 text-navy' />
            <div className='text-sm'>
                <p className='font-semibold'>{switch2Compatibility.title}</p>
                <p className='text-ink/80'>{switch2Compatibility.text}</p>
            </div>
        </div>
    )
}
