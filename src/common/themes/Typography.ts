import { TypographyOptions } from '@mui/material/styles/createTypography'

// 테마에 적용될 폰트 스타일을 정의 합니다.
const baseTypographyOptions: TypographyOptions = {
  fontFamily: 'Exo 2',
  h1: {
    fontSize: 66,
  },
  h2: {
    fontSize: 50,
  },
  h3: {
    fontSize: 36,
  },
  h4: {
    fontSize: 32,
  },
  subtitle1: {
    fontSize: 18,
  },
  subtitle2: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
}

export const typographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
}
