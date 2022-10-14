import { Typography } from '@mui/material'
import { css } from '@emotion/react'
import { NFTResultCard } from '@/domain/search/sections/resultContainer/nft/NFTResultCard'
import { MediaQueries } from '@/common/themes/Limit'

type NftResultsProps = {
  data: 'no' | 'err' | 'yes'
}

export const NftResults = ({ data }: NftResultsProps) => {
  switch (data) {
    case 'no':
      return (
        <Typography css={style.errorText} component='span'>
          Nothing found
        </Typography>
      )
    case 'err':
      return (
        <Typography css={style.errorText} component='span'>
          {'Oops, Something went wrong.\nPlease, try again.'}
        </Typography>
      )
    default:
      return (
        <div css={style.grid}>
          <NFTResultCard />
          <NFTResultCard />
          <NFTResultCard />
          <NFTResultCard />
          <NFTResultCard />
          <NFTResultCard />
          <NFTResultCard />
          <NFTResultCard />
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
    grid-template-columns: repeat(4, 1fr);
    column-gap: 50px;
    row-gap: 60px;
    margin-top: 100px;
    margin-bottom: 300px;

    @media ${MediaQueries.xxl} {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 32px;
      row-gap: 60px;
    }

    @media ${MediaQueries.xl} {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    @media ${MediaQueries.md} {
      margin-top: 60px;
      grid-template-columns: 1fr;
      gap: 36px;
    }
  `,
}
