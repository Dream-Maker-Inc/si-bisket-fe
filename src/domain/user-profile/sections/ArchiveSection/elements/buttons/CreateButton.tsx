import { Button } from '@mui/material'
import { css } from '@emotion/react'

export const CreateButton = () => {
  return <Button css={style.button}>Create</Button>
}

const style = {
  button: css`
    width: 95px;
    height: 36px;
    border-radius: 10px;
    border: solid 1px #e6e6e6;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
  `,
}
