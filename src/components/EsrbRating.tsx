import product from '@/data/product.json'
import { asset } from '@/lib/asset'

const { esrb } = product

export default function EsrbRating({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-start gap-3 max-w-[412px] ${className}`}>
            <img
                src={asset('/assets/ESRB.svg')}
                alt={esrb.rating}
                className='w-10 shrink-0'
            />
            <div className='text-xs text-ink/80'>
                <p className='border-b border-ink/15 pb-2'>{esrb.descriptors.join(', ')}</p>
                <p className='pt-1'>{esrb.interactive}</p>
            </div>
        </div>
    )
}
