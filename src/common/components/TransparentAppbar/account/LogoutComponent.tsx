import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import Link from 'next/link'
import { Button } from '@mui/material'
import React from 'react'
import { css } from '@emotion/react'

export const LogoutComponent = () => {
  const { isWebNormal } = useCustomMediaQuery()

  return isWebNormal ? (
    <div></div>
  ) : (
    <Link href='/'>
      <Button variant='outlined' css={style.button}>
        Log In
      </Button>
    </Link>
  )
}

const style = {
  button: css`
    min-width: 100px;
    width: fit-content;
    height: 40px;
    padding: 11px 28px;
    border: 0.5px solid black;
    border-radius: 20px;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      font-weight: 500;
      border: 1px solid black;
      transition: 0.3s;
      background-color: black;
      color: white;
    }
  `,
}
