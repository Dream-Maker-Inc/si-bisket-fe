import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'

export const InformationBuy = () => (
  <Stack css={style.root}>
    <Typography variant='subtitle2' fontWeight='bold'>
      Buy Now
    </Typography>
    <Typography variant='h3' css={style.cost}>
      1,000,000 WON
    </Typography>
  </Stack>
)

const style = {
  root: css`
    margin-top: 32px;

    @media ${MediaQueries.xl} {
      margin-top: 22px;
    }

    @media ${MediaQueries.md} {
      margin-top: 20px;
    }
  `,
  cost: css`
    font-weight: bold;
    margin-top: 6px;

    @media ${MediaQueries.md} {
      margin-top: 4px;
      font-size: 24px;
    }
  `,
}
