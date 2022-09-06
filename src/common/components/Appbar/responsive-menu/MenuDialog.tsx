import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import { Profile } from '@/common/components/Appbar/Profile'
import { ClearRounded, SearchRounded } from '@mui/icons-material'
import { css } from '@emotion/react'
import { useState } from 'react'

type MenuDialogProps = {
  open: boolean
  onClose: () => void
}

const menuText = ['Curated Collections', 'NFTs', 'Editorial', 'Sign Out']

export const MenuDialog = ({ open, onClose }: MenuDialogProps) => {
  const [language, setLanguage] = useState('Korean')
  const handleChangeLanguage = () => {
    language === 'Korean' ? setLanguage('English') : setLanguage('Korean')
  }

  return (
    <Dialog fullScreen open={open}>
      <AppBar position='relative'>
        <Toolbar css={style.toolbar}>
          <Stack css={style.wrapper}>
            <Link href='/'>
              <img src='/logo.svg' alt='' css={style.logo} />
            </Link>

            <Stack direction='row'>
              <Profile isLogin />
              <IconButton css={style.icon}>
                <SearchRounded />
              </IconButton>
              <IconButton css={style.closeIcon} onClick={onClose}>
                <ClearRounded sx={{ color: 'white' }} />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Stack mt={5} mr={3}>
        {menuText.map((data, idx) => (
          <Link href='/' key={idx}>
            <Typography variant='h3' fontWeight='bold' textAlign='right'>
              {data}
            </Typography>
          </Link>
        ))}
      </Stack>

      <Stack direction='row' flexDirection='row-reverse' mr={3} mt={3.5}>
        <IconButton>
          <img src='/twitter-black.svg' alt='' />
        </IconButton>
        <IconButton>
          <img src='/instagram-black.svg' alt='' />
        </IconButton>
        <IconButton>
          <img src='/youtube-black.svg' alt='' />
        </IconButton>
      </Stack>

      <Button onClick={handleChangeLanguage} css={style.dialogButton}>
        {language}
      </Button>
    </Dialog>
  )
}

const style = {
  logo: css`
    width: 126.3px;
    height: 23.6px;
    cursor: pointer;
  `,
  icon: css`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: black;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #f2f2f2;
  `,
  closeIcon: css`
    width: 40px;
    height: 40px;
    padding: 10px;
    color: black;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #f2f2f2;
    margin-left: 12px;
    background-color: black;

    &:hover {
      background-color: black;
    }
  `,
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
  dialogButton: css`
    width: fit-content;
    align-self: end;
    border-radius: 20px;
    border: 1px solid black;
    margin-top: 16px;
    margin-right: 26px;
    padding: 5px 12px;

    &:hover {
      background-color: black;
      color: white;
    }
  `,
}
