import { useEffect, useState } from 'react'
import router from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import Logo from '../assets/logo-escience.svg'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

import { Routes } from '../routes'

export default function PageHeader () {
  const [activePath, setActivePath] = useState('/')
  const { status } = useSession()

  useEffect(() => {
    if (typeof window != 'undefined') {
      const paths = window.location.pathname.split('/')
      if (paths.length > 0) {
        setActivePath(`/${paths[1]}`)
      }
    }
  }, [])

  function getMenuItems () {
    return Routes.map(item => (
      <Button
        key={item.path}
        color={activePath !== item.path ? 'primary' : 'secondary'}
        onClick={() => router.push(item.path)}
      >
        {item.label}
      </Button>
    ))
  }

  function getLoginButton () {
    if (status==="authenticated"){
      return (
        <IconButton title="Logout"
          onClick={()=>signOut()}
        >
          <LogoutIcon color="secondary"></LogoutIcon>
        </IconButton>
      )
    }
    return (
      <IconButton title="Sign in / Sign up"
        onClick={()=>router.push('/login')}
      >
        <LoginIcon color="primary"></LoginIcon>
      </IconButton>
    )
  }

  // console.log("activePath...", activePath)

  return (

    <header className="container mx-auto">
      <div className="flex p-4">
        <Logo onClick={() => router.push('/')} className="cursor-pointer"/>
        <div className="ml-auto">
          {getMenuItems()}
        </div>
        <div className="ml-auto">
          {getLoginButton()}
        </div>
      </div>
    </header>
  )
}
