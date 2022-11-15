import { ImageCard } from '@/common/components/ImageCard'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

export const MoreSection = () => {
  return (
    <div css={style.root}>
      <div css={style.title}>
        <Typography variant={'h3'} fontWeight='bold'>
          {'More For You'}
        </Typography>
      </div>
      <div css={style.container}>
        <div css={style.wrapper}>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
  `,
  title: css`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 28px;
  `,
  container: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: indigo;
    margin-top: 28px;
  `,
  wrapper: css`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    display: flex;
    gap: 24px;
    padding-top: 40px;
    padding-bottom: 48px;
  `,
}
