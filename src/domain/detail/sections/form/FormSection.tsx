import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import Image from 'next/image'

export const FormSection = () => {
  return (
    <div css={style.root}>
      <div css={style.title}>
        <Typography variant='h3' fontWeight='bold'>
          {'More From @artistname'}
        </Typography>
      </div>
      <div css={style.container}>
        <div css={style.wrapper}>
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
    max-width: 1280px;
    padding: 0 102px;
    margin: 0 auto;
  `,

  container: css`
    width: 100%;
    max-height: 543px;
    aspect-ratio: 1/0.424;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: indigo;
    margin-top: 28px;
  `,
  wrapper: css`
    width: 100%;
    height: 100%;
    max-width: 1280px;
    padding: 40px 102px;
    display: flex;
    gap: 43px;
  `,

  card: css`
    flex: 1;
    border: 1px solid transparent;
    border-radius: 10px;
    overflow: hidden;
  `,

  image: css`
    width: 100%;
    height: 68%;
    position: relative;
  `,
  content: css`
    width: 100%;
    height: 32%;
    background-color: white;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  owner: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  round: css`
    width: 30px;
    aspect-ratio: 1;
    background-color: ${Colors.HeightlightGreen};
    border-radius: 28px;
  `,
}

const ImageCard = () => {
  return (
    <div css={style.card}>
      <div css={style.image}>
        <Image layout='fill' src={'/detail/form/form-flower.png'} alt='img' />
      </div>
      <div css={style.content}>
        <div css={style.owner}>
          <div css={style.round}></div>
          <Typography fontWeight={600}>{'@ARTISTDA'}</Typography>
        </div>
        <div>
          <Typography variant='caption' color={Colors.DarkGrey}>
            {'Buy Now'}
          </Typography>
          <Typography variant='subtitle1' fontWeight={600} lineHeight={1}>
            {'1,000,000 won'}
          </Typography>
        </div>
      </div>
    </div>
  )
}
