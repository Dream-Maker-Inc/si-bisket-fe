import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { ReactNode } from 'react'

type BackgroundProps = {
  children: ReactNode
}

export const BackGround = ({ children }: BackgroundProps) => {
  return (
    <div css={style.bg}>
      <div css={style.container}>{children}</div>
    </div>
  )
}

const style = {
  bg: css`
    /* background-color: #03010cc7; */
    background-image: url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg');
    width: 100%;
  `,
  container: css`
    width: 1392px;
    margin: 0 auto;
    padding-top: 160px;
    @media ${MediaQueries.xl} {
      max-width: 90%;
    }
    @media ${MediaQueries.md} {
      padding-top: 136px;
    }
  `,
}
