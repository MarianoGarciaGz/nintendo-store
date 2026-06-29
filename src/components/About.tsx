import {
    Database,
    Gamepad2,
    Users,
    UserRoundCheck,
    Wifi,
    MonitorSmartphone,
    Building2,
    Wrench,
    Globe,
    Calendar,
    ShieldCheck,
    Tv,
    Tablet,
    Smartphone,
    type LucideIcon
} from 'lucide-react'
import product from '@/data/product.json'
import EsrbRating from '@/components/EsrbRating'

type Value = { text: string; link?: boolean }
type Row = { label: string; values: Value[]; note?: string; noteLink?: string }

const aboutItem = product.aboutItem as Row[]

const icons: Record<string, LucideIcon> = {
    'Game file size': Database,
    'Supported play modes': Gamepad2,
    'No. of players': Users,
    'Nintendo Account family-group lending': UserRoundCheck,
    'Nintendo Switch Online': Wifi,
    System: MonitorSmartphone,
    Publisher: Building2,
    Developer: Wrench,
    'Supported languages': Globe,
    'Release date': Calendar,
    'ESRB rating': ShieldCheck
}

const playModeIcons: Record<string, LucideIcon> = {
    'TV mode': Tv,
    'Tabletop mode': Tablet,
    'Handheld mode': Smartphone
}

function Values({ row }: { row: Row }) {
    // Caso especial: modos de juego con su iconito arriba
    if (row.label === 'Supported play modes') {
        return (
            <div className='flex flex-wrap gap-6'>
                {row.values.map((v) => {
                    const Icon = playModeIcons[v.text]
                    return (
                        <span
                            key={v.text}
                            className='flex flex-col items-center gap-1 text-xs'>
                            {Icon && (
                                <Icon
                                    className='size-6'
                                    strokeWidth={1.75}
                                />
                            )}
                            {v.text}
                        </span>
                    )
                })}
            </div>
        )
    }

    return (
        <div className='flex flex-wrap gap-x-4 gap-y-1'>
            {row.values.map((v) =>
                v.link ? (
                    <a
                        key={v.text}
                        href='#'
                        className='font-semibold text-primary underline-offset-2 underline hover:text-primary-[#ac000d]'>
                        {v.text}
                    </a>
                ) : (
                    <span key={v.text}>{v.text}</span>
                )
            )}
        </div>
    )
}

export default function About() {
    return (
        <div className=''>
            <h2 className='mb-2 text-[1.3125rem] font-semibold lg:text-[1.75rem]'>About this item</h2>

            <div className='border-t border-ink/10'>
                {aboutItem.map((row) => {
                    const Icon = icons[row.label]
                    return (
                        <div
                            key={row.label}
                            className='grid grid-cols-1 gap-2 border-b border-ink/10 py-5 text-sm md:grid-cols-[280px_1fr] md:gap-6'>
                            {/* Izquierda: icono + label */}
                            <div className='flex items-center gap-3 font-semibold'>
                                {Icon && (
                                    <Icon
                                        className='size-5 shrink-0 text-ink/70'
                                        strokeWidth={1.75}
                                    />
                                )}
                                {row.label}
                            </div>

                            {/* Derecha: valores + nota */}
                            <div>
                                {row.label === 'ESRB rating' ? <EsrbRating /> : <Values row={row} />}
                                {row.note && (
                                    <p className='mt-2 text-xs leading-relaxed text-ink/60'>
                                        {row.note}{' '}
                                        {row.noteLink && (
                                            <a
                                                href='#'
                                                className='font-semibold text-primary hover:underline hover:text-primary-[#ac000d]'>
                                                {row.noteLink}
                                            </a>
                                        )}
                                    </p>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
