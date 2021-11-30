import {useState, useEffect} from 'react'
import router from 'next/router'

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LoginIcon from '@mui/icons-material/Login';

import {Routes} from '../routes'
// styled using default material CSSinJSS lib (emotion)
import RSDLogoStyled from "./RSDLogoStyled"
// styled using css modules
import RSDLogo from "./RSDLogo"

export default function PageHeader(){
  const [activePath, setActivePath] = useState("/")

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
        { getMenuItems() }
      </Box>
      <IconButton title="Sign in / Sign up"
        onClick={()=>router.push('/signin')}
      >
        <LoginIcon color="primary"></LoginIcon>
      </IconButton>
    </Container>
  )
}