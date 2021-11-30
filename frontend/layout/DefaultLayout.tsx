import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import Container from '@mui/material/Container'

export default function DefaultLayout({children,...props}:{children:any}) {
  return (
    <>
      <AppHeader></AppHeader>
      <Container
        component="main"
        maxWidth={false}
        sx={{
          flex: 1,
          display:'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Container>
      <AppFooter></AppFooter>
    </>
  )
}