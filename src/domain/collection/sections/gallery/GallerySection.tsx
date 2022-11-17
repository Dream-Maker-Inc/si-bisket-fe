import { ImageCard } from '@/common/components/card/ImageCard'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { FilterSelect } from './components/FilterSelect'

export const GallerySection = () => {
  return (
    <div css={style.root}>
      <div css={style.select}>
        <FilterSelect />
      </div>
      <div css={style.container}>
        <div css={style.row}>
          <ImageCard />
          <ImageCard />
        </div>
        <div css={style.row}>
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1446px;
    margin: 0 auto;
    padding: 0 23px;
    padding-top: 68px;
    padding-bottom: 200px;

    @media ${MediaQueries.md} {
      height: 2096px;
      padding-top: 32px;
      padding-bottom: 160px;
    }
  `,
  select: css`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 16px;

    @media ${MediaQueries.xl} {
      margin-bottom: 12px;
    }
  `,

  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 24px;

    @media ${MediaQueries.xl} {
      flex-direction: column;
      height: fit-content;
      gap: 28px;
    }
  `,

  row: css`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 24px;

    @media ${MediaQueries.xl} {
      align-items: center;
      justify-content: center;
      height: fit-content;
    }

    @media ${MediaQueries.md} {
      flex-direction: column;
      gap: 28px;
    }
  `,
}
