import { Typography } from '@mui/material'
import { css } from '@emotion/react'
import { Colors } from '@/common/themes/Color'
import { models } from './models/information.model'
import { MediaQueries } from '@/common/themes/Limit'

export const InformationArticle = () => {
  return (
    <div css={style.root}>
      <div css={style.wrapper}>
        <Typography fontWeight={'bold'} lineHeight={1} css={style.title}>
          {models.description.title}
        </Typography>
        <div css={style.hr}></div>
        <Typography variant='subtitle2' fontWeight={300} lineHeight={1.63}>
          {models.description.text}
        </Typography>
      </div>
      <div css={style.wrapper}>
        <Typography fontWeight={'bold'} lineHeight={1} css={style.title}>
          {models.about.title}
        </Typography>
        <div css={style.hr}></div>
        <Typography variant='subtitle2' fontWeight={300} lineHeight={1.63}>
          {models.about.text}
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
    gap: 48px;

    @media ${MediaQueries.md} {
      gap: 36px;
    }
  `,
  wrapper: css`
    width: 439px;
    display: flex;
    flex-direction: column;

    @media ${MediaQueries.xl} {
      width: 100%;
    }
  `,
  hr: css`
    width: 100%;
    height: 1px;
    background-color: ${Colors.ThinGrey};
    margin: 15.5px 0;
  `,

  title: css`
    font-size: 24px;
  `,
}
