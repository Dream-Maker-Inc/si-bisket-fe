import { TypographyOptions } from '@mui/material/styles/createTypography'

// 테마에 적용될 폰트 스타일을 정의 합니다.
const baseTypographyOptions: TypographyOptions = {
  fontFamily: 'Exo 2',
  h1: {
    fontSize: 60,
  },
  h2: {
    fontSize: 50,
  },
  h3: {
    fontSize: 40,
  },
  h4: {
    fontSize: 30,
  },
  caption: {
    lineHeight: 1.4,
  },
}

export const typographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
}
