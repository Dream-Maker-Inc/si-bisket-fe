import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { TitleThumbnail } from '@/domain/main/sections/curated/title/TitleThumbnail'
import { TitleInformation } from '@/domain/main/sections/curated/title/TitleInformation'

export const TitleContainer = () => (
  <Stack css={style.root}>
    <TitleThumbnail />
    <TitleInformation />
  </Stack>
)

const style = {
  root: css`
    height: 524px;
    padding: 40px;
    justify-content: space-between;

    @media (${MediaQueries.xxl}) {
      flex-direction: row;
      justify-content: flex-start;
      height: 76px;
      margin: 40px 49px 16px 49px;
      padding: 0;
    }

    @media (${MediaQueries.xl}) {
      margin: 40px 26px 16px 29px;
    }
  `,
}
