import Image from 'next/image';
import Link from 'next/link';
const Recipe = ({ recipe }) => {

    return (
        <Link href={`/details/${recipe.id}`}>

            <div className="card">
                <Image src={recipe.thumbnail} className="rounded-md" alt="" width={300} height={160} />
                <h4 className="my-2">{recipe.description}</h4>
                <div className="py-2 flex justify-between text-xs text-gray-500">
                    <span>⭐️ {recipe.rating}</span>
                    <span>By: {recipe.author}</span>
                </div>
            </div>
        </Link>

    )
}

export default Recipe