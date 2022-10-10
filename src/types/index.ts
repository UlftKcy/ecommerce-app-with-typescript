export interface Products {
    Name: string
    Price: number
    Category: string
    Description: string
    Avatar: string
    DeveloperEmail: string

}

export interface InitialState {
    products: Products[]
    selected_product : object
    loading: boolean
    error: null
}


export interface Categories {
    categories: string[];
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