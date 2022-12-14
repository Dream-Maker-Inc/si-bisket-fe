import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import { ColumnTitle } from '@/domain/main/sections/column/ColumnTitle'
import { ColumnContent } from '@/domain/main/sections/column/ColumnContent'
import { MediaQueries } from '@/common/themes/Limit'

export const ColumnSection = () => (
  <Stack css={style.root}>
    <ColumnTitle />
    <ColumnContent />
  </Stack>
)

const style = {
  root: css`
    width: 100%;
    max-width: 1392px;
    margin: 200px auto 0;

    @media ${MediaQueries.xxl} {
      max-width: 1076px;
    }

    @media (max-width: 1100px) {
      padding: 40px;
    }

    @media ${MediaQueries.xl} {
      max-width: 100%;
      padding: 0 26px;
    }

    @media ${MediaQueries.md} {
      margin-top: 120px;
    }
  `,
}
