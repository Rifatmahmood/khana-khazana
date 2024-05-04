import { recipeModel } from "@/models/recipe-modal";
import dbConnect from "@/services/dbConnect";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";
import mongoose from "mongoose";

const { userModel } = require("@/models/user-model");



async function createUser(user) {
    ç
    return await userModel.create(user);
}

async function getAllRecipes() {
    await dbConnect()
    const allRecipes = await recipeModel.find().lean();

    return replaceMongoIdInArray(allRecipes);
}


async function getRecipeById(recipeID) {
    await dbConnect()
    const recipe = await recipeModel.findById(recipeID).lean();
    return replaceMongoIdInObject(recipe);
}


async function updateFav(recipeID, authID) {
    await dbConnect()
    const user = await userModel.findById(authID);

    if (user) {
        const foundRecipes = user.favourites.find(
            (id) => id.toString() === recipeID
        );

        if (foundRecipes) {
            user.favourites.pull(new mongoose.Types.ObjectId(recipeID));
        } else {
            user.favourites.push(new mongoose.Types.ObjectId(recipeID));
        }

        user.save();
    }
}


async function findUserByCredentials(credentials) {
    await dbConnect()
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

export {
    createUser,
    getAllRecipes, 
    getRecipeById,
    findUserByCredentials,
    updateFav
};
