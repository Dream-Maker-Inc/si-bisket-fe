import { Colors } from '@/common/themes/Color'
import { css } from '@emotion/react'
import { ReactNode } from 'react'
import { CustomAppbar } from '../Appbar'
import { Stack } from '@mui/material'

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack width='100%' height='100%'>
      <CustomAppbar />

      <Stack direction='row' width='100%' height='100%'>
        <main css={st.main}>{children}</main>
      </Stack>
    </Stack>
  )
}

const st = {
  main: css`
    width: 100%;
    height: 100%;
    background-color: ${Colors.MainContentBg};
  `,
}
