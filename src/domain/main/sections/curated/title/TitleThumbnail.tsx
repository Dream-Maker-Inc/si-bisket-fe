import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'

export const TitleThumbnail = () => (
  <Stack css={style.root}>
    <img src='/main/curated-collection.png' css={style.image} />
  </Stack>
)

const style = {
  root: css`
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 136px;
    border-radius: 47% 47% 4% 4%;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;

    @media ${MediaQueries.xxl} {
      width: 76px;
      height: 76px;
      border-radius: 10px;
    }

    @media ${MediaQueries.md} {
    }
  `,
  image: css`
    border-radius: 47% 47% 4% 4%;

    @media ${MediaQueries.xxl} {
      width: 66px;
      height: 66px;
      border-radius: 10px;
    }

    @media ${MediaQueries.md} {
    }
  `,
}
