import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { MediaQueries } from '@/common/themes/Limit'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'

export const ColumnTitle = () => {
  const { isTablet } = useCustomMediaQuery()

  return (
    <Stack>
      {isTablet ? (
        <Typography css={style.mobileTitle}>
          {
            '미술 수집의 미래에 앞장서는 BISKET 에서 세계 최고의 예술품을 거래해보세요.'
          }
        </Typography>
      ) : (
        <Typography css={style.title} variant='h3'>
          {'미술 수집의 미래에 앞장서는 BISKET 에서\n' +
            '세계 최고의 예술품을 거래해보세요.'}
        </Typography>
      )}

      <div css={style.divider}></div>

      {isTablet ? (
        <Typography css={style.mobileDescription} variant='subtitle2'>
          {'BISKET은 NFT 기술을 통해 아티스트들의 소유권과 저작권을 보호합니다. ' +
            '이는 아티스트들이 지속가능한 작업환경을 구축하는 토대가 됩니다. ' +
            "아트 플랫폼으로 시작한 BISKET의 목적지는 '예술의 대중화'입니다."}
        </Typography>
      ) : (
        <Typography css={style.description} variant='subtitle2'>
          {'BISKET은 NFT 기술을 통해 아티스트들의 소유권과 저작권을 보호합니다.\n' +
            '이는 아티스트들이 지속가능한 작업환경을 구축하는 토대가 됩니다.\n' +
            "아트 플랫폼으로 시작한 BISKET의 목적지는 '예술의 대중화'입니다."}
        </Typography>
      )}
    </Stack>
  )
}

const style = {
  title: css`
    font-weight: bold;
    line-height: 44px;

    @media ${MediaQueries.xl} {
      text-align: center;
    }
  `,
  mobileTitle: css`
    text-align: center;
    font-weight: bold;
    line-height: 28px;
    font-size: 24px;
  `,
  divider: css`
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin: 20px 0 30px 0;

    @media ${MediaQueries.xl} {
      margin: 20px 0;
    }
  `,
  description: css`
    line-height: 28px;

    @media ${MediaQueries.xl} {
      text-align: center;
    }
  `,
  mobileDescription: css`
    word-break: break-all;
  `,
}
