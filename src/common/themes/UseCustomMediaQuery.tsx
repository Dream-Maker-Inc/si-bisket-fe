import useMediaQuery from '@mui/material/useMediaQuery'
import { MediaQueries } from './Limit'

// 브라우저 크기가 변하면 연결된 컴포넌트가 실시간으로 리렌더링 됩니다.
export const useCustomMediaQuery = () => {
  const isMobile = useMediaQuery(MediaQueries.xs)
  const isTablet = useMediaQuery(MediaQueries.md)
  const isWebNormal = useMediaQuery(MediaQueries.xl)
  const isWebLarge = useMediaQuery(MediaQueries.xxl)

  return {
    isMobile,
    isTablet,
    isWebNormal,
    isWebLarge,
  }
}
