import { Box, Button, FormControl, FormLabel, OutlinedInput, styled } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { Flexbox } from '../../../../styles/globalStyles'
import { api } from '../../../../api/api';
import { GET_CATEGORIES } from '../../../../api/endpoints';
import { ErrorMsgToast, SuccessMsgToast } from '../../../Auth/utils/toasts';

const AddNewCategory = () => {
    const [categoryName, setCategoryName] = useState(null);

    const ButtonAddNewCategory = styled(Button)({
        background: 'var(--main-color-dark-teal)',
        padding:'10px 20px',
        color: 'white',
        margin: '0 0 7px',
        });
    
        // Handle Add New Category
        const handleAddNewCategory = useCallback( async(e) => {
            e.preventDefault();
            try{
                await api.post(GET_CATEGORIES,{ Name: categoryName });
                SuccessMsgToast('تم إضافة الفئة بنجاح.')
            }catch(err){
                ErrorMsgToast('فشل إضافة الفئة.')
            }
        },[categoryName])
      return (
    <Box 
    onSubmit={handleAddNewCategory}
    sx={{width:'fit-content', textAlign:'center',...Flexbox, justifyContent:{xs:'center', md:'space-between'}, flexWrap:'wrap', alignItems:{xs:'center', md:'end'}, gap:'20px', margin:'40px 0'}} component={'form'}>
    <FormControl >
        <FormLabel color='black' sx={{ fontSize:'20px'}}>{'اسم الفئة'}</FormLabel>
    <OutlinedInput
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        type={'text'}
        autoComplete='off'
        sx={{ background: 'white' }}
        required
        />
    </FormControl>
      <ButtonAddNewCategory type='submit'>إضافة فئة</ButtonAddNewCategory>
    </Box>
  )
}

export default AddNewCategory
