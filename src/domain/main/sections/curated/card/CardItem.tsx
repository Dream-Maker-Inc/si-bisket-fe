import { Stack, Typography } from '@mui/material'
import { CardProfile } from '@/common/components/CardProfile'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'

export const CardItem = () => (
  <Stack css={style.card}>
    <Stack style={{ padding: 0 }}>
      <img
        width={310}
        height={316}
        src='/main/curated-list-thumbnail.png'
        alt=''
        css={style.image}
      />
      <Stack pl={3}>
        <CardProfile avatar='/main/profile.png' text='@ARTISTDA' />
        <Typography variant='caption' color='#666' fontWeight='bold'>
          Buy Now
        </Typography>
        <Typography variant='subtitle1' fontWeight='bold' mt={0.25} mb={2.25}>
          1,000,000 WON
        </Typography>
      </Stack>
    </Stack>
  </Stack>
)

const style = {
  card: css`
    background-color: white;
    border-radius: 16px;
    border: none;

    @media (${MediaQueries.md}) {
      width: 100%;
    }
  `,
  image: css`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media (${MediaQueries.md}) {
      width: 100%;
    }
  `,
}
