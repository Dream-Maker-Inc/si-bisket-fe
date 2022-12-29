import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

type ProfileDescriptionProps = {
  desc: string
}

export const ProfileDescription = ({ desc }: ProfileDescriptionProps) => {
  return (
    <Typography color='#505050' css={style.desc}>
      {desc}
    </Typography>
  )
}

const style = {
  desc: css`
    width: 696px;
    font-size: 16px;
    line-height: 1.63;
    letter-spacing: -0.32px;
    margin-top: 20px;

    @media ${`(max-width:696px)`} {
      width: 100%;
    }
  `,
}
