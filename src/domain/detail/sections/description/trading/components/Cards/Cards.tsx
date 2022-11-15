import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

export const Cards = () => {
  return (
    <div css={style.root}>
      <div css={style.card}>
        <Typography variant='subtitle2'>
          @username_1 <span css={style.span}>bought from </span>@skymann{' '}
          <span css={style.span}>for $196</span>
        </Typography>
        <Typography variant='subtitle2' color={Colors.MediumDarkGrey}>
          {'6 Months ago'}
        </Typography>
      </div>
      <div css={style.card}>
        <Typography variant='subtitle2'>
          @username_1 transferred to @skymann for $196
        </Typography>
        <Typography variant='subtitle2' color={Colors.MediumDarkGrey}>
          {'6 days ago'}
        </Typography>
      </div>
      <div css={style.card}>
        <Typography variant='subtitle2'>
          listed by @skymann on Opensea
        </Typography>
        <Typography variant='subtitle2' color={Colors.MediumDarkGrey}>
          {'6 days ago'}
        </Typography>
      </div>
      <div css={style.card}>
        <Typography variant='subtitle2'>
          granted by @skymann on Opensea
        </Typography>
        <Typography variant='subtitle2' color={Colors.MediumDarkGrey}>
          {'6 hours ago'}
        </Typography>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  card: css`
    width: 100%;
    height: 86px;
    padding: 18px 20px;
    border-radius: 10px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px ${Colors.LightGray};
    background-color: white;
  `,

  span: css`
    font-weight: 300;
  `,
}
