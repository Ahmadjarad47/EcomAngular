import { IProdect } from "./IProdect"

export interface IPagnation {
    pageNumber: number
    pageSize: number
    count: number
    data: IProdect[]
  }