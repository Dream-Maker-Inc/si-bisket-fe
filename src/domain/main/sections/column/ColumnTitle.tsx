import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

export const ColumnTitle = () => (
  <Stack>
    <Typography variant='h3' fontWeight='bold' lineHeight='44px'>
      {'미술 수집의 미래에 앞장서는 BISKET 에서\n' +
        '세계 최고의 예술품을 거래해보세요.'}
    </Typography>
    <div css={style.divider}></div>
    <Typography variant='subtitle2' lineHeight='28px'>
      {"'BISKET은 NFT 기술을 통해 아티스트들의 소유권과 저작권을 보호합니다.\n" +
        '이는 아티스트들이 지속가능한 작업환경을 구축하는 토대가 됩니다.\n' +
        "아트 플랫폼으로 시작한 BISKET의 목적지는 예술의 대중화입니다.'"}
    </Typography>
  </Stack>
)

const style = {
  divider: css`
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin: 20px 0 30px 0;
  `,
}
