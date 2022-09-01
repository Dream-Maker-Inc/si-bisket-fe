import Link from 'next/link'
import { Button, IconButton } from '@mui/material'
import { css } from '@emotion/react'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'

type ProfileProps = {
  isLogin?: boolean
}

const LoggedInComponent = () => {
  const { isWebNormal } = useCustomMediaQuery()

  return isWebNormal ? (
    <Link href='/'>
      <IconButton css={style.icon}>
        <img src='/main/profile.png' alt='' width={28} />
      </IconButton>
    </Link>
  ) : (
    <Link href='/'>
      <IconButton>
        <img src='/main/profile.png' alt='' width={30} />
      </IconButton>
    </Link>
  )
}

const LogoutComponent = () => {
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

export const Profile = ({ isLogin }: ProfileProps) =>
  isLogin ? <LoggedInComponent /> : <LogoutComponent />

const style = {
  icon: css`
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-right: 10px;
    color: black;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #f2f2f2;
  `,
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
