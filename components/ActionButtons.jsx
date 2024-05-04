"use client";

import { addFavouriteRecipe } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";
const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

const ActionButtons = ({ recipe }) => {
    const recipeID = recipe.id
    const { auth } = useAuth()
    const favRecipeIDs = auth?.favourites
    const isFav = favRecipeIDs?.find(id => id === recipeID)
    console.log(favRecipeIDs)
    const [favourite, setFavourite] = useState(isFav)
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const toggleFavourite = async () => {
        if (auth) {
            await addFavouriteRecipe(recipeID, auth?.id);
            setFavourite(!favourite);
        } else {
            router.push("/login");
        }
    };

    return (
        <div className="flex gap-4 justify-end">


            <button
                onClick={() =>
                    startTransition(() => {
                        toggleFavourite();
                    })
                }
                className={`flex gap-2 cursor-pointer ${favourite && "text-[#eb4a36] hover:text-[#eb4a36]"}`}>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" fill={`${favourite && "#eb4a36"}`} />
                </svg>
                <span>Favourite</span>

            </button>

            
            <FacebookShareButton
                url={`${NEXT_PUBLIC_SITE_URL}/details/${recipeID}`}
                title = {recipe.title}
            >
                <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
                    <FacebookIcon size={32} round={true} />
                    <span>Facebook</span>
                </div>
            </FacebookShareButton>
            <TwitterShareButton
                url={`${NEXT_PUBLIC_SITE_URL}/details/${recipeID}`}
                title = {recipe.title}
            >
                <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
                    <TwitterIcon size={32} round={true} />
                    <span>Twitter</span>
                </div>
            </TwitterShareButton>
        </div >
    )
}

export default ActionButtons