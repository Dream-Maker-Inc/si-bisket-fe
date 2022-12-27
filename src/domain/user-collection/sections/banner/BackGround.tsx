import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import Image from 'next/image'
import { ReactNode } from 'react'

type BackgroundProps = {
  children: ReactNode
}

export const BackGround = ({ children }: BackgroundProps) => {
  return (
    <div css={style.bg}>
      <Image
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        src={'/main/column-image.jpg'}
        alt='img'
      />
      <div css={style.opacity}></div>
      <div css={style.container}>{children}</div>
    </div>
  )
}

const style = {
  bg: css`
    width: 100%;
    position: relative;
  `,
  opacity: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  `,
  container: css`
    width: 100%;
    max-width: 1446px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding: 0 23px;
    padding-top: 160px;

    @media ${MediaQueries.xxxl} {
      max-width: 1062px;
    }
    @media ${`(max-width:1023px)`} {
      max-width: 788px;
      margin: 0 auto;
    }

    @media ${MediaQueries.xl} {
      max-width: 90%;
    }
    @media ${MediaQueries.md} {
      padding: 0;
      padding-top: 136px;
    }
  `,
}
