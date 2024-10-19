import Link from "next/link";

export default function NavBar() {
    return <>
        <nav>
            <li><Link href={{
                pathname: '/home',
                query: {q: 13},
            }}>Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog/1">Blog1</Link></li>
            <li><Link href="/blog/20">Blog20</Link></li>
        </nav>
    </>
}