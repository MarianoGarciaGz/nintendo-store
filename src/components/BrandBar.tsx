import { asset } from '@/lib/asset'

export default function BrandBar() {
    return (
        <section className='bg-primary justify-center flex h-[128px] items-center'>
            <img
                src={asset('/assets/brand/nintendo-logo.svg')}
                alt='Nintendo'
                className='h-[64px] w-auto'
            />
        </section>
    )
}
