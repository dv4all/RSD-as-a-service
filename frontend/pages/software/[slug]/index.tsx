import {NextPageContext} from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router'
import DefaultLayout from "../../../layout/DefaultLayout"
import PageTitle from '../../../components/PageTitle'

import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { getSoftwareItem } from '../../../utils/getSoftware'
import { SoftwareItem } from '../../../types/SoftwareItem'

export default function SoftwareIndexPage({software, slug}:{software:SoftwareItem, slug:string}) {
  const router = useRouter()
  return (
    <DefaultLayout>
      <Head>
        <title>{software.brandName} | RSD</title>
      </Head>
      <PageTitle title={software.brandName}>
        <div>
          <IconButton
            title="Go back"
            onClick={()=>router.back()}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            title="Edit"
            onClick={()=>router.push(`/software/${slug}/edit`)}>
            <EditIcon />
          </IconButton>
        </div>
      </PageTitle>
      <pre>
        {JSON.stringify(software,null,2)}
      </pre>
    </DefaultLayout>
  )
}

// fetching data server side
// see documentation https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps(context:any) {
  const {params} = context
  console.log("getServerSideProps...params...", params)
  const software = await getSoftwareItem(params?.slug)
  return {
    // will be passed to the page component as props
    // see params in SoftwareIndexPage
    props: {
      software,
      slug: params?.slug
    },
  }
}