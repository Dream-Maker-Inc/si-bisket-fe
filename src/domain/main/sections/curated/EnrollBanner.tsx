import { Button, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

export const EnrollBanner = () => (
  <Stack css={style.root}>
    <Typography variant='h1' color='white' fontWeight='bold'>
      Are you
    </Typography>
    <Typography variant='h1' color='white'>
      artist or collector?
    </Typography>
    <Button variant='contained' color='secondary' css={style.button}>
      작가지원 하기
    </Button>
  </Stack>
)

const style = {
  root: css`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-color: #333;
  `,
  button: css`
    margin-top: 20px;
    border-radius: 30px;
    padding: 10px 20px;
  `,
}
