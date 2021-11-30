import {useState, useEffect, MouseEvent, ChangeEvent} from 'react'
import Head from 'next/head'
import { NextPageContext } from 'next'

import TablePagination from '@mui/material/TablePagination';

import DefaultLayout from "../../layout/DefaultLayout"
import PageTitle from '../../components/PageTitle'
// import TablePagination from '../../components/TablePagination'

import SoftwareList from '../../components/CardTable'
import SoftwareCard from '../../components/SoftwareCard'
import {SoftwareItem} from '../../types/SoftwareItem'
import {getSoftwareList} from '../../utils/getSoftware'

export default function SoftwareIndexPage({software}:{software:SoftwareItem[]}) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(12)
  const [softwareList, setSoftwareList] = useState(software)
  const rowsPerPageOptions = [12,24,48]

  useEffect(()=>{
    // debugger
    getSoftwareList({
      limit:rowsPerPage,
      offset: rowsPerPage * page
    }).then(data=>{
      setSoftwareList(data)
    })
  },[page,rowsPerPage])

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Software | RSD</title>
      </Head>
      <PageTitle title="Software">
        <TablePagination
          component="nav"
          count={100}
          page={page}
          labelRowsPerPage="Per page"
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </PageTitle>
      <SoftwareList>
        {
          softwareList.map(item=>{
            return <SoftwareCard key={item.primaryKey.id} software={item} />
          })
        }
      </SoftwareList>
      {/* <pre>
        {JSON.stringify(software,null,2)}
      </pre> */}
    </DefaultLayout>
  )
}

// fetching data server side
// see documentation https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps(context:any) {
  const software:SoftwareItem[] = await getSoftwareList({limit:12,offset:0})
  return {
    // will be passed to the page component as props
    // see params in SoftwareIndexPage
    props: {
      software
    },
  }
}