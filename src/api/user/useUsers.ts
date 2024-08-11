import { QueryKey, useQuery, UseQueryOptions } from 'react-query'

import { User } from '@types'

import { QueryKeys } from '../keys'
import { getUsers } from './queries'

export const useUsers = (options?: UseQueryOptions<User[], unknown, User[], QueryKey[]>) => {
  return useQuery<User[], unknown, User[], QueryKey[]>([QueryKeys.USERS], getUsers, options)
}
