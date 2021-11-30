import {useState, useEffect} from 'react'
import router from 'next/router'
import {useSession, signOut} from 'next-auth/react'

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import {Routes} from '../routes'
// styled using default material CSSinJSS lib (emotion)
import RSDLogoStyled from "./RSDLogoStyled"

export default function PageHeader(){
  const [activePath, setActivePath] = useState("/")
  const {status} = useSession()

  useEffect(()=>{
    if (typeof window !='undefined'){
      // debugger
      const paths = window.location.pathname.split("/")
      if (paths.length > 0) setActivePath(`/${paths[1]}`)
    }
  },[])

  function getMenuItems(){
    return Routes.map(item=>{
      return (
        <Button
          key={item.path}
          color={activePath!==item.path ? 'primary' : 'secondary'}
          onClick={()=>router.push(item.path)}>
            {item.label}
        </Button>
      )
    })
  }

  function getLoginButton(){
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
    <Container
      component="header"
      maxWidth={false}
      sx={{
        position: 'sticky',
        display: 'flex',
        top: '0rem',
        height: '7rem',
        padding: '0rem 1.25rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'background.paper',
        zIndex: 8
      }}
    >
      <RSDLogoStyled />
      <Box component="nav">
        {getMenuItems()}
      </Box>
      {getLoginButton()}
    </Container>
  )
}