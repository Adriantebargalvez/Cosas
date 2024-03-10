export interface Root {
  success: boolean
  count: number
  total: number
  data: Daum[]
}

export interface Daum {
  id: string
  name: string
  image: string
  region: string
  description: string
}
