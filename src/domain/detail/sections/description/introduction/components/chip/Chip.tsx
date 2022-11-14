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
      <img src={iconSrc} alt='icon' />
      <div css={style.chipTextWrapper}>
        <Typography fontWeight={600}>{text}</Typography>
        <Typography fontWeight={600}>{count}</Typography>
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
  chipTextWrapper: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
}
