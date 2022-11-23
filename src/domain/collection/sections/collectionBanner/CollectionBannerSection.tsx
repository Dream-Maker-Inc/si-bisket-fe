import { TitleThumbnail } from '@/domain/collection/sections/collectionBanner/components/TitleThumbnail'
import { Colors } from '@/common/themes/Color'
import { MediaQueries } from '@/common/themes/Limit'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import Image from 'next/image'

export const CollectionBannerSection = () => {
  const models = {
    title: 'The Name Of\nCollections',
    mobileTitle: 'The Name Of Collections',
    caption: 'Collection Subtitle',
    desc: 'NFT (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.\nNFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류) 이 원본임을 증명 할 수 있습니다.  NFT (Non-\nFungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.\nNFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류) 이 원본임을 증명 할 수 있습니다.',
    mobileDesc:
      'NFT (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다. NFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류) 이 원본임을 증명 할 수 있습니다.  NFT (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다. NFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류) 이 원본임을 증명 할 수 있습니다.',
  }

  const { isMobile, isTablet } = useCustomMediaQuery()
  return (
    <div css={style.root}>
      <div css={style.container}>
        <Image
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          src={'/main/column-image.jpg'}
          alt='img'
        />
        <div css={style.opacity}></div>
        <div css={style.text}>
          <TitleThumbnail />
          <Typography color='white' fontWeight={'bold'} css={style.title}>
            {isTablet ? models.mobileTitle : models.title}
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
          <Typography color='white' css={style.desc}>
            {isMobile ? models.mobileDesc : models.desc}
          </Typography>
        </div>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    height: 853px;
    position: relative;

    @media ${MediaQueries.md} {
      height: 753px;
    }
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    text-align: center;
    padding-bottom: 80px;

    @media ${MediaQueries.md} {
      padding-bottom: 72px;
    }
  `,
  opacity: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  `,
  text: css`
    width: 100%;
    padding: 0 23px;
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
    height: 167px;
    @media ${MediaQueries.md} {
      font-size: 24px;
      line-height: 28px;
      height: unset;
      margin-bottom: 4px;
    }
  `,
  caption: css`
    font-size: 24px;
    @media ${MediaQueries.md} {
      font-size: 16px;
      line-height: 18px;
    }
  `,

  desc: css`
    font-size: 18px;
    line-height: 1.56;
    @media ${MediaQueries.md} {
      font-size: 16px;
      line-height: 1.5;
      width: 100%;
      text-align: justify;
    }
  `,
  chip: css`
    position: relative;
    width: 153px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: ${Colors.BlackGrey};

    border-radius: 28px;
    padding: 8px 12px;
    margin-top: 28px;
    margin-bottom: 24px;
    z-index: 2;

    @media ${MediaQueries.md} {
      margin-top: 16px;
      margin-bottom: 36px;
    }
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
