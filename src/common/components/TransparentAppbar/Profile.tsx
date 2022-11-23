import React from 'react'
import { LoggedInComponent } from '@/common/components/Appbar/account/LoggedInComponent'
import { LogoutComponent } from '@/common/components/Appbar/account/LogoutComponent'

type ProfileProps = {
  isLogin?: boolean
}

export const Profile = ({ isLogin }: ProfileProps) => {
  return isLogin ? <LoggedInComponent /> : <LogoutComponent />
}

const style = {}
