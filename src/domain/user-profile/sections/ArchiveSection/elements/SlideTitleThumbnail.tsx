import { MediaQueries } from '@/common/themes/Limit'
import { Stack } from '@mui/material'
import { css } from '@emotion/react'

type SlideTitleThumbnailProps = {
  img: string
}

export const SlideTitleThumbnail = ({ img }: SlideTitleThumbnailProps) => (
  <Stack css={style.root}>
    <img css={style.image} src={img} />
  </Stack>
)

const style = {
  root: css`
    width: 5vw;
    max-width: 76px;
    min-width: 43px;
    aspect-ratio: 1;
    padding: 5px;
    background-color: white;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    @media ${MediaQueries.xl} {
      padding: 4px;
    }
    @media ${MediaQueries.x} {
      max-width: 64px;
      width: 7.51vw;
      padding: 3px;
    }
    @media ${MediaQueries.sm} {
      width: 52px;
      border-radius: 8px;
    }
  `,
  image: css`
    border-radius: 10px;
    @media ${MediaQueries.sm} {
      border-radius: 8px;
    }
  `,
}
