import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'
import { css } from '@emotion/react'

export const Menu = () => (
  <>
    <Link href='/'>
      <Typography variant='subtitle2' css={style.menu}>
        Curated Collections
      </Typography>
    </Link>
    <Link href='/'>
      <Typography variant='subtitle2' css={style.menu}>
        NFTs
      </Typography>
    </Link>
    <Link href='/'>
      <Typography variant='subtitle2' css={style.menu}>
        Editorial
      </Typography>
    </Link>
    <Link href='/'>
      <Typography variant='subtitle2' css={style.menu}>
        Search
      </Typography>
    </Link>
  </>
)

const style = {
  menu: css`
    font-weight: bold;
    color: black;
    cursor: pointer;
  `,
}
