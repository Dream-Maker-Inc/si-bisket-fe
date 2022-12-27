import { AvatarChip } from '@/common/components/AvatarChip'
import { ProfileChip } from '@/common/components/ProfileChip'
import { MediaQueries } from '@/common/themes/Limit'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { EditCollection } from './components/EditCollection'
import { TitleThumbnail } from './components/Thumbnail'

type BannersectionProps = {
  isCollector: boolean
}

export const BannerSection = ({ isCollector }: BannersectionProps) => {
  return (
    <div css={style.root}>
      <TitleThumbnail />
      <Typography css={style.Title}>
        NFT is a new type of blockchain technology <br />
        that proves the ownership of digital art.
      </Typography>
      <Typography css={style.responsiveTitle}>
        The Name of Collections
      </Typography>
      <Typography css={style.subTitle}>
        Nft (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는
        대체 불가능 토큰입니다. <br />
        Nft를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)
        이 원본임을 증명 할 수 있습니다. Nft (Non-Fungible Token) <br />는
        신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다. <br />
        Nft를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)
        이 원본임을 증명 할 수 있습니다.
      </Typography>
      <Typography css={style.responsiveSubTitle}>
        Nft (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는
        대체 불가능 토큰입니다. <br />
        NFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)
        이 원본임을 증명 할 수 있습니다. Nft (Non-
        {/* <br /> */}
        Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능
        토큰입니다. <br />
        Nft를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)
        이 원본임을 증명 할 수 있습니다.
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
    font-size: 52px;
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
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: -0.36px;
    color: white;
    margin: 20px 0 28px 0;
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
