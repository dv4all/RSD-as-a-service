import { AppProviders } from 'next-auth/providers'
import { getProviders, getSession } from 'next-auth/react'

import Head from 'next/head'
import Typography from '@mui/material/Typography'
import DefaultLayout from '../layouts/DefaultLayout'

import LoginOptions from '../components/LoginOptions'

export default function LoginPage({providers}:{providers:AppProviders}){
  return (
    <>
    <Head>
      <title>Login | Research Software Directory</title>
    </Head>
    <DefaultLayout>
      <LoginOptions />
    </DefaultLayout>
    </>
  )
}

// Here we get a list of defined providers from nexth-auth api endpoint
// if the user is logged in we redirect it to the dashboard page
export async function getInitialProps(context:any){
  const {req,res} = context
  const session = await getSession({req})

  if(res && session && session.user){
    res.writeHead(302,{Location:"/user/profile"})
    res.end()
  }
  return {
    session:undefined,
    providers:await getProviders()
  }
}
