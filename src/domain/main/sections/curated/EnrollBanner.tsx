import { Button, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'

export const EnrollBanner = () => (
  <Stack css={style.root}>
    <Stack css={style.imageWrapper}>
      <img
        src='https://media.giphy.com/media/1zRfp0Jwsag4yPekP4/giphy.gif'
        css={style.image}
      />
    </Stack>
    <Stack css={style.wrapper}>
      <Typography css={style.bannerTitle} variant='h1'>
        Are you
      </Typography>
      <img src='/main/banner-text.svg' alt='' css={style.bannerText} />
      <Button variant='contained' css={style.button}>
        작가지원 하기
      </Button>
    </Stack>
  </Stack>
)

const lineStyle = css`
  position: absolute;
  width: 100%;
  height: 1px;
  border-bottom: 2px dashed white;
`

const style = {
  root: css`
    position: relative;
    align-items: center;
    justify-content: center;

    height: 500px;
  `,
  imageWrapper: css`
    position: absolute;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 500px;
    overflow: hidden;
  `,
  topLine: css`
    ${lineStyle};
    top: 3%;

    @media (${MediaQueries.xl}) {
      display: none;
    }
  `,
  bottomLine: css`
    ${lineStyle};
    bottom: 3%;

    @media (${MediaQueries.xl}) {
      display: none;
    }
  `,
  image: css`
    position: absolute;
    width: 100%;
  `,
  bannerTitle: css`
    color: white;
    font-weight: bold;

    @media (${MediaQueries.xl}) {
      font-size: 40px;
    }
  `,
  bannerText: css`
    margin-top: 20px;

    @media (${MediaQueries.xxl}) {
      margin-top: 20px;
      width: 1023px;
    }

    @media (${MediaQueries.xl}) {
      margin-top: 16px;
      width: 647px;
    }
  `,
  wrapper: css`
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  button: css`
    margin-top: 33px;
    border-radius: 40px;
    padding: 18px 46px;
    background-color: white;
    transition: 0.2s;
    color: black;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      background-color: white;
      transform: translateY(-3%);
      transition: 0.2s;
      z-index: 999;
    }

    @media (${MediaQueries.xl}) {
      height: 50px;
      margin-top: 36px;
      font-size: 16px;
    }
  `,
}
