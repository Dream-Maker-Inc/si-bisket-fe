import { useState } from 'react'
import { IconButton, Stack } from '@mui/material'
import { Profile } from '@/common/components/Appbar/Profile'
import { MenuRounded, SearchRounded } from '@mui/icons-material'
import { css } from '@emotion/react'
import { MenuDialog } from '@/common/components/Appbar/responsive-menu/MenuDialog'

export const TabletMenubar = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
      <MenuDialog open={open} onClose={handleClose} />
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
