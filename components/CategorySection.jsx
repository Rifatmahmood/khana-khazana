import { getAllRecipes } from '@/db/queries';
import Link from 'next/link';

const CategorySection = async () => {
  const recipes = await getAllRecipes()
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  console.log(categories)
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link href={`/categorized/${cat.toLowerCase().replace(/\s+/g, "-")}`}>{cat}</Link>
          </li>
        ))}


      </ul>
    </div>
  );
};

export default CategorySection;
