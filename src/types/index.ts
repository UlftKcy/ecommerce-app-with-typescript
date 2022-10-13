export interface Products {
    Name: string
    Price: number
    Category: string
    Description: string
    Avatar: string
    DeveloperEmail: string
    _id?:string

}

export interface InitialState {
    products: Products[]
    selected_product : object
    favorite_products: InputName[]
    loading: boolean
    error: null | string
}


export interface Categories {
    categories: string[];
    selected_category : string
    loading: boolean
    error: null | string
}

export interface InputName {
    _id?:string
    name: string
    price: number
    category: string
    description: string
    avatar: string
    developerEmail: string
}