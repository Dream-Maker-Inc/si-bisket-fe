import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'

export const BannerSection = () => {
  return (
    <div css={style.root}>
      <div css={style.imageContainer}>
        <img src='/detail/banner/main-banner.png' css={style.image} />
        <img src='/detail/banner/rec-banner.png' css={style.rec} />
        <img src='/detail/banner/vertical-banner.png' css={style.vertical} />
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    height: 870px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.BannerBg};

    @media ${MediaQueries.md} {
      height: 560px;
    }

    @media ${MediaQueries.xs} {
      height: 400px;
    }
  `,
  imageContainer: css`
    width: 792px;
    height: 576px;
    position: relative;

    @media ${MediaQueries.xl} {
      width: 92%;
      height: unset;
      aspect-ratio: 1/0.727;
    }
  `,
  image: css`
    width: 576px;
    aspect-ratio: 1/1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    @media ${MediaQueries.xl} {
      width: 72.7%;
    }
  `,
  rec: css`
    width: 792px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 2;

    @media ${MediaQueries.xl} {
      width: 100%;
    }
  `,
  vertical: css`
    width: 792px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 1;

    @media ${MediaQueries.xl} {
      width: 100%;
    }
  `,
}
