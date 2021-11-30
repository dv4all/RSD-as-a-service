import Head from 'next/head'
import { AppContext } from 'next/app'
import DefaultLayout from "../../layout/DefaultLayout"
import PageTitle from '../../components/PageTitle'
import TablePagination from '../../components/TablePagination'

// fetch data
import {ProjectItem} from '../../types/ProjectItem'
import {getProjects} from '../../utils/getProjects'

export default function ProjectsIndexPage({projects}:{projects:ProjectItem[]}) {
  return (
    <DefaultLayout>
      <Head>
        <title>Projects | RSD</title>
      </Head>
      <PageTitle title="Projects">
        <TablePagination />
      </PageTitle>
      <pre>
        {JSON.stringify(projects,null,2)}
      </pre>
    </DefaultLayout>
  )
}


// fetching data server side
// see documentation https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps(context:any) {
  // console.log("AppContext...", context)
  const projects:ProjectItem[] = await getProjects({limit:12,offset:0})
  return {
    props: {
      projects
    }, // will be passed to the page component as props
  }
}