import Header from '@/components/Header'
import PromoBar from '@/components/PromoBar'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import RelatedTags from '@/components/RelatedTags'
import BrandBar from '@/components/BrandBar'
import About from '@/components/About'
import AboutPlayers from '@/components/AboutPlayers'
import MoreLikeThis from '@/components/MoreLikeThis'
import Legal from '@/components/Legal'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'

export default function App() {
    return (
        <div className='min-h-screen bg-white text-ink pb-28 lg:pb-0'>
            <Header />
            <PromoBar />
            <Hero />
            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%] mt-16'>
                <Info />
            </section>

            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%] mt-4'>
                <RelatedTags />
            </section>

            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%] mt-6'>
                <About />
            </section>

            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%] mt-8'>
                <AboutPlayers />
            </section>

            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%] mt-16'>
                <MoreLikeThis />
            </section>

            <section className='mx-4 max-w-[71.5rem] md:mx-auto md:w-[96%]'>
                <Legal />
            </section>
            <BrandBar />
            <Footer />
            <MobileBottomBar />
        </div>
    )
}
