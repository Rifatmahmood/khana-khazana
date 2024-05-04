import { getAllRecipes } from '@/db/queries';

import RecipeList from './RecipeList';

const CardSection = async () => {
  const allRecipes = await getAllRecipes()

  return (
   <RecipeList recipes= {allRecipes} /> 
  );
};

export default CardSection;
