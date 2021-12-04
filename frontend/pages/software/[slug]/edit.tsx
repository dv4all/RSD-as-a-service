import {useRouter} from 'next/router'
import Head from 'next/head'

import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SaveIcon from '@mui/icons-material/Save'

import DefaultLayout from "../../../layouts/DefaultLayout"
import PageTitle from '../../../components/PageTitle'

export default function SoftwareIndexPage() {
  const router = useRouter()
  const slug = router.query['slug']
  return (
    <DefaultLayout>
      <Head>
        <title>Software | RSD</title>
      </Head>
      <PageTitle title={`Edit ${slug}`}>
        <IconButton
          title="Go back"
          onClick={()=>router.back()}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          title="Save"
          onClick={()=>router.push(`/software/${slug}`)}>
          <SaveIcon />
        </IconButton>
      </PageTitle>
    </DefaultLayout>
  )
}
