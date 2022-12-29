import Image from 'next/image'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { Colors } from '@/common/themes/Color'

export const ImageCard = () => {
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

const style = {
  card: css`
    flex: 1;
    max-width: 330px;
    aspect-ratio: 1/1.363;
    border: 1px solid transparent;
    border-radius: 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.07);
    text-align: center;
    @media ${`(max-width:1023px)`} {
      max-width: 446px;
      height: fit-content;
      aspect-ratio: unset;
    }
  `,

  image: css`
    width: 100%;
    height: 72%;
    position: relative;
    @media ${`(max-width:1023px)`} {
      height: unset;
      aspect-ratio: 1;
    }
  `,
  content: css`
    width: 100%;
    height: 28%;
    background-color: white;
    padding: 24px 24px 15px 24px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    @media ${`(max-width:1023px)`} {
      height: unset;
      aspect-ratio: 1/0.266;
      padding: 16px 24px;
    }
  `,

  owner: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  round: css`
    width: 30px;
    aspect-ratio: 1;
    background-color: #00ff9d;
    border-radius: 28px;
  `,
}
