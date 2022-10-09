import * as Yup from "yup";
import { InputName } from "../types";

export const productSchema: Yup.SchemaOf<InputName> = Yup.object().shape({
    name: Yup.string().
        required(),
    price: Yup.number().
        required(),
    category: Yup.string().
        required(),
    description: Yup.string().
        required(),
    avatar: Yup.string().
        required(),
        developerEmail: Yup.string().
        required(),
});