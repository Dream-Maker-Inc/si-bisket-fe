import React from 'react'
import { LoggedInComponent } from './account/LoggedInComponent'
import { LogoutComponent } from './account/LogoutComponent'

type ProfileProps = {
  isLogin?: boolean
}

export const Profile = ({ isLogin }: ProfileProps) => {
  return isLogin ? <LoggedInComponent /> : <LogoutComponent />
}

const style = {}
