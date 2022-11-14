import { css } from '@emotion/react'
import { Typography } from '@mui/material'

type ChipProps = {
  iconSrc: string
  text: string
  count: string
}

export const Chip = ({ iconSrc, text, count }: ChipProps) => {
  return (
    <div css={style.chip}>
      <img src={iconSrc} alt='icon' css={style.icon} />
      <div css={style.chipTextWrapper}>
        <Typography fontWeight={600} variant='caption'>
          {text}
        </Typography>
        <Typography fontWeight={600} variant='caption'>
          {count}
        </Typography>
      </div>
    </div>
  )
}

const style = {
  chip: css`
    width: 125px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  icon: css`
    width: 18px;
    aspect-ratio: 1;
  `,
  chipTextWrapper: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
}
