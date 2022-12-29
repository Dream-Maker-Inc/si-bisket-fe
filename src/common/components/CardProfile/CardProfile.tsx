import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

type CardProfileProps = {
  avatar: string
  text: string
}

export const CardProfile = ({ avatar, text }: CardProfileProps) => (
  <Stack direction='row' css={style.root}>
    <img src={avatar} alt='' width={30} height={30} />
    <Typography variant='subtitle2' ml={1} fontWeight='bold'>
      {text}
    </Typography>
  </Stack>
)

const style = {
  root: css`
    margin: 18px 0 21px;
  `,
}
