import React from 'react'
import Link from 'next/link'
import { Typography } from '@mui/material'
import { css } from '@emotion/react'
import { ContactPageOutlined } from '@mui/icons-material'

type MenuProps = {
  onColorChanged: boolean
}

export const Menu = ({ onColorChanged }: MenuProps) => {
  console.log(onColorChanged)
  return (
    <>
      <Link href='/'>
        <Typography variant='subtitle2' css={style.menu(onColorChanged)}>
          Curated Collections
        </Typography>
      </Link>
      <Link href='/'>
        <Typography variant='subtitle2' css={style.menu(onColorChanged)}>
          NFTs
        </Typography>
      </Link>
      <Link href='/'>
        <Typography variant='subtitle2' css={style.menu(onColorChanged)}>
          Editorial
        </Typography>
      </Link>
      <Link href='/'>
        <Typography variant='subtitle2' css={style.menu(onColorChanged)}>
          Search
        </Typography>
      </Link>
    </>
  )
}

const style = {
  menu: (onColorChanged: boolean) => css`
    font-weight: 500;
    color: ${onColorChanged ? 'white' : 'black'};
    cursor: pointer;
  `,
}
