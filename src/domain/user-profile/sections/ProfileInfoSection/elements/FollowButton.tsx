import { css } from '@emotion/react'
import { Button } from '@mui/material'

export const FollowButton = () => {
  return (
    <Button variant='outlined' css={style.followButton}>
      Follow
    </Button>
  )
}

const style = {
  followButton: css`
    width: 96px;
    height: 35px;
    border-radius: 17.5px;
    font-weight: 600;
    &:hover {
      border: 2px solid black;
      background-color: white;
      box-shadow: none;
    }
  `,
}
