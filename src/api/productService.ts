import axios from "axios";
import { InputName } from "../types";

const baseURL = 'https://upayments-studycase-api.herokuapp.com/api/products';
const bearer_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVrYWNheTg3QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9VbGZ0S2N5IiwiaWF0IjoxNjY1Mjk5MDYxLCJleHAiOjE2NjU3MzEwNjF9.uj-b0JRxWQ_KVn6Ge2sCxlyKbjIWCEC5w4C-vkwYD_g';

export const getProducts = async () => {
    const response = await axios.get(baseURL,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearer_token}`
            }
        })
        console.log(response.data)
        return response.data;
};

export const createProduct = async (product:InputName) => {
    const response = await axios.post(baseURL,product,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearer_token}`
            }
        })
        return response.data;
};