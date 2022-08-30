import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import {
  CardContainer,
  TitleContainer,
} from '@/domain/main/sections/curated/card'

export const CuratedArticle = () => (
  <article css={style.root}>
    <img
      css={style.image}
      src='/main/curated-background.png'
      alt=''
      width={1392}
      height={524}
    />
    <Stack css={style.container}>
      <TitleContainer />
      <CardContainer />
    </Stack>
  </article>
)

const style = {
  root: css`
    position: relative;
    height: 524px;
    margin-bottom: 24px;
    overflow: hidden;
    border-radius: 20px;
  `,
  image: css`
    position: absolute;
    filter: brightness(30%) blur(20px);
  `,
  container: css`
    position: absolute;
    margin-bottom: 24px;
    flex-direction: row;
    border-radius: 20px;
  `,
}
