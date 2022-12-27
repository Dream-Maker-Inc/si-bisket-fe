import { ImageCard } from '@/common/components/card/ImageCard'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { FilterSelect } from './components/FilterSelect'

type GallerySectionProps = {
  isUserCollector?: boolean
}

export const GallerySection = ({
  isUserCollector = false,
}: GallerySectionProps) => {
  return (
    <div css={style.root(isUserCollector)}>
      <div css={style.select}>
        <FilterSelect />
      </div>
      <div css={style.container}>
        <div css={style.inner}>
          <ImageCard /> <ImageCard /> <ImageCard /> <ImageCard />
        </div>
      </div>
    </div>
  )
}

const style = {
  root: (isUserCollector: boolean) => css`
    width: 100%;
    max-width: 1446px;
    margin: 0 auto;
    padding: 0 23px;
    padding-top: 68px;
    padding-bottom: 200px;

    @media ${MediaQueries.md} {
      max-width: 500px;
      padding-top: ${isUserCollector ? '105px' : '32px'};
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
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  inner: css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
    @media ${MediaQueries.xxl} {
      width: fit-content;
      grid-template-columns: repeat(3, 330px);
      row-gap: 24px;
    }
    @media ${`(max-width:1100px)`} {
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
    }
    @media ${`(max-width:852px)`} {
      grid-template-columns: repeat(2, 330px);
    }

    @media ${MediaQueries.md} {
      grid-template-columns: 1fr;
    }
  `,
}
