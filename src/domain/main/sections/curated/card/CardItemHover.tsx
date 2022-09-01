import { Stack, Typography } from '@mui/material'
import { css } from '@emotion/react'

export const CardItemHover = () => (
  <Stack css={style.hover} justifyContent='space-between'>
    <Stack direction='row' alignItems='center'>
      <img
        src='/main/card-curated-collection-thumbnail.png'
        alt=''
        width={30}
        height={30}
      />
      <Typography variant='caption' ml={1} color='white' fontWeight='bold'>
        COLLECTION NAME
      </Typography>
    </Stack>
    <Typography css={style.hoverTitle}>ARTWORK TITLE TITLE ARTWORK</Typography>
  </Stack>
)

const style = {
  hover: css`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 24px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgba(0, 0, 0, 0.6);
  `,
  hoverTitle: css`
    font-size: 24px;
    font-weight: 600;
    line-height: 26px;
    color: white;
  `,
}
