import { Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ArtistResultCard } from '@/domain/search/sections/resultContainer/artist/ArtistResultCard'
import { MediaQueries } from '@/common/themes/Limit'

type ArtistResultsProps = {
  data: 'no' | 'err' | 'yes'
}

export const ArtistResults = ({ data }: ArtistResultsProps) => {
  switch (data) {
    case 'no':
      return <Typography css={style.errorText}>Nothing found</Typography>
    case 'err':
      return (
        <Typography css={style.errorText}>
          {'Oops, Something went wrong.\nPlease, try again.'}
        </Typography>
      )
    default:
      return (
        <div css={style.grid}>
          <ArtistResultCard />
          <ArtistResultCard />
          <ArtistResultCard />
          <ArtistResultCard />
          <ArtistResultCard />
          <ArtistResultCard />
        </div>
      )
  }
}

const style = {
  errorText: css`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 100px 0;
  `,
  grid: css`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 80px;
    row-gap: 60px;
    margin: 100px auto 300px;

    @media ${MediaQueries.xxl} {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      row-gap: 60px;
    }

    @media ${MediaQueries.xl} {
      grid-template-columns: 1fr 1fr;
      column-gap: 16px;
      row-gap: 36px;
    }

    @media ${MediaQueries.md} {
      grid-template-columns: 1fr;
      row-gap: 36px;
      margin-top: 68px;
    }

    & > div {
      width: 100%;
    }
  `,
}
