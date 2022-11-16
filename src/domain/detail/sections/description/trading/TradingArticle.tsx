import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { models } from './models/trading.model'

export const TradingArticle = () => {
  return (
    <div css={style.root}>
      <Typography css={style.title} fontWeight={600}>
        {'Trading History'}
      </Typography>
      <div css={style.titleHr}></div>

      <HistoryLine
        sender={models[0].sender}
        receiver={models[0].receiver}
        date={models[0].date}
      />
      <div css={style.hr}></div>
      <HistoryLine
        sender={models[0].sender}
        receiver={models[0].receiver}
        date={models[0].date}
      />
    </div>
  )
}

const HistoryLine = ({ sender, receiver, date }: HistoryLineProps) => {
  return (
    <div css={style.line}>
      <Typography variant='subtitle2' lineHeight={1.3} fontWeight={600}>
        {receiver}
        <span css={style.span}> bought from </span>
        {sender}
        <span css={style.span}> for $196</span>
      </Typography>
      <Typography
        variant='subtitle2'
        fontWeight={600}
        color={Colors.MediumDarkGrey}
      >
        {date}
      </Typography>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    height: fit-content;
    padding: 24px;
    border-radius: 10px;
    border: solid 1px ${Colors.ThinGrey};
    background-color: white;

    @media ${MediaQueries.md} {
      margin-top: 40px;
    }
  `,

  title: css`
    font-size: 24px;
  `,
  titleHr: css`
    width: 100%;
    height: 1px;
    background-color: ${Colors.ThinGrey};
    margin: 15.5px 0 23.5px;
  `,
  hr: css`
    width: 100%;
    height: 1px;
    background-color: ${Colors.ThinGrey};
    margin: 15.5px 0;
  `,
  line: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${MediaQueries.md} {
      flex-direction: column;
      align-items: start;
      gap: 8px;
    }
  `,

  span: css`
    font-weight: 300;
  `,
}

type HistoryLineProps = {
  sender: string
  receiver: string
  date: string
}
