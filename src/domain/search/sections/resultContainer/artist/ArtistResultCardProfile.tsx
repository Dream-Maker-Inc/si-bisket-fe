import { Stack, Typography } from '@mui/material'

type CardProfileProps = {
  avatar: string
  text: string
  caption: string
}

export const ArtistResultCardProfile = ({
  avatar,
  text,
  caption,
}: CardProfileProps) => (
  <Stack direction='row' alignItems='center'>
    <img src={avatar} alt='' width={44} height={44} />
    <Stack direction='column'>
      <Typography variant='subtitle2' ml={1} fontWeight='bold'>
        {text}
      </Typography>
      <Typography variant='subtitle2' ml={1} color='#767676'>
        {caption}
      </Typography>
    </Stack>
  </Stack>
)
