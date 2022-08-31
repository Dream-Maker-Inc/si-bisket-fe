// 반응형 포인트
export const BreakPoints = {
  xs: 360,
  sm: 576,
  md: 679, // Mobile
  lg: 900,
  xl: 1024, // Tablet
  xxl: 1368, // Laptop
}

// 미디어 쿼리
export const MediaQueries = {
  xs: `(max-width:${BreakPoints.xs}px)`,
  sm: `(max-width:${BreakPoints.sm}px)`,
  md: `(max-width:${BreakPoints.md}px)`,
  lg: `(max-width:${BreakPoints.lg}px)`,
  xl: `(max-width:${BreakPoints.xl}px)`,
  xxl: `(max-width:${BreakPoints.xxl}px)`,
}
