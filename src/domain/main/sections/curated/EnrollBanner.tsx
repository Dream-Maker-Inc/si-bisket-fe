import { Button, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

export const EnrollBanner = () => (
  <Stack css={style.root}>
    <Stack css={style.videoWrapper}>
      <video autoPlay muted loop css={style.video}>
        <source src='/main/video.mp4' />
      </video>
      <div css={style.topLine} />
      <div css={style.bottomLine} />
    </Stack>
    <Stack css={style.wrapper}>
      <Typography variant='h1' color='white' fontWeight='bold'>
        Are you
      </Typography>
      <img src='/main/banner-text.svg' alt='' style={{ marginTop: 20 }} />
      <Button variant='contained' css={style.button}>
        <Typography variant='subtitle1' color='black' fontWeight='bold'>
          작가지원 하기
        </Typography>
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
  videoWrapper: css`
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
  `,
  bottomLine: css`
    ${lineStyle};
    bottom: 3%;
  `,
  video: css`
    position: absolute;
    width: 100%;
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

    &:hover {
      background-color: white;
      transform: translateY(-3%);
      transition: 0.2s;
      z-index: 999;
    }
  `,
}
