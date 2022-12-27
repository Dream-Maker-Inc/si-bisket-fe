import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

export const AvatarChip = () => {
  return (
    <div css={style.chip}>
      <div css={style.round}></div>
      <Typography color='white'>{'@Username'}</Typography>
    </div>
  )
}

const style = {
  chip: css`
    position: relative;
    width: 153px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: ${Colors.BlackGrey};

    border-radius: 28px;
    padding: 8px 12px;
    margin-top: 28px;
    margin-bottom: 24px;
    z-index: 2;

    @media ${MediaQueries.md} {
      margin-top: 16px;
      margin-bottom: 36px;
    }
  `,
  round: css`
    width: 36px;
    height: 36px;
    border-radius: 28px;
    border: 1px solid #00ff9d;
    background-color: #00ff9d;
  `,
}
