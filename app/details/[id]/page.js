import RecipeDetails from '@/components/RecipeDetails'
import { getRecipeById } from '@/db/queries'
const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

export async function generateMetadata({params: {id}}) {
  const recipe = await getRecipeById(id);

  return {
    title: `Khana Khazana - ${recipe?.name}`,
    description: recipe?.description.slice(0, 100),
    openGraph: {
      title: recipe.name,
      description: recipe.description,
      url: `NEXT_PUBLIC_SITE_URL/details/${recipe.id}`,
      type: 'article',
      siteName: "Khana Khazana",
      authors: recipe.author,
      images: [
          {
              url: recipe.thumbnail,
              width: 1200,
              height: 630,
              alt: `Preview image for ${recipe.title}`,
          }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: recipe.name, 
      description: recipe.description, 
      url: `NEXT_PUBLIC_SITE_URL/details/${recipe.id}`,
      images: { 
          url: recipe.thumbnail,
          alt: `Preview image for ${recipe.title}`, 
      },
  }
  }
}


const page = async({ params }) => {
    const id = params.id

    const recipe = await getRecipeById(id)
 
  return (
      <RecipeDetails recipe={recipe} id = {id} /> 
  )
}

export default page