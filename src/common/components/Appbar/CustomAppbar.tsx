import {
  AppBar,
  AppBarProps,
  IconButton,
  Stack,
  Toolbar,
  ToolbarProps,
} from '@mui/material'
import { css } from '@emotion/react'
import Link from 'next/link'
import { Menu } from '@/common/components/Appbar/Menu'
import { Profile } from '@/common/components/Appbar/Profile'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { MenuRounded, SearchRounded } from '@mui/icons-material'

export interface CustomAppbarProps {
  appbarProps?: AppBarProps
  toolbarProps?: ToolbarProps
}

const WebMenubar = () => (
  <Stack direction='row' alignItems='center' gap={4}>
    <Menu />
    <Profile isLogin />
  </Stack>
)

const TabletMenubar = () => (
  <Stack direction='row'>
    <IconButton css={style.icon}>
      <SearchRounded />
    </IconButton>
    <IconButton css={style.icon} sx={{ marginLeft: 1.25 }}>
      <MenuRounded />
    </IconButton>
  </Stack>
)

export const CustomAppbar = ({
  appbarProps,
  toolbarProps,
}: CustomAppbarProps) => {
  const { isWebNormal } = useCustomMediaQuery()

  return (
    <AppBar position='fixed' {...appbarProps}>
      <Toolbar {...toolbarProps} css={style.toolbar}>
        <Link href='/'>
          <img src='/logo.png' alt='' style={{ cursor: 'pointer' }} />
        </Link>

        {isWebNormal ? <TabletMenubar /> : <WebMenubar />}
      </Toolbar>
    </AppBar>
  )
}

const style = {
  icon: css`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: black;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #f2f2f2;
  `,
  toolbar: css`
    width: 100%;
    justify-content: space-between;
    height: 80px;
    background-color: white;
  `,
}
