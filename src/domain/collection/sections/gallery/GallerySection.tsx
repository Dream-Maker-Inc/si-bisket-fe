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
        <ImageCard /> <ImageCard /> <ImageCard /> <ImageCard />
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

    @media ${MediaQueries.xxxl} {
      max-width: 1062px;
    }

    @media ${`(max-width:1023px)`} {
      max-width: 928px;
    }

    @media ${MediaQueries.md} {
      max-width: 500px;
      padding-top: 32px;
      padding-bottom: 160px;
    }
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;

    @media ${MediaQueries.xxxl} {
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 24px;
    }
    @media ${`(max-width:1023px)`} {
      grid-template-columns: 1fr 1fr;
    }

    @media ${MediaQueries.md} {
      grid-template-columns: 1fr;
    }
  `,
}
