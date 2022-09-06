import {
  AppBar,
  AppBarProps,
  Stack,
  Toolbar,
  ToolbarProps,
  Typography,
} from '@mui/material'
import { css } from '@emotion/react'
import Link from 'next/link'
import { Menu } from '@/common/components/Appbar/Menu'
import { Profile } from '@/common/components/Appbar/Profile'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { TabletMenubar } from '@/common/components/Appbar/responsive-menu/TabletMenubar'

export interface CustomAppbarProps {
  appbarProps?: AppBarProps
  toolbarProps?: ToolbarProps
}

const WebMenubar = () => (
  <Stack direction='row' alignItems='center' gap={4}>
    <Menu />
    <Profile isLogin />
    <Stack direction='row'>
      <Link href='/'>
        <Typography variant='subtitle2' css={style.language}>
          ENG
        </Typography>
      </Link>
      <Link href='/'>
        <Typography variant='subtitle2' css={style.languageDivider}>
          |
        </Typography>
      </Link>
      <Link href='/'>
        <Typography variant='subtitle2' css={style.languageInactive}>
          KOR
        </Typography>
      </Link>
    </Stack>
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
        <Stack css={style.wrapper}>
          <Link href='/'>
            <img
              src='/logo.svg'
              alt=''
              style={{
                width: '126.3px',
                height: '23.6px',
                cursor: 'pointer',
              }}
            />
          </Link>

          {isWebNormal ? <TabletMenubar /> : <WebMenubar />}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

const style = {
  toolbar: css`
    width: 100%;
    height: 80px;
    justify-content: space-between;
    background-color: white;
  `,
  wrapper: css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1392px;
    margin: 0 auto;
  `,
  language: css`
    color: black;
    font-weight: 500;
    cursor: pointer;
  `,
  languageDivider: css`
    color: #999;
    font-weight: 500;
    margin: 0 4px;
  `,
  languageInactive: css`
    color: #ddd;
    font-weight: 500;
    cursor: pointer;
  `,
}
