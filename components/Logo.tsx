import { cn } from '@/lib/utils'
import { SquareDashedMousePointer } from 'lucide-react'
import { NextFontManifestPlugin } from 'next/dist/build/webpack/plugins/next-font-manifest-plugin'
import Link from 'next/link'
import React from 'react'

function Logo({
    fontSize = 'text-2x1',
    iconSize = 20
}: {
    fontSize?: string,
    iconSize?: number


}) {
    return (
        <Link href='/' className={cn('text-2x1 font-extrabold flex items-center gap-2',
            fontSize
        )}
        >
        <div className='rounded-xl bg-gradient-to-r
          from-emerald-500 to-emerald-600 p-2'>
            <SquareDashedMousePointer size={iconSize}
            className='stroke-white' />
            </div>
            <div>
                <span className='bg-gradient-to-r from-emerald-500
                to-emerald-600 bg-clip-text text-transparent'>
                    Flow
                </span>
                <span className='text-stone-700
                dark:text-stone-39'>
                     Scrape   
                </span>
            </div>
        </Link>
    )
}

export default Logo