import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import { SubscribeArticle } from '@/domain/main/sections/subscribe/SubscribeArticle'

export const SubscribeSection = () => (
  <Stack css={style.root}>
    <SubscribeArticle />

    <Stack>
      <img src='/main/subscribe.png' alt='' css={style.image} />
    </Stack>
  </Stack>
)

const style = {
  root: css`
    width: 100%;
    position: relative;
    margin: 100px auto 0;
  `,
  image: css`
    width: 254px;
    height: 314px;
    margin: 200px auto 18px;
  `,
}
