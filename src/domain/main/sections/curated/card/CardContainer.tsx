import { Stack } from '@mui/material'
import { CardItem } from '@/domain/main/sections/curated/card/CardItem'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'

export const CardContainer = () => (
  <Stack css={style.root}>
    <CardItem />
    <CardItem />
    <CardItem />
  </Stack>
)

const style = {
  root: css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
    height: 524px;
    gap: 24px;

    @media ${MediaQueries.xxl} {
      width: 100%;
      max-width: 1076px;
      justify-content: space-between;
      padding: 0 49px;
      height: auto;
    }

    @media (max-width: 1100px) {
      overflow: auto;
    }

    @media ${MediaQueries.xl} {
      overflow: auto;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 29px;
      scroll-padding-right: 29px;
      max-width: 1076px;
      padding: 0 29px;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    @media ${MediaQueries.md} {
      overflow: auto;
      scroll-snap-type: x mandatory;
      scroll-padding-left: 29px;
      scroll-padding-right: 29px;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  `,
}
