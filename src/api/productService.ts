import axios from "axios";
import { InputName } from "../types";
import { bearer_token, productsBaseURL } from "./service";

export const getProducts = async () => {
    try {
        const response = await axios.get(productsBaseURL, {
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
        const response = await axios.post(productsBaseURL, product, {
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

export const getProductItem = async (id: string) => {
    try {
        const response = await axios.get(productsBaseURL + `${id}`, {
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