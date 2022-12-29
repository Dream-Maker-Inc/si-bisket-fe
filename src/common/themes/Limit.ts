// 반응형 포인트
export const BreakPoints = {
  xs: 360,
  sm: 430, // Mobile
  md: 679, // Tablet
  x: 852,
  xl: 1024, // Web Normal
  xxl: 1368, // Web Large
  xxxl: 1442,
}

// 미디어 쿼리
export const MediaQueries = {
  xs: `(max-width:${BreakPoints.xs}px)`,
  sm: `(max-width:${BreakPoints.sm}px)`,
  md: `(max-width:${BreakPoints.md}px)`,
  x: `(max-width:${BreakPoints.x}px)`,
  xl: `(max-width:${BreakPoints.xl}px)`,
  xxl: `(max-width:${BreakPoints.xxl}px)`,
  xxxl: `(max-width:${BreakPoints.xxxl}px)`,
}
