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
import { useState } from 'react'
import { Login } from './Login'

export interface CustomAppbarProps {
  appbarProps?: AppBarProps
  toolbarProps?: ToolbarProps
}

const WebMenubar = () => {
  const [language, setLanguage] = useState('kor')
  const changeLanguageToKOR = () => setLanguage('kor')
  const changeLanguageToENG = () => setLanguage('eng')

  return (
    <Stack direction='row' alignItems='center' gap={4}>
      <Menu />
      <Login />
      <Stack direction='row' alignItems='center'>
        <div css={style.languageWrapper}>
          <Typography
            onClick={changeLanguageToENG}
            variant='subtitle2'
            css={language === 'eng' ? style.language : style.languageActive}
          >
            ENG
          </Typography>
        </div>
        <Typography variant='subtitle2' css={style.languageDivider}>
          |
        </Typography>
        <div css={style.languageWrapper}>
          <Typography
            onClick={changeLanguageToKOR}
            variant='subtitle2'
            css={language === 'kor' ? style.language : style.languageActive}
          >
            KOR
          </Typography>
        </div>
      </Stack>
    </Stack>
  )
}

export const TransparentAppbar = ({
  appbarProps,
  toolbarProps,
}: CustomAppbarProps) => {
  const { isWebNormal } = useCustomMediaQuery()

  return (
    <AppBar position='fixed' {...appbarProps} css={style.root}>
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
  root: css`
    background-color: transparent;
  `,
  toolbar: css`
    width: 100%;
    height: 80px;
    justify-content: space-between;
    background-color: transparent;
  `,
  wrapper: css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1392px;
    margin: 0 auto;
  `,
  languageWrapper: css`
    padding: 4px;
    border-radius: 10px;
    background-color: transparent;
    transition: 0.5s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1019607843);
      transition: 0.5s;
    }
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
  languageActive: css`
    color: rgba(17, 17, 17, 0.3019607843);
    font-weight: 500;
    cursor: pointer;
  `,
}
