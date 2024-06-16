import Link from 'next/link';
export default function shareMealPage(){
    return (
        <main style={{ color: 'white', textAlign: 'center' }}>
            <h1>Share Meal</h1>
            <p><Link href='/' style={{ color: 'white' }}>Home</Link></p>
        </main>
    )
}