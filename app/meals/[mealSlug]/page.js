import Link from 'next/link';
export default function slugPage({params}){
    return (
        <main style={{ color: 'white', textAlign: 'center' }}>
            <h1>Meal Details</h1>
            <p><Link href='/meals' style={{ color: 'white' }}>Meals</Link></p>
            <p>{params.mealSlug}</p>
        </main>
    )
}