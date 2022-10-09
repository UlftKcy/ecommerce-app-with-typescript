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
    loading:boolean
    error:null
}
