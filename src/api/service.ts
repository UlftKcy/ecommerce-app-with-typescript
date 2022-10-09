import axios from "axios";

const bearer_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVrYWNheTg3QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9VbGZ0S2N5IiwiaWF0IjoxNjY1Mjk5MDYxLCJleHAiOjE2NjU3MzEwNjF9.uj-b0JRxWQ_KVn6Ge2sCxlyKbjIWCEC5w4C-vkwYD_g';

export const instance = axios.create({
    baseURL: 'https://upayments-studycase-api.herokuapp.com/api',
    headers:{
        Authorization: bearer_token,
        accept: "application/json",
    }
});



