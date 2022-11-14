import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'

export const BannerSection = () => {
  return (
    <div css={style.root}>
      <img src='/detail/banner/main-banner.png' css={style.image} />
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    aspect-ratio: 1/0.411;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.BannerBg};
  `,
  image: css`
    max-width: 630px;
    aspect-ratio: 1/1;
  `,
}
