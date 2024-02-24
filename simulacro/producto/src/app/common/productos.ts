
export type Productos = Producto[]

export interface Producto {
  _id: string
  nombre: string
  imagen: string
  precio: number
  tipo: string
  talla: number
  color: string
  //__v: number
  //page: number
}
