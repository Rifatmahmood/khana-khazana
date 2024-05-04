'use server'
import { revalidatePath } from 'next/cache'
import { createUser, findUserByCredentials, updateFav } from "@/db/queries";
import { redirect } from "next/navigation";


async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect("/login");
}

async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}


async function addFavouriteRecipe(recipeID, authID) {
    try {
        await updateFav(recipeID, authID);
    } catch (error) {
        throw error;
    }
    revalidatePath(`/details/${recipeID}`);
}

export {
    performLogin, registerUser, addFavouriteRecipe
};

