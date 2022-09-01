import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ProfileChip } from '@/common/components/ProfileChip'
import { MediaQueries } from '@/common/themes/Limit'

export const TitleContainer = () => (
  <Stack css={style.root}>
    <Stack css={style.imageWrapper} onClick={() => alert('클릭')}>
      <img
        src='/main/curated-collection.png'
        alt='bisket'
        width={94}
        css={style.image}
      />
    </Stack>
    <Stack css={style.textWrapper}>
      <div>
        <Typography
          variant='h4'
          color='white'
          css={style.title}
          onClick={() => alert('클릭')}
        >
          Collection Name Of Collection
        </Typography>
        <Typography variant='body1' css={style.nft}>
          4 NFTs
        </Typography>
      </div>
      <ProfileChip image='/main/profile.png' text='@USERNAME' hoverEvent />
    </Stack>
  </Stack>
)

const style = {
  root: css`
    height: 524px;
    padding: 40px;
    justify-content: space-between;

    @media (${MediaQueries.xxl}) {
      flex-direction: row;
      justify-content: flex-start;
      height: 76px;
      margin: 40px 49px 16px 49px;
      padding: 0;
    }

    @media (${MediaQueries.xl}) {
      margin: 40px 26px 16px 29px;
    }
  `,
  imageWrapper: css`
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 136px;
    border-top-right-radius: 47%;
    border-top-left-radius: 47%;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;

    @media (${MediaQueries.xxl}) {
      width: 76px;
      height: 76px;
    }
  `,
  image: css`
    border-top-left-radius: 47%;
    border-top-right-radius: 47%;

    @media (${MediaQueries.xxl}) {
      width: 66px;
      height: 66px;
    }
  `,
  textWrapper: css`
    @media (${MediaQueries.xxl}) {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin-left: 24px;
    }
  `,
  title: css`
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    @media (${MediaQueries.xxl}) {
      font-size: 34px;
    }

    @media (${MediaQueries.xxl}) {
      font-size: 24px;
    }
  `,
  nft: css`
    color: white;
    margin-top: 4px;
    margin-bottom: 24px;

    @media (${MediaQueries.xxl}) {
      margin-top: 8px;
      margin-bottom: 0;
    }

    @media (${MediaQueries.xl}) {
      margin-top: 6px;
    }
  `,
}
