import { useQueryClient } from 'react-query'

import { User } from '@types'

import { QueryKeys } from '../keys'

export const useSetUsersData = () => {
  const queryClient = useQueryClient()

  return (users: User[]) => queryClient.setQueryData(QueryKeys.USERS, users)
}
