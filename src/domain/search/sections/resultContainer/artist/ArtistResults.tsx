import { Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ArtistResultCard } from '@/domain/search/sections/resultContainer/artist/ArtistResultCard'

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
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
    margin-top: 100px;
    margin-bottom: 300px;
  `,
}
