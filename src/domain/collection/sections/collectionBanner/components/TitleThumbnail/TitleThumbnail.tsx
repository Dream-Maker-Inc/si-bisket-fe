import { MediaQueries } from '@/common/themes/Limit'
import { Stack } from '@mui/material'
import { css } from '@emotion/react'

export const TitleThumbnail = () => (
  <Stack css={style.root}>
    <img src='/collection/img-door.png' css={style.image} />
  </Stack>
)

const style = {
  root: css`
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 186px;
    border-radius: 47% 47% 4% 4%;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    margin-bottom: 20px;

    @media ${MediaQueries.md} {
      width: 100px;
      height: 124px;
    }
  `,
  image: css`
    border-radius: 47% 47% 4% 4%;
    @media ${MediaQueries.md} {
      width: 86px;
      height: 109px;
    }
  `,
}
