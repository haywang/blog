import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

export default ({href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isIntrnalLink = href && href.startsWith('/')
    const isAnchorLink = href && href.startsWith('#')

    if (isIntrnalLink) {
        return <Link className="break-words" href={href} {...rest} />
    }

    if (isAnchorLink) {
        return <a className="break-words" href={href} {...rest} />
    }

    return (
        <a className="break-words" target="__blank" rel="noopener noreferrer" href={href} {...rest} />
    )
}