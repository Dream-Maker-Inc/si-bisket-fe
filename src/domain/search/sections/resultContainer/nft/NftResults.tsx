import { Typography } from '@mui/material'
import { css } from '@emotion/react'
import { NFTResultCard } from '@/domain/search/sections/resultContainer/nft/NFTResultCard'

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
    gap: 50px;
    margin-top: 100px;
    margin-bottom: 300px;
  `,
}
