import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function ForgotPassword() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop:12
      }}>
      <Typography component="h1" variant="h5">Forgot password</Typography>
    </Container>
  )
}