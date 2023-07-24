import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteUser, fetchAllUsers, fetchUser, updateUser } from '../../lib/requests/user.request'
import { FetchUserInput } from '../../lib/requests/user.type'

/**
 * The useUpdateUser function is a custom hook that uses the useMutation hook to update a user.
 */
export const useUpdateUser = () => useMutation(updateUser)

/**
 * The useDeleteUser function is a custom hook that uses the useMutation hook to delete a user.
 */
export const useDeleteUser = () => useMutation(deleteUser)

/**
 * The useUsers function is a custom hook that uses the useQuery hook to fetch and return a list of
 * users.
 */
export const useAllUsers = () => useQuery(['users'], () => fetchAllUsers())

/**
 * The useUser function is a custom hook that uses the useQuery hook to fetch user data based on an
 * input value.
 * @param input - The `input` parameter is the value that is passed to the `useUser` function. It is
 * used as an argument to fetch the user data.
 */
export const useUser = (input: FetchUserInput) => useQuery(['user', input], () => fetchUser(input))
