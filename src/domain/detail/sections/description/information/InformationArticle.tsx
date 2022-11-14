import { Typography } from '@mui/material'
import { css } from '@emotion/react'

export const InformationArticle = () => {
  return (
    <div css={style.root}>
      <div css={style.wrapper}>
        <Typography fontWeight={'bold'} css={style.title}>
          {'Description'}
        </Typography>
        <Typography variant='subtitle2' fontWeight={300} lineHeight={1.63}>
          {
            'NFT (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다. NFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류) 이 원본임을 증명 할 수 있습니다.'
          }
        </Typography>
      </div>
      <div css={style.wrapper}>
        <Typography fontWeight={'bold'} css={style.title}>
          {'About Artist'}
        </Typography>
        <Typography variant='subtitle2' fontWeight={300} lineHeight={1.63}>
          {
            'NFT (Non-Fungible Token) 는 신개념 블록체인 기술을 활용하여 발행하는 대체 불가능 토큰입니다. NFT를 통해 위·변조가 쉬운 각종 무형자산 (디지털아트, 영상, 음악, 서류) 이 원본임을 증명 할 수 있습니다.'
          }
        </Typography>
      </div>
    </div>
  )
}

const style = {
  root: css`
    width: 100%;
    max-width: 1280px;
    padding: 0 102px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 48px;
  `,
  wrapper: css`
    width: 439px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  title: css`
    font-size: 24px;
  `,
}
