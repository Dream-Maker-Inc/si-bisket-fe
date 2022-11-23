// 반응형 포인트
export const BreakPoints = {
  xs: 360, // Mobile
  md: 679, // Tablet
  xl: 1024, // Web Normal
  xxl: 1368, // Web Large
  xxxl: 1442,
}

// 미디어 쿼리
export const MediaQueries = {
  xs: `(max-width:${BreakPoints.xs}px)`,
  md: `(max-width:${BreakPoints.md}px)`,
  xl: `(max-width:${BreakPoints.xl}px)`,
  xxl: `(max-width:${BreakPoints.xxl}px)`,
  xxxl: `(max-width:${BreakPoints.xxxl}px)`,
}
