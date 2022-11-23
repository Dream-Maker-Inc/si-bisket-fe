import { css } from '@emotion/react'
import { Typography } from '@mui/material'

type LoginProps = {
  onColorChanged: boolean
}

export const Login = ({ onColorChanged }: LoginProps) => {
  return (
    <div css={style.root(onColorChanged)}>
      <Typography lineHeight={1} color={onColorChanged ? 'white' : 'black'}>
        Login
      </Typography>
    </div>
  )
}

const style = {
  root: (onColorChanged: boolean) => css`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: ${onColorChanged ? 'solid 0.5px white' : 'solid 0.5px black'};
    cursor: pointer;
  `,
}
