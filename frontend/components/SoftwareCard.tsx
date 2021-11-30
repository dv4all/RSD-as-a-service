
import router from 'next/router'
import styled from '@mui/system/styled'
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge'
import RecommendIcon from '@mui/icons-material/Recommend';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import {
  getSoftwareMentionsCnt,
  getSoftwareProjectCnt,
  getSoftwareOrganizationCnt} from '../utils/getCounts'
import {SoftwareItem} from '../types/SoftwareItem'

import LastUpdate from '../components/LastUpdate'

const Card = styled('article')(({theme})=>({
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  alignItems:'flex-start',
  border: `1px solid ${theme.palette.divider}`,
  padding:'1.5rem 1rem',
  overflow: 'hidden',
  ':hover':{
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer'
  }
}))

const CardHeader = styled('div')(({theme})=>({
  width:'100%',
  padding:'0rem 0rem 1rem 0rem'
}))


const CardBadges = styled('div')({
  width:'100%',
  display:'flex',
  justifyContent:'flex-start',
  padding: '1rem 0rem'
})

const CardSummary = styled('div')(({theme})=>({
  display:'flex',
  width: '100%',
  justifyContent:'space-between'
}))

const CardContent = styled('div')({
  display:'blocl',
  padding: '1rem 0rem'
})

// const LastUpdate = styled('span')(({theme})=>({
//   color: theme.palette.info.light
// }))

export default function SoftwareCard({software}:{software:SoftwareItem}) {
  function goSoftwarePage(){
    router.push(`/software/${software.slug}`)
  }
  return (
    <Card
      role="button"
      tabIndex={0}
      onKeyDown={(key)=>key.code==='Enter' ? goSoftwarePage() : null}
      onClick={goSoftwarePage}
    >
      <CardHeader>
        <Typography gutterBottom variant="h2"
          color="default"
          title={software.brandName}
          sx={{
            wordBreak: 'keep-all',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {software.brandName}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {software.programmingLanguage.join(', ')}
        </Typography>
      </CardHeader>
      <CardSummary>
        <CardBadges>
          <Badge
            title="Mentions"
            showZero={true}
            badgeContent={getSoftwareMentionsCnt(software)}
            color="primary"
            sx={{
              margin:'0rem 1rem 0rem 0rem'
            }}
          >
            <RecommendIcon color='disabled' />
          </Badge>
          <Badge
            title="Projects"
            showZero={true}
            badgeContent={getSoftwareProjectCnt(software)}
            color="primary"
            sx={{
              margin:'0rem 1rem 0rem 0rem'
            }}
          >
            <DescriptionIcon color='disabled' />
          </Badge>
          <Badge
            title="Organizations"
            showZero={true}
            badgeContent={getSoftwareOrganizationCnt(software)}
            color="primary">
            <AccountBalanceIcon color='disabled' />
          </Badge>
        </CardBadges>
        {
          software.updatedAt ?
          <LastUpdate updatedAt={software.updatedAt} />
          // <LastUpdate>            
          //   <Typography variant="caption">
          //     Last update <br/>
          //     {new Date(software.updatedAt).toLocaleDateString('nl-NL')}
          //   </Typography>
          // </LastUpdate>
          : null
        }
      </CardSummary>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {software.shortStatement}
        </Typography>
      </CardContent>
    </Card>
  )
}