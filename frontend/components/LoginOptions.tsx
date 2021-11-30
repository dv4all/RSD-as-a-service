import {signIn} from 'next-auth/react'
import router from 'next/router'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub';
import GitLabIcon from './GitlabIcon';

function signInWith(provider:string){
  signIn(provider,{
    callbackUrl:"http://localhost:3000/user/profile"
  })
}

export default function LoginOptions() {
  return (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gridGap: '1rem',
        margin: 'auto',
        width: '25rem'
      }}
    >
      <Typography variant="h1">
          Login with
      </Typography>
      <Button
        variant="outlined"
        autoFocus
        sx={{textTransform:'inherit'}}
        onClick={()=>signInWith('github')}>
        <GitHubIcon sx={{marginRight:'1rem'}}/>
          GitHub
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
        ORCID
      </Button>
      <Button variant="outlined" sx={{textTransform:'inherit'}}
        onClick={()=>signInWith('surfconext')}>
        SURFconext
      </Button>
      <Button variant="outlined" sx={{textTransform:'inherit'}}
        onClick={()=>signInWith('azure-ad')}>
        Azure AD
      </Button>
      <Button variant="outlined" sx={{textTransform:'inherit'}}
        onClick={()=>router.push("/signin")}>
        Email and Password
      </Button>
    </Box>
  )
}