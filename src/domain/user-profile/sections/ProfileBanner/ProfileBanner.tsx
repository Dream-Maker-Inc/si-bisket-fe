import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { ReactNode } from 'react'

type ProfileBannerProps = {
  children: ReactNode
}

export const ProfileBanner = ({ children }: ProfileBannerProps) => {
  return (
    <div css={style.root}>
      <div css={style.container}>{children}</div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    height: 240px;
    margin-top: 80px;
    background-color: black;
    padding: 0 23px;

    @media ${MediaQueries.xs} {
      height: 166px;
    }
  `,
  container: css`
    max-width: 1400px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 0;
  `,
}
