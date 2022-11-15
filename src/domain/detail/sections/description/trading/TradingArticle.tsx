import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { Cards } from './components/Cards'

export const TradingArticle = () => {
  return (
    <div css={style.root}>
      <Typography css={style.title} fontWeight={600}>
        {'Trading History'}
      </Typography>
      <Cards />
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

  title: css`
    font-size: 24px;
  `,
  container: css``,
}
