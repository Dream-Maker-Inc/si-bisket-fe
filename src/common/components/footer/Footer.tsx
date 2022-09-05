import { IconButton, Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'
import Link from 'next/link'
import { MediaQueries } from '@/common/themes/Limit'

export const Footer = () => (
  <footer css={style.root}>
    <Stack css={style.logoRoot}>
      <img src='/logo-white.svg' alt='' />
      <Stack direction='row'>
        <IconButton>
          <img src='/twitter.svg' alt='' />
        </IconButton>
        <IconButton>
          <img src='/instagram.svg' alt='' />
        </IconButton>
        <IconButton>
          <img src='/youtube.svg' alt='' />
        </IconButton>
      </Stack>
    </Stack>
    <Stack css={style.menuRoot}>
      <Stack css={style.menu}>
        <Link href='/'>
          <Typography variant='subtitle2'>Privacy Policy</Typography>
        </Link>
        <Link href='/'>
          <Typography variant='subtitle2'>Terms of Service</Typography>
        </Link>
        <Link href='/'>
          <Typography variant='subtitle2'>Support</Typography>
        </Link>
      </Stack>
      <Stack css={style.info}>
        <Typography variant='subtitle2'>주식회사 미피랩스</Typography>
        <Typography variant='subtitle2'>대표자 : Phillip, Lee</Typography>
        <Typography variant='subtitle2'>
          서울특별시 강남구 영동대로 511, 29층
        </Typography>
        <Typography variant='subtitle2'>(삼성동 트레이드타워)</Typography>
        <Typography variant='subtitle2'>
          사업자 등록번호 761-88-01908
        </Typography>
        <Typography variant='subtitle2'>연락처: 070-8899-3000</Typography>
      </Stack>
    </Stack>
  </footer>
)

const style = {
  root: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    background-color: black;
  `,
  logoRoot: css`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1392px;

    @media (${MediaQueries.xl}) {
      max-width: 1076px;
    }
  `,
  menuRoot: css`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1392px;
    margin-top: 34px;
  `,
  menu: css`
    flex-direction: column;

    h6 {
      cursor: pointer;
      color: #d3d3d3;
    }
  `,
  info: css`
    flex-direction: column;

    h6 {
      color: #999;
      text-align: right;
    }
  `,
}
