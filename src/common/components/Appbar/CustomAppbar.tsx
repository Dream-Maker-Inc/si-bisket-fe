import {
  AppBar,
  AppBarProps,
  Button,
  IconButton,
  Stack,
  Toolbar,
  ToolbarProps,
  Typography,
} from '@mui/material'
import { css } from '@emotion/react'
import Link from 'next/link'
import { useState } from 'react'

export interface CustomAppbarProps {
  appbarProps?: AppBarProps
  toolbarProps?: ToolbarProps
}

export const CustomAppbar = ({
  appbarProps,
  toolbarProps,
}: CustomAppbarProps) => {
  const [login, setLogin] = useState(false)

  return (
    <AppBar position='fixed' {...appbarProps}>
      <Toolbar {...toolbarProps} css={style.toolbar}>
        <Link href='/'>
          <img src='/logo.png' alt='' style={{ cursor: 'pointer' }} />
        </Link>
        <Stack direction='row' alignItems='center' gap={4}>
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
          {login ? (
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
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

const style = {
  toolbar: css`
    justify-content: space-between;
    height: 80px;
    background-color: white;
  `,
  menu: css`
    font-weight: bold;
    color: black;
    cursor: pointer;
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
