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
        <div css={style.inner}>
          <ImageCard /> <ImageCard /> <ImageCard /> <ImageCard />
          <ImageCard /> <ImageCard /> <ImageCard /> <ImageCard />
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
  `,
  select: css`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 16px;
    @media ${MediaQueries.md} {
      margin-bottom: 12px;
    }
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  inner: css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
    row-gap: 24px;

    @media ${MediaQueries.xxl} {
      width: fit-content;
      grid-template-columns: repeat(3, 330px);
    }
    @media ${`(max-width:1100px)`} {
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${MediaQueries.x} {
      width: fit-content;
      grid-template-columns: repeat(2, 382px);
      row-gap: 36px;
      column-gap: 36px;
    }

    @media ${`(max-width:830px)`} {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${`(max-width:680px)`} {
      width: fit-content;
      grid-template-columns: repeat(1, 330px);
      column-gap: unset;
    }

    @media ${`(max-width:374px)`} {
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
    }
  `,
}
