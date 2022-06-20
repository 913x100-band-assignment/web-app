import { IUser } from '../interfaces/IUser'
import { api } from './index'

export const getAll = async () => {
  const res = await api.get<IUser[]>('/user')
  return res.data.sort(
    (a, b) => a.joined_date.valueOf() - b.joined_date.valueOf()
  )
}
