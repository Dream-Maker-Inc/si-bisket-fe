import { css } from '@emotion/react'
import { CreditArticle } from './credit'
import { InformationArticle } from './information'
import { IntroductionArticle } from './introduction'
import { TagsArticle } from './tags'
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
      <div css={style.tagsRow}>
        <TagsArticle />
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 60px 0;
  `,
  row: css`
    width: 100%;
    display: flex;
    gap: 7.3%;
  `,
  tagsRow: css`
    display: flex;
    justify-content: end;
    margin-top: -80px;
  `,
}
