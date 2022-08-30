import { Stack } from '@mui/material'
import { css } from '@emotion/react'
import { CollectionInformation } from '@/domain/main/sections/collection/CollectionInformation'

export const CollectionSection = () => (
  <Stack direction='row' css={style.root} component='section'>
    <img src='/main/thumbnail-main.png' alt='bisket' css={style.image} />

    <CollectionInformation />
  </Stack>
)

const style = {
  root: css`
    width: 100%;
    max-width: 1400px;
    margin: 100px auto;
  `,
  image: css`
    max-width: 650px;
    max-height: 500px;
    object-fit: contain;
  `,
}
