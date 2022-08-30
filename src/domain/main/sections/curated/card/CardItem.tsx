import { Stack, Typography } from '@mui/material'
import { CardProfile } from '@/common/components/CardProfile'
import { css } from '@emotion/react'

export const CardItem = () => (
  <Stack css={style.card}>
    <Stack style={{ padding: 0 }}>
      <img
        width={310}
        height={316}
        src='/main/curated-list-thumbnail.png'
        alt=''
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
    margin: 0 12px;
    border-radius: 16px;
    border: none;
  `,
}
