import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

type ProfileChipProps = {
  image: string
  text: string
  hoverEvent?: boolean
}

export const ProfileChip = ({ image, text, hoverEvent }: ProfileChipProps) => (
  <Stack css={hoverEvent ? style.hoverRoot : style.root}>
    <img src={image} alt='' width={36} height={36} />
    <Typography variant='subtitle2' ml={1}>
      {text}
    </Typography>
  </Stack>
)

const rootStyle = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 50px;
  padding: 8px;

  font-weight: bold;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
    transform: translateY(-2%);
    transition: 0.2s;
  }
`

const style = {
  root: css`
    ${rootStyle}
  `,
  hoverRoot: css`
    ${rootStyle};
    background-color: rgba(255, 255, 255, 0.3);
    color: white;

    transition: 0.2s;

    &:hover {
      background-color: white;
      color: black;
    }
  `,
}
