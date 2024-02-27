export interface Root {
  products: Products
}

export interface Products {
  info: Info
  products: Product[]
}

export interface Info {
  total: number
  pages: number
}

export interface Product {
  _id: string
  name: string
  img: string
  category: string
  price: number
  size: string
}
