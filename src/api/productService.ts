import axios from "axios";
import { InputName } from "../types";
import { baseURL, bearer_token } from "./service";

export const getProducts = async () => {
    try {
        const response = await axios.get(baseURL, {
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

export const createNewProduct = async (product: InputName) => {
    try {
        const response = await axios.post(baseURL, product, {
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