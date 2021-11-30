import Typography from "@mui/material/Typography"
import Copyright from "./Copyright"
import styled from '@mui/system/styled'

const Footer = styled('footer')(({theme})=>({
  padding: '1rem',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
}))

export default function AppFooter() {
  return (
    <Footer>
      <Typography>
        This is footer part
      </Typography>
      <Copyright />
    </Footer>
  )
}