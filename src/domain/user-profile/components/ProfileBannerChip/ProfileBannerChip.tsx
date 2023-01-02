import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'

export const ProfileBannerChip = () => {
  return (
    <div css={style.root}>
      <div css={style.image}></div>
    </div>
  )
}

const style = {
  root: css`
    width: 176px;
    aspect-ratio: 1;
    background-color: white;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 120px;
    padding: 12px;
    position: absolute;
    bottom: -50px;
    left: 0;
    z-index: 1;

    @media ${`(max-width:854px)`} {
      bottom: -30px;
      width: 100px;
      padding: 10px;
    }

    @media ${MediaQueries.xs} {
      bottom: -34px;
    }
  `,
  image: css`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 120px;
    background-color: #b3ff4b;
  `,
}
