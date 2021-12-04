import {signIn} from 'next-auth/react'
import router from 'next/router'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Icon } from '@iconify/react'

function signInWith(provider:string){
  signIn(provider,{
    callbackUrl:"http://localhost:3000/user/profile"
  })
}

export default function LoginOptions() {
  return (
    <section className="grid gap-4 mx-auto mt-20 w-1/4">
      <h2>Login with</h2>
      <Button
        variant="outlined"
        autoFocus
        sx={{textTransform:'inherit'}}
        onClick={()=>signInWith('github')}>
        <Icon icon="mdi:github" width={20}  className="mr-1"/> GitHub
      </Button>
      {/*
        GITLAB SSO IS NOT WORKING! Further investigation needed
      <Button variant="outlined" sx={{textTransform:'inherit'}}
        onClick={()=>signInWith('gitlab')}>
        <GitLabIcon />
        GitLab
      </Button>
      */}
      <Button variant="outlined" sx={{textTransform:'inherit'}}
        onClick={()=>signInWith('orcid')}>
        <Icon icon="mdi:login-variant" width={20}  className="mr-1"/> ORCID
      </Button>
      <Button variant="outlined" sx={{textTransform:'inherit'}}
        onClick={()=>signInWith('surfconext')}>
        <Icon icon="mdi:login-variant" width={20}  className="mr-1"/> SURFconext
      </Button>
      <Button variant="outlined" sx={{textTransform:'inherit'}}
        onClick={()=>signInWith('azure-ad')}>
        <Icon icon="mdi:microsoft" width={20}  className="mr-1"/> Azure AD
      </Button>
      <Button variant="outlined" sx={{textTransform:'inherit'}}
        onClick={()=>router.push("/signin")}>
        <Icon icon="mdi:email-outline" width={20}  className="mr-1"/> Email and Password
      </Button>
    </section>
  )
}
