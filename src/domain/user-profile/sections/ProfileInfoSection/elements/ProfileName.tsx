import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

type ProfileNameProps = {
  name: string
  verified?: boolean
}

export const ProfileName = ({ name, verified = false }: ProfileNameProps) => {
  return (
    <div css={style.root}>
      <div css={style.name}>
        <Typography css={style.nameText}>{name}</Typography>
        {verified && (
          <div css={style.mark}>
            <img src='/user-profile/icon-mark.svg' alt='marked' />
          </div>
        )}
      </div>
    </div>
  )
}

const style = {
  root: css``,
  name: css`
    width: fit-content;
    position: relative;
    @media ${MediaQueries.xs} {
      height: 34px;
      display: flex;
      align-items: flex-end;
    }
  `,
  nameText: css`
    font-size: 36px;
    font-weight: bold;
    letter-spacing: -0.72px;
    line-height: 1;
    @media ${MediaQueries.xs} {
      font-size: 28px;
    }
  `,
  mark: css`
    position: absolute;
    right: -20px;
    top: 0;
  `,
}
