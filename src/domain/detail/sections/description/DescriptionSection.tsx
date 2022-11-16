import { MediaQueries } from '@/common/themes/Limit'
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
        <div css={style.innerRow}>
          <TradingArticle />
          <TagsArticle />
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1446px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 60px 23px;
  `,
  row: css`
    width: 100%;
    display: flex;
    gap: 7.3%;

    @media ${MediaQueries.xl} {
      flex-direction: column;
      gap: 60px;
    }
  `,

  innerRow: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 100px;
  `,
}
