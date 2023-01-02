import { Typography } from '@mui/material'
import { css } from '@emotion/react'

type NeighborCountersProps = {
  followers: number
  following: number
}

export const NeighborCounters = ({
  followers,
  following,
}: NeighborCountersProps) => {
  return (
    <div css={style.followerWrapper}>
      <Typography css={style.bold}>{followers} Followers</Typography>
      <Typography css={style.bold}>{following} Following</Typography>
    </div>
  )
}

const style = {
  followerWrapper: css`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 16px;

    @media ${`(max-width:854px)`} {
      margin-top: 17px;
    }
  `,
  bold: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: -0.36px;
  `,
}
