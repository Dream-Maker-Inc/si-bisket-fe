import { PaletteOptions } from '@mui/material'

// 컬러 상수를 정의 합니다.
export enum Colors {
  Primary = '#000',
  Secondary = '#666666',

  Danger = '#E74C3C',

  Border = '#eee',

  MainContentBg = '#eee',
  AppbarBg = '#2f2f37',
}

// 테마에 적용될 컬러 팔레트를 정의 합니다.
export const palette: PaletteOptions = {
  primary: {
    main: Colors.Primary,
  },
  secondary: {
    main: Colors.Secondary,
  },
  text: {},
  error: {
    main: Colors.Danger,
  },
}
