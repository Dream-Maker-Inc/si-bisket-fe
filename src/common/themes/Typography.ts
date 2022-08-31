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

const getTypoSize = (
  typography: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2' | 'caption',
) => {
  const { h1, h2, h3, h4, subtitle1, subtitle2, caption } =
    baseTypographyOptions

  switch (typography) {
    case 'h1':
      return h1?.fontSize
    case 'h2':
      return h2?.fontSize
    case 'h3':
      return h3?.fontSize
    case 'h4':
      return h4?.fontSize
    case 'subtitle1':
      return subtitle1?.fontSize
    case 'subtitle2':
      return subtitle2?.fontSize
    case 'caption':
      return caption?.fontSize
  }
}

export const getTypoSizePx = (
  typography: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2' | 'caption',
) => {
  return `${getTypoSize(typography)}px`
}
