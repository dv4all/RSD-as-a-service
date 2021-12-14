import {render, screen} from '@testing-library/react'
import SoftwareIndexPage, {getServerSideProps} from '../pages/software/index'
import {WrappedComponentWithProps} from '../utils/jest/WrappedComponents'

// mock fetch response
import softwareItem from './__mocks__/softwareItem.json'
const mockedResponse=[softwareItem]
global.fetch=jest.fn(()=>({
  status:206,
  headers:{
    // mock getting Content-Range from the header
    get:()=>'0-11/200'
  },
  statusText:"OK",
  json: jest.fn(()=>Promise.resolve(mockedResponse))
}))

describe('pages/software/index.tsx', () => {
  it('getServerSideProps returns mocked values in the props', async() => {
    const resp = await getServerSideProps({})
    expect(resp).toEqual({
      props:{
        // count is extracted from response header
        count:200,
        // default query param values
        page:0,
        rows:12,
        // mocked data
        software: mockedResponse
      }
    })
  })

  it('renders heading with the title Software', async() => {
    render(WrappedComponentWithProps(
      SoftwareIndexPage,{
        count:200,
        page:0,
        rows:12,
        software:mockedResponse,
        // user session
        session:{
          expires: "test",
          user: {name:"Test user"}
        }
      }
    ))
    const heading = await screen.findByRole("heading",{
      name: "Software"
    })
    expect(heading).toBeInTheDocument()
    expect(heading.innerHTML).toEqual("Software")
  })
})