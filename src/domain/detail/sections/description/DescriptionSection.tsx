import { css } from '@emotion/react'
import { CreditArticle } from './credit'
import { InformationArticle } from './information'
import { IntroductionArticle } from './introduction'
import { TradingArticle } from './trading'

export const DescriptionSection = () => {
  return (
    <div css={style.root}>
      <div css={style.row}>
        <IntroductionArticle />
        <CreditArticle />
      </div>
      <div css={style.row}>
        <InformationArticle />
        <TradingArticle />
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    padding: 64px 120px;

    display: flex;
    flex-direction: column;
    gap: 125px;
  `,
  row: css`
    width: 100%;
    display: flex;
    gap: 16px;
  `,
}
