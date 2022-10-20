import axios from "axios";
import { bearer_token, categoriesBaseURL } from "./service";

export const getCategories = async () => {
    try {
        const response = await axios.get(categoriesBaseURL, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearer_token}`
            }
        }
        )
        return response.data;
    } catch (error) {
        throw new Error('Something went wrong!', { cause: error });
    }
};

export const getCategory = async (id: string) => {
    try {
        const response = await axios.get(categoriesBaseURL + `${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearer_token}`
            }
        })
        return response.data;
    } catch (error) {
        throw new Error('Something went wrong!', { cause: error });
    }
};