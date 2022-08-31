import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { CuratedArticle } from '@/domain/main/sections/curated/CuratedArticle'
import { EnrollBanner } from '@/domain/main/sections/curated/EnrollBanner'
import { MediaQueries } from '@/common/themes/Limit'

export const CuratedSection = () => (
  <section>
    <article css={style.root}>
      <Typography variant='h4' fontWeight='bold' mb={3}>
        Curated collections
      </Typography>

      <CuratedArticle />
      <CuratedArticle />
      <CuratedArticle />
    </article>

    <EnrollBanner />

    <article css={style.root}>
      <CuratedArticle />
      <CuratedArticle />
    </article>
  </section>
)

const style = {
  root: css`
    width: 100%;
    max-width: 1392px;
    margin: 100px auto;

    @media (${MediaQueries.xxl}) {
      max-width: 1076px;
    }
  `,
}
