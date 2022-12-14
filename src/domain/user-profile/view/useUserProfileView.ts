import { useRouter } from 'next/router'

export const useUserProfileView = () => {
  const router = useRouter()
  const user = router.query?.user + ''

  return {
    isCreator: user == 'creator',
  }
}
