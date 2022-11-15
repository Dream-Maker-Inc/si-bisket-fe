import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import Image from 'next/image'

export const CollectionBannerSection = () => {
  const models = {
    title: 'the name of\ncollections',
    mobileTitle: 'the name of collections',
    caption: 'Collection Subtitle',
    desc: 'NFT (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.\nNFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류) 이 원본임을 증명 할 수 있습니다.  NFT (Non-\nFungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.\nNFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류) 이 원본임을 증명 할 수 있습니다.',
  }
  return (
    <div css={style.root}>
      <div css={style.image}>
        <Image layout='fill' src={'/main/column-image.jpg'} alt='img' />
        <div css={style.opacity}></div>
        <div css={style.text}>
          <Typography
            color='white'
            fontWeight={'bold'}
            css={style.title}
            mb={1}
          >
            {models.title}
          </Typography>
          <Typography
            color='white'
            fontWeight={300}
            lineHeight={1.17}
            fontStyle='italic'
            css={style.caption}
          >
            {models.caption}
          </Typography>
          <AvatarChip />
          <Typography variant='subtitle1' color='white' lineHeight={1.56}>
            {models.desc}
          </Typography>
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    aspect-ratio: 1/0.442;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  image: css`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `,
  opacity: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  `,
  text: css`
    width: 100%;
    position: relative;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-size: 76px;
    line-height: 1;
  `,
  caption: css`
    font-size: 24px;
    line-height: 28px;
  `,
  chip: css`
    width: 153px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 28px;
    padding: 8px 12px;
    margin-top: 28px;
    margin-bottom: 24px;
  `,
  round: css`
    width: 36px;
    height: 36px;
    border-radius: 28px;
    border: 1px solid #00ff9d;
    background-color: #00ff9d;
  `,
}

const AvatarChip = () => {
  return (
    <div css={style.chip}>
      <div css={style.round}></div>
      <Typography color='white'>{'@Username'}</Typography>
    </div>
  )
}