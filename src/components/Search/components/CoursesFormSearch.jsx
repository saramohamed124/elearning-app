import { Avatar, Box, MenuItem, OutlinedInput, Select, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';

// icons
import search from '../assets/search.svg';
import filter from '../assets/filter.svg'
import { useCategories } from '../../common/useCategories';
import { FlexboxCenter } from '../../../styles/globalStyles';

// Filter Menu
const FilterMenu = ({open, handleClose, setSubmitData}) => {
    const [level, setLevel] = useState('')
    const [categoryId, setCategoryId] = useState('') // it not read why
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('');
    const { data: categories, isLoading } = useCategories();

    // handle filter Level
    const levels = [
        { value: 0, label: 'مبتدئ' },
        { value: 1, label: 'متوسط' },
        { value: 2, label: 'متقدم' },
        { value: 3, label: 'خبير' },
        { value: 4, label: 'محترف' }
      ];
    
      if (isLoading) {
        return (
          <Box sx={{ padding: '10px' }}>
            جاري تحميل ...
          </Box>
        );
      }

      // Handle Search
      const handleSearch = (e) => {
        e.preventDefault();

        const data = {
          ...(categoryId !== '' && { categoryId }),
          ...(level !== '' && { level }),
          ...(minPrice !== '' && Number(minPrice) > 0 && { minPrice }),
          ...(maxPrice !== '' && Number(maxPrice) > 0 && { maxPrice }),
        };
      
        setSubmitData(data);
        handleClose();
      };

      return (
        <Box
        component="form"
        onSubmit={handleSearch}
        sx={{width:'250px', padding:'20px', margin:'10px 0', borderRadius:'10px',}}
        autoFocusItem={open}
        id="composition-menu"
        aria-labelledby="composition-button"
        >
        <Box>
        <Typography sx={{ marginBottom: '8px', fontWeight: 'bold' }}> الفئة</Typography>
        <Select
          fullWidth
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          sx={{
            borderRadius: '30px',
            backgroundColor: '#f7f7f7',
            color: 'black',
          }}
        >
          {categories ?
          categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          )):
          <Box sx={{ padding: '10px', color: 'var(--main-color-error)' }}>
          حدث خطأ أثناء تحميل الفئات، الرجاء المحاولة لاحقًا.
        </Box>
}
        </Select>
      </Box>
        <Box>
        <Typography sx={{ marginBottom: '8px', fontWeight: 'bold' }}> المستوى</Typography>
        <Select
          fullWidth
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          sx={{
            borderRadius: '30px',
            backgroundColor: '#f7f7f7',
            color: 'black',
          }}
        >
          {levels.map((lvl) => (
            <MenuItem key={lvl.value} value={lvl.value}>
              {lvl.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{display:'flex', justifyContent:'space-between', gap:'20px', alignItems:'center'}}>
      <Box>
        <Typography sx={{ marginBottom: '8px', fontWeight: 'bold' }}> الحد الأدني</Typography>
          <OutlinedInput
            placeholder='الحد الأدني'
            value={minPrice}
            // required
            onChange={(e) => setMinPrice(e.target.value)}>
              </OutlinedInput>
      </Box>
      <Box>
        <Typography sx={{ marginBottom: '8px', fontWeight: 'bold' }}> الحد الأعلي
        </Typography>
          <OutlinedInput
            placeholder='الحد الأعلي'
            value={maxPrice}
            // required
            onChange={(e) => setMaxPrice(e.target.value)}>
              </OutlinedInput>
      </Box>
        </Box>
        <Button
        type="submit"
        sx={{
          margin: '20px auto',
          padding: '5px 20px',
          backgroundColor: 'var(--main-dark-midnight-blue)',
          color: 'white',
        }}
        >بحث</Button>
      </Box>
    )
}

const CoursesFormSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [open, setOpen] = useState(false);
    const [submitData, setSubmitData] = useState({});
    const anchorRef = React.useRef(null);

   
    useEffect(() => {
      const location = window.location.search;
      const params = new URLSearchParams(location);
      const searchTerm = params.get('searchTerm');
        if(searchTerm && Object.keys(submitData).length > 0) {
        onSearch({
          searchTerm,
          ...submitData,
        })
      }
    })
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef?.current.contains(event?.target)) {
        return;
      }
  
      setOpen(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(searchTerm) {
      onSearch({
        searchTerm,
        ...submitData,
      });
      }
      console.log(searchTerm);
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

    return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'fit-content'}}>
        <form style={{ ...FlexboxCenter, gap:'10px'}} onSubmit={handleSubmit}>
        <OutlinedInput
            sx={{
                display:'block',
                backgroundColor:'white',
                width: { xs: '100%', md: '350px'},
                height:'50px',
                borderRadius:'30px'}}
            placeholder='بحث...'
            value={searchTerm}
            required
            onChange={(e) => setSearchTerm(e.target.value)}>
        </OutlinedInput>
        <Button
        type="submit"
      >
        <Avatar
        sx={{
          padding:'8px',
          backgroundColor: 'var(--main-dark-midnight-blue)',
          borderRadius: '50%',
        }}
          src={search} alt="search" />
      </Button>
        </form>
  <Stack direction="row" spacing={2}>
      <div style={{ width: '0px'}}>
      <Avatar
            style={{
                width:'20px',
                transform: 'translateX(120px)',
                cursor: 'pointer'}} 
            src={filter}
            alt='filter'
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
              />
        <Popper
          sx={{ zIndex: 10 }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                    <FilterMenu open={open} handleClose={handleClose} setSubmitData={setSubmitData}/>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
    </Box>
  )
}



export default CoursesFormSearch
