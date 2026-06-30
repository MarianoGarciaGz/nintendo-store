import Header from '@/components/Header'
import PromoBar from '@/components/PromoBar'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import RelatedTags from '@/components/RelatedTags'
import BrandBar from '@/components/BrandBar'
import About from '@/components/About'

export default function App() {
    return (
        <div className='min-h-screen bg-white text-ink'>
            <Header />
            <PromoBar />
            <Hero />
            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%] mt-16'>
                <Info />
            </section>

            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%] mt-16'>
                <RelatedTags />
            </section>

            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%] mt-16'>
                <About />
            </section>
            <BrandBar />
        </div>
    )
}
