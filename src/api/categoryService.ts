import axios from "axios";

const baseURL = ' https://upayments-studycase-api.herokuapp.com/api/categories/';
const bearer_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVrYWNheTg3QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9VbGZ0S2N5IiwiaWF0IjoxNjY1Mjk5MDYxLCJleHAiOjE2NjU3MzEwNjF9.uj-b0JRxWQ_KVn6Ge2sCxlyKbjIWCEC5w4C-vkwYD_g';

export const getCategories = async () => {
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

export const getCategory = async (id: string) => {
    try {
        const response = await axios.get(baseURL + `${id}`, {
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