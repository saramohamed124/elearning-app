import { Avatar, Box, styled, Typography } from '@mui/material'
import Cookies from 'js-cookie'

// img
import avatar_instructor from '../../../Navbar/assets/imgs/avatar_instructor.png';
import { useFetchInstructorId } from '../../../../queries/useFetchInstructorId';
import { FlexboxCenter } from '../../../../styles/globalStyles';

const InstructorInfo = () => {
    const instructorId = Cookies.get('id');
    const { data: instructorInfo } = useFetchInstructorId(instructorId);

    // Styles
    const ExpertCustom = styled(Box)({
        width:'fit-content',
        height:'fit-content',
        padding:'10px 15px',
        margin:'10px 15px',
        transform: 'translateY(-74px)',
        backgroundColor:'var(--main-color-dark-teal)',
        color:'white',
        borderRadius:'6px'
    })
  return (
    <Box>
            <Box sx={{ ...FlexboxCenter, flexDirection:{xs: 'column',md:'row'}, height:"fit-content"}}>
    <Box sx={{ width: {xs:'auto', lg:'100%'}, height:'fit-content', display: 'flex',
            justifyContent: {xs:'center',md:'flex-start'},
            flexDirection: {xs: 'column', md: 'row'},
            transform: 'translateY(-74px)',
            padding: '20px',
            textAlign: {xs: 'center',md:'unset'},
            alignItems: {xs:'center', md:'end'},}}>
      <Avatar
          sx={{ width: '8rem', height:'8rem', transform: 'translatY(-57px)', }}
          src={avatar_instructor}
          alt="avatar instructor"
        />
        <Box sx={{padding:'20px'}}>
            <Typography fontWeight={'bold'}>{instructorInfo?.firstName} {instructorInfo?.lastName}</Typography>
            <a href={`mailto:${instructorInfo?.email}`} style={{color:'blue'}}>{instructorInfo?.email}</a>
        </Box>
    </Box>
    <ExpertCustom>{instructorInfo?.expertise}</ExpertCustom>

    </Box>
    <Box width={'auto'} padding={'20px'} textAlign={{ xs: 'center', md: 'start' }} bgcolor={'#F5F4F4'}>
        <Typography variant='h6' padding={'0 0 10px 0'} fontWeight={'bold'}>نبذة عن المحاضر</Typography>
        <Typography color={'#615F5F'}>{instructorInfo?.biography}</Typography>
    </Box>
        </Box>

  )
}

export default InstructorInfo
