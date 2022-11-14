import { css } from '@emotion/react'
import { CreditArticle } from './credit'
import { InformationArticle } from './information'
import { IntroductionArticle } from './introduction'
import { TradingArticle } from './trading'

export const DescriptionSection = () => {
  return (
    <div css={style.root}>
      <IntroductionArticle />
      <CreditArticle />
      <div>
        <InformationArticle />
        <TradingArticle />
      </div>
    </div>
  )
}

const style = {
  root: css``,
}
