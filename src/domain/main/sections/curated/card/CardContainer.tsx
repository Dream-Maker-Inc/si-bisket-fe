import { Stack } from '@mui/material'
import { CardItem } from '@/domain/main/sections/curated/card/CardItem'

export const CardContainer = () => (
  <Stack
    direction='row'
    alignItems='center'
    justifyContent='center'
    mr={3}
    height={524}
  >
    <CardItem />
    <CardItem />
    <CardItem />
  </Stack>
)
