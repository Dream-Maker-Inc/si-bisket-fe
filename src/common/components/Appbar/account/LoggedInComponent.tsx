import React from 'react'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { css } from '@emotion/react'
import { List, Logout } from '@mui/icons-material'

export const LoggedInComponent = () => {
  const { isWebNormal, isTablet } = useCustomMediaQuery()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return isWebNormal ? (
    <div>
      <IconButton css={style.icon} onClick={handleClick}>
        <img src='/main/profile.png' alt='' width={28} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        elevation={3}
        PaperProps={{
          sx: {
            borderRadius: '14px',
            boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.16)',
          },
        }}
        css={style.menu}
      >
        <MenuItem css={style.menuItem}>
          <IconButton css={style.profileIcon} onClick={handleClick}>
            <img src='/main/profile.png' alt='' />
          </IconButton>
          <Typography variant='subtitle1' fontWeight={500}>
            My Profile
          </Typography>
        </MenuItem>
        <Divider css={style.divider} />
        <MenuItem css={style.menuItem}>
          <List color='primary' />
          <Typography variant='subtitle1' fontWeight={500} ml={1.5}>
            Dashboard
          </Typography>
        </MenuItem>
        <MenuItem css={style.menuItem}>
          <ListItemIcon>
            <Logout color='primary' />
          </ListItemIcon>
          <Typography variant='subtitle1' fontWeight={500}>
            Sign Out
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  ) : isWebNormal ? (
    <IconButton>
      <img src='/main/profile.png' alt='' width={30} />
    </IconButton>
  ) : (
    <IconButton>
      <img src='/main/profile.png' alt='' width={30} />
    </IconButton>
  )
}

const style = {
  menu: css`
    margin-top: 20px;
    margin-right: 23px;
  `,
  menuItem: css`
    width: 170px;
  `,
  menuIcon: css`
    width: 30px;
    height: 30px;
  `,
  divider: css`
    width: 146px;
    margin: 0 auto;
    border: 1px solid #f2f2f2;
  `,
  icon: css`
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-right: 10px;
    color: black;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #f2f2f2;
  `,
  profileIcon: css`
    width: 30px;
    height: 30px;
    padding: 10px;
    margin-right: 10px;
    color: black;
    border-radius: 50%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #f2f2f2;

    img {
      width: 20px;
      height: 20px;
    }
  `,
}
