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
    width: 150px;
    height: 150px;
    padding: 11px;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    margin-bottom: 16px;
    border-radius: 5px;
    @media ${MediaQueries.md} {
      width: 100px;
      height: 100px;
      padding: 7px;
      margin: 0 auto;
    }
  `,
}
