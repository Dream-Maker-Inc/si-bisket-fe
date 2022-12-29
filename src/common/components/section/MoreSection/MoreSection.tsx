import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { MoreImageCard } from '../../card/MoreImageCard'

export const MoreSection = () => {
  return (
    <div css={style.root}>
      <div css={style.header}>
        <Typography css={style.title} fontWeight='bold'>
          {'More For You'}
        </Typography>
      </div>
      <div css={style.container}>
        <div css={style.background}>
          <div css={style.image}>
            <Image layout='fill' src={'/more/bg-flower.png'} alt='image' />
          </div>
          <div css={style.opacity}></div>
        </div>
        <div css={style.imageContainer}>
          <div css={style.wrapper}>
            <MoreImageCard />
            <MoreImageCard />
            <MoreImageCard />
            <MoreImageCard />
          </div>
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
  `,
  header: css`
    width: 100%;
    max-width: 1446px;
    padding: 0 23px;
    margin: 0 auto;
    margin-bottom: 28px;

    @media ${MediaQueries.xl} {
      margin-bottom: 24px;
    }
  `,

  title: css`
    font-size: 36px;
    line-height: 34px;
    @media ${MediaQueries.xl} {
      font-size: 24px;
      line-height: 28px;
    }
  `,
  container: css`
    width: 100%;
    height: 538px;
    margin-top: 28px;
    position: relative;
    overflow-y: hidden;
  `,
  background: css`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  `,
  image: css`
    position: relative;
    width: 100%;
    height: 100%;
    filter: blur(30px);
  `,
  opacity: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  `,
  imageContainer: css`
    width: 100%;
    height: fit-content;
    position: relative;
    z-index: 99;
    padding-top: 40px;
    padding-bottom: 48px;
    margin: 0 auto;
    overflow-x: scroll;

    scroll-snap-type: x mandatory;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1400px) {
      justify-content: start;
    }
  `,
  wrapper: css`
    width: 1446px;
    display: flex;
    gap: 24px;
    padding: 0 23px;
  `,
}
