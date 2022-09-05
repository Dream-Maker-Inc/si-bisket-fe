import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ColumnTitle } from '@/domain/main/sections/column/ColumnTitle'

export const ColumnSection = () => (
  <Stack css={style.root}>
    <ColumnTitle />

    <Stack direction='row' mt={6.5}>
      <img src='/main/column-image.jpg' alt='' css={style.image} />
      <Stack ml={18.25}>
        <Stack>
          <Stack direction='row'>
            <Typography css={style.number}>01</Typography>
            <Typography fontSize={24} css={style.title} fontWeight='bold'>
              What is NFT?
            </Typography>
          </Stack>
          <div css={style.divider}></div>
          <Typography variant='subtitle2' css={style.content}>
            {'NFT (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다.' +
              'NFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류)이 원본임을 증명 할 수 있습니다.'}
          </Typography>
        </Stack>
        <Stack css={style.container}>
          <Stack direction='row'>
            <Typography css={style.number}>02</Typography>
            <Typography fontSize={24} css={style.title} fontWeight='bold'>
              For Artist
            </Typography>
          </Stack>
          <div css={style.divider}></div>
          <Typography variant='subtitle2' css={style.content}>
            {'BISKET의 합리적인 판매 수수료 정책은 그 자체로 아티스트들에 대한 응원이 됩니다.' +
              '또한 BISKET은 모든 디바이스를 지원하는 메타버스 갤러리 전시를 통해 작가의 작품을 적극적으로 홍보합니다.' +
              '시공의 제약을 뛰어넘는 갤러리를 구축함으로서 BISKET은 예술의 대중화에 기여합니다.'}
          </Typography>
        </Stack>
        <Stack css={style.container}>
          <Stack direction='row'>
            <Typography css={style.number}>03</Typography>
            <Typography fontSize={24} css={style.title} fontWeight='bold'>
              For Collector
            </Typography>
          </Stack>
          <div css={style.divider}></div>
          <Typography variant='subtitle2' css={style.content}>
            {'BISKET은 신용카드 결제 방식을 도입하여 NFT 아트에 대한 콜렉터들의 접근성을 높였습니다.' +
              '또한 에디션 판매 방식 도입으로 누구나 콜렉터가 될 수 있는 여건을 조성했습니다.' +
              '앞으로도 BISKET은 무한한 잠재력을 지닌 작가들을 발굴하여 콜렉터들에게 Contemporary fina art 시장의 불루칩을 선물할 것입니다.'}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
)

const style = {
  root: css`
    width: 100%;
    max-width: 1392px;
    margin: 0 auto;
  `,
  image: css`
    width: 562px;
    height: 618px;
    border-radius: 20px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.16);
  `,
  divider: css`
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background-color: #ddd;
  `,
  container: css`
    margin-top: 50px;
  `,
  number: css`
    width: 230px;
    font-size: 24px;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
  `,
  content: css`
    margin-left: 230px;
    word-break: break-all;
    text-align: justify;
  `,
}
