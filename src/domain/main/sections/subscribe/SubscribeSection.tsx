import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import { SubscribeArticle } from '@/domain/main/sections/subscribe/SubscribeArticle'
import { SubscribeInput } from '@/domain/main/sections/subscribe/SubscribeInput'

export const SubscribeSection = () => (
  <Stack css={style.root}>
    <SubscribeArticle />
    <SubscribeInput />
  </Stack>
)

const style = {
  root: css`
    width: 100%;
    position: relative;
    margin: 100px auto 0;
  `,
}
