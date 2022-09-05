import { useState } from 'react'
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { Profile } from '@/common/components/Appbar/Profile'
import { ClearRounded, MenuRounded, SearchRounded } from '@mui/icons-material'
import { css } from '@emotion/react'
import Link from 'next/link'

export const TabletMenubar = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const MenuDialog = () => (
    <Dialog open={open} fullScreen onClose={handleClose}>
      <AppBar position='relative'>
        <Toolbar css={style.toolbar}>
          <Stack css={style.wrapper}>
            <Link href='/'>
              <img
                src='/logo.png'
                alt=''
                style={{
                  width: '126.3px',
                  height: '23.6px',
                  cursor: 'pointer',
                }}
              />
            </Link>

            <Stack direction='row'>
              <Profile isLogin />
              <IconButton css={style.icon}>
                <SearchRounded />
              </IconButton>
              <IconButton
                css={style.icon}
                sx={{
                  marginLeft: 1.25,
                  backgroundColor: 'black',
                  ':hover': {
                    backgroundColor: 'black',
                  },
                }}
                onClick={handleClose}
              >
                <ClearRounded sx={{ color: 'white' }} />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Stack mt={5} mr={3}>
        <Link href='/'>
          <Typography variant='h3' fontWeight='bold' textAlign='right'>
            Curated Collections
          </Typography>
        </Link>
        <Link href='/'>
          <Typography variant='h3' fontWeight='bold' textAlign='right'>
            NFTs
          </Typography>
        </Link>
        <Link href='/'>
          <Typography variant='h3' fontWeight='bold' textAlign='right'>
            Editorial
          </Typography>
        </Link>
        <Link href='/'>
          <Typography variant='h3' fontWeight='bold' textAlign='right'>
            Sign Out
          </Typography>
        </Link>
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

      <Button css={style.dialogButton}>English</Button>
    </Dialog>
  )

  return (
    <Stack direction='row'>
      <Profile isLogin />
      <IconButton css={style.icon}>
        <SearchRounded />
      </IconButton>
      <IconButton
        css={style.icon}
        sx={{ marginLeft: 1.25 }}
        onClick={handleClickOpen}
      >
        <MenuRounded />
      </IconButton>
      <MenuDialog />
    </Stack>
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
  `,
}
