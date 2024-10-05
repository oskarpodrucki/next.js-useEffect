import Link from 'next/link'

export default function Header(){
    return (
        <div className="flex flex-row justify-center  bg-neutral-950 text-white p-2">
            <Link href="/" className="hover:decoration-dashed">Główna</Link>
            <Link href="/page1" className="ml-3">Strona1</Link>
        </div>
    )
}