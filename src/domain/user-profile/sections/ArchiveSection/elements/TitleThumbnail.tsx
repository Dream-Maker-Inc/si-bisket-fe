import { MediaQueries } from '@/common/themes/Limit'
import { Stack } from '@mui/material'
import { css } from '@emotion/react'

export const TitleThumbnail = () => (
  <Stack css={style.root}>
    <img src='/user-collection/thumbnailSquare.png' />
  </Stack>
)

const style = {
  root: css`
    width: 76px;
    aspect-ratio: 1;
    padding: 5px;
    background-color: white;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);

    @media ${MediaQueries.x} {
      width: 63px;
    }
  `,
}
