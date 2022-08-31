import Link from 'next/link'
import { Button, IconButton } from '@mui/material'
import { css } from '@emotion/react'

type ProfileProps = {
  isLogin?: boolean
}

export const Profile = ({ isLogin }: ProfileProps) =>
  isLogin ? (
    <Link href='/'>
      <IconButton>
        <img src='/main/profile.png' alt='' width={30} />
      </IconButton>
    </Link>
  ) : (
    <Link href='/'>
      <Button variant='outlined' css={style.button}>
        Log In
      </Button>
    </Link>
  )

const style = {
  button: css`
    min-width: 100px;
    width: fit-content;
    height: 40px;
    padding: 11px 28px;
    border: 0.5px solid black;
    border-radius: 20px;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      font-weight: bold;
      border: 1px solid black;
      transition: 0.3s;
      background-color: black;
      color: white;
    }
  `,
}
