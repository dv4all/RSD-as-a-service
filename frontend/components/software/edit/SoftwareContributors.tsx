import {useContext, useEffect, useState} from 'react'

import EditSoftwareSection from './EditSoftwareSection'
import editSoftwareContext from './editSoftwareContext'
import EditSectionTitle from './EditSectionTitle'

import {getContributorsForSoftware} from '../../../utils/editContributors'
import {Contributor} from '../../../types/Contributor'

import SoftwareContributorsList from './SoftwareContributorsList'
import EditContributorModal from './EditContributorModal'
import ConfirmDeleteModal from '../../layout/ConfirmDeleteModal'
import {getDisplayName} from '../../../utils/getDisplayName'
import FindContributor from './FindContributor'

export default function SoftwareContributors({slug,token}:{slug:string,token:string}) {
  const {pageState, dispatchPageState} = useContext(editSoftwareContext)
  const {software} = pageState
  const [contributors, setContributors] = useState<Contributor[]>([])
  const [editContributor, setEditContributor] = useState<Contributor>()
  const [modal, setModal] = useState({
    edit: false,
    delete: false
  })
  // const [editModal, setEditModal] = useState(false)
  // const [delModal, setDelModal] = useState(false)
  const [delContributor, setDelContributor] = useState<number>()

  useEffect(() => {
    let abort = false

    const getContributors = async (software:string,token:string) => {
      const resp = await getContributorsForSoftware({
        software,
        token,
        frontend:true
      })
      if (abort) return
      // debugger
      setContributors(resp ?? [])
    }

    if (software?.id && token) {
      getContributors(software.id,token)
    }

    return () => { abort = true }
  },[software?.id,token])

  let delDisplayName = ''
  if (typeof delContributor == 'number') {
    delDisplayName = getDisplayName(contributors[delContributor]) ?? ''
  }

  function deleteContributor() {
    setModal({
      ...modal,
      delete:false
    })
    debugger
    // abort if not specified
    if (typeof delContributor == 'number') {
      // get contributor info
      const contributor = contributors[delContributor]
      if (contributor) {
        console.log('Delete contributor...', contributor)
      }
    }
  }

  return (
    <>
      <EditSoftwareSection className='xl:pl-8 xl:grid xl:grid-cols-[1fr,1fr] xl:px-0 xl:gap-[3rem]'>
        <section className="py-6">
          <h2 className="flex pr-4 pb-4 justify-between">
            <span>Contributors list</span>
            <span>{contributors?.length}</span>
          </h2>
          <SoftwareContributorsList
            contributors={contributors}
            onEdit={(pos) => {
              // debugger
              const contributor = contributors[pos]
              if (contributor) {
                setEditContributor(contributor)
                setModal({
                  edit: true,
                  delete:false
                })
              }
            }}
            onDelete={(pos) => {
              setDelContributor(pos)
              setModal({
                  edit: false,
                  delete: true
                })
            }}
          />
        </section>
        <section className="py-6">
          <h2 className="pb-8">Add contributor</h2>
          <FindContributor />
        </section>
      </EditSoftwareSection>
      <EditContributorModal
        open={modal.edit}
        contributor={editContributor}
        onClose={(modalState) => {
          setModal({
            ...modal,
            edit:false
          })
        }}
      />
      <ConfirmDeleteModal
        title="Remove contributor"
        open={modal.delete}
        displayName={delDisplayName}
        onCancel={() => {
          setModal({
            ...modal,
            delete:false
          })
        }}
        onDelete={deleteContributor}
      />
    </>
  )
}
