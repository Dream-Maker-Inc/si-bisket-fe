import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import { CollectionInformation } from '@/domain/main/sections/collection/CollectionInformation'

export const CollectionSection = () => (
  <Stack direction='row' css={style.root} component='section'>
    <img
      src='https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='
      width={500}
      alt='bisket'
    />

    <CollectionInformation />
  </Stack>
)

const style = {
  root: css`
    width: 100%;
    max-width: 1200px;
    margin: 100px auto;
  `,
}
