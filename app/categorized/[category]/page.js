import RecipeList from "@/components/RecipeList";
import { getAllRecipes } from "@/db/queries"

const CategoryPage = async ({params: {category}}) => {
    const recipes = await getAllRecipes()
    const decodedSlug = decodeURIComponent(category)
    const unslug = decodedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  

    let filteredRecipes = recipes.filter(recipe => recipe.category === unslug)
    console.log(filteredRecipes.length)
    return (
        <main>

            <section class="container py-8">
                <div>

                    <h3 class="font-semibold text-xl">{unslug }</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                        <RecipeList recipes= {filteredRecipes} />

                       
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CategoryPage