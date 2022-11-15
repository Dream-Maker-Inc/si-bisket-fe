import { PaletteOptions } from '@mui/material'

// 컬러 상수를 정의 합니다.
export enum Colors {
  Primary = '#000',
  Secondary = '#666666',

  Danger = '#E74C3C',
  Border = '#fff',
  MainContentBg = '#fff',
  AppbarBg = '#2f2f37',

  BannerBg = '#f2f2f2',

  DarkGrey = '#505050',
  LightGray = '#DDDDDD',

  ThinGrey = '#E6E6E6',

  HeightlightGreen = '#00FF9D',
  MediumDarkGrey = '#767676',
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
