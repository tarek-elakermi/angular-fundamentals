export interface IProduct {
  id: number
  name: string
  price: number
  category: string
  description: string
  image: string
  stock: number
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}