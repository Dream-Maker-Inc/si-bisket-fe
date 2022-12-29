import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { AvatarChip } from './components/AvatarChip'
import { EditCollection } from './components/EditCollection'
import { TitleThumbnail } from './components/Thumbnail'

type BannersectionProps = {
  isCollector: boolean
}

export const BannerSection = ({ isCollector }: BannersectionProps) => {
  const models = {
    title: 'The Name of Collections',
    responsiveTitle: 'The Name of Collections',
    subtitle:
      ' Nft (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.\nNft를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)이 원본임을 증명 할 수 있습니다. Nft (Non-Fungible Token)\n는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.\nNft를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)이 원본임을 증명 할 수 있습니다.',
    responsiveSubTitle:
      'Nft (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.\nNFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)이 원본임을 증명 할 수 있습니다. Nft (Non- Fungible Token)는 신개념블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.\nNft를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)이 원본임을 증명 할 수 있습니다.',
  }

  return (
    <div css={style.root}>
      <TitleThumbnail />
      <Typography css={style.Title}>{models.title}</Typography>
      <Typography css={style.responsiveTitle}>
        {models.responsiveTitle}
      </Typography>
      <Typography css={style.subTitle}>{models.subtitle}</Typography>
      <Typography css={style.responsiveSubTitle}>
        {models.responsiveSubTitle}
      </Typography>
      {isCollector ? <AvatarChip /> : <EditCollection />}
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1446px;

    @media ${MediaQueries.md} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
  chip: css`
    width: 213px;
    height: 112px;
  `,
  Title: css`
    font-size: 76px;
    font-weight: bold;
    color: white;
    line-height: 1;
    letter-spacing: -1.04px;
    @media ${MediaQueries.xl} {
      display: none;
    }
  `,
  responsiveTitle: css`
    display: none;
    font-size: 56px;
    font-weight: bold;
    color: white;
    line-height: 1;
    @media ${MediaQueries.xl} {
      display: block;
    }
    @media ${MediaQueries.md} {
      font-size: 28px;
      text-align: center;
      margin-top: 16px;
    }
    @media ${MediaQueries.xs} {
      letter-spacing: -0.56px;
    }
  `,
  subTitle: css`
    width: 920px;
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: -0.36px;
    color: white;
    margin: 20px 0 28px 0;
    word-break: break-all;
    @media ${MediaQueries.xl} {
      display: none;
    }
    @media ${MediaQueries.xs} {
      margin-bottom: 20px;
    }
  `,
  responsiveSubTitle: css`
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: -0.36px;
    color: white;
    margin: 20px 0 28px 0;
    display: none;
    word-break: break-all;
    @media ${MediaQueries.xl} {
      display: block;
    }
    @media ${MediaQueries.md} {
      text-align: center;
      font-size: 16px;
      letter-spacing: -0.32px;
    }
  `,
}
