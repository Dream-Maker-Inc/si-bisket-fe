import React from 'react'
import { useCustomMediaQuery } from '@/common/themes/UseCustomMediaQuery'
import { IconButton } from '@mui/material'
import { css } from '@emotion/react'

export const LoggedInComponent = () => {
  const { isWebNormal } = useCustomMediaQuery()

  return isWebNormal ? (
    <IconButton css={style.icon}>
      <img src='/main/profile.png' alt='' width={28} />
    </IconButton>
  ) : (
    <IconButton>
      <img src='/main/profile.png' alt='' width={30} />
    </IconButton>
  )
}

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
}
