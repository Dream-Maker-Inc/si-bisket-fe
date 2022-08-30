import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ProfileChip } from '@/common/components/ProfileChip'

export const TitleContainer = () => (
  <Stack css={style.root}>
    <img
      src='/main/curated-collection.png'
      alt='bisket'
      width={110}
      css={style.image}
    />
    <Stack>
      <Typography
        variant='h4'
        color='white'
        css={style.title}
        onClick={() => alert('클릭')}
      >
        Collection Name Of Collection
      </Typography>
      <Typography variant='body1' color='white' mt={0.5} mb={3}>
        4 NFTs
      </Typography>
      <ProfileChip image='/main/profile.png' text='@USERNAME' hoverEvent />
    </Stack>
  </Stack>
)

const style = {
  root: css`
    height: 524px;
    padding: 40px;
    justify-content: space-between;
  `,
  image: css`
    border-top-left-radius: 47%;
    border-top-right-radius: 47%;
  `,
  title: css`
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
}
