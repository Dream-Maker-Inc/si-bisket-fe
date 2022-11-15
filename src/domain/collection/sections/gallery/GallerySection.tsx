import { ImageCard } from '@/common/components/ImageCard'
import { css } from '@emotion/react'

export const GallerySection = () => {
  return (
    <div css={style.root}>
      <div css={style.container}>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1400px;
    padding-top: 120px;
    padding-bottom: 200px;
    margin: 0 auto;
  `,

  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 24px;
  `,
}
