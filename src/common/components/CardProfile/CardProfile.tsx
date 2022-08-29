import { Avatar, List, ListItem, Typography } from '@mui/material'
import { ReactNode } from 'react'

type CardProfileProps = {
  avatar: ReactNode
  text: string
}

export const CardProfile = ({ avatar, text }: CardProfileProps) => (
  <List>
    <ListItem disableGutters={true}>
      <Avatar>{avatar}</Avatar>
      <Typography variant='subtitle2' ml={1} fontWeight='bold'>
        {text}
      </Typography>
    </ListItem>
  </List>
)
