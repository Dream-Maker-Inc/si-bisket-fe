import { css } from '@emotion/react'
import { Typography } from '@mui/material'

export const Login = () => {
  return (
    <div css={style.root}>
      <Typography lineHeight={1} color='black'>
        Login
      </Typography>
    </div>
  )
}

const style = {
  root: css`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: solid 0.5px black;
    cursor: pointer;
  `,
}
