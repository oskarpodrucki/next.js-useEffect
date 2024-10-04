import Link from 'next/link'

export default function Header(){
    return (
        <div>
            <Link href="/">Główna</Link>
            <Link href="/page1">Strona1</Link>
        </div>
    )
}