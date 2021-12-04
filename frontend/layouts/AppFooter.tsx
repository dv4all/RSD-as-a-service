import router from 'next/router'
import { Icon } from '@iconify/react'
import Logo from '../assets/logo-escience.svg'

export default function AppFooter () {
  return (
    <footer className="flex flex-wrap bg-secondary">
      <div className="flex flex-wrap container mx-auto  py-10 px-4">
        <div className="w-full sm:w-1/2 px-10 sm:px-16">
          <div className="text-xl">
            The Research Software Directory aims to promote the impact,
            the exchange and re-use of research software.
            Please use our tools!
            <a onClick={() => router.push('/about')}>Read more</a>
          </div>
          <a target="_blank" href="https://esciencecenter.nl" rel="noreferrer"
             className="hover:text-primary"
          >
            <Logo/>
          </a>
          <div className="text-sm">Copyright © {new Date().getFullYear()}</div>
        </div>
        <div className="w-full sm:w-1/2 px-10 sm:px-16">
          <div className="text-xl">Questions or comments?</div>

          <a href="mailto:rsd@esciencecenter.nl"
             className="mt-2 text-primary hover:text-white flex"
          >
            <Icon icon="ant-design:mail-outlined" width={24} className="mr-2"
            /> rsd@esciencecenter.nl
          </a>

          <div className="mt-8 text-xl">Netherlands eScience Center</div>
          <div className="flex flex-col">
            <a className="text-xl primary-link" href="">Home</a>
            <a className="text-xl primary-link" href="">Projects</a>
            <a className="text-xl primary-link" href="">People</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
