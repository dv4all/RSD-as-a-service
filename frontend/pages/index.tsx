import Head from 'next/head'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Home(){
  return (
    <>
    <Head>
      <title>Home page | Research Software Directory</title>
    </Head>
    <DefaultLayout>
      <h1>Home page</h1>
    </DefaultLayout>
    </>
  )
}
