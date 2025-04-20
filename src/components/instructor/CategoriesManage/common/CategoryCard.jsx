import { Box, Card, IconButton, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {  Flexbox, FlexboxBetween, FlexBoxCol } from '../../../../styles/globalStyles'
import DeleteBtn from '../../../../utils/Btns/DeleteBtn';
import { api } from '../../../../api/api';
import { GET_CATEGORIES } from '../../../../api/endpoints';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ErrorMsgToast } from '../../../Auth/utils/toasts';
import ErrorMsg from '../../../../utils/Error/ErrorMsg';

// icons
import category from '../assets/category.png';
import edit_icon from '../../../student/assets/Pencil.svg';
import SuccessMsg from '../../../../utils/Error/SuccessMsg';

const CategoryCard = ({categoryName, categoryId, courseCount}) => {
  const [success, setSuccess] = useState('');
  const [err, setErr] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(categoryName);
  const queryClient = useQueryClient()

    // Styles
    const CategoryCardCustom = styled(Card)({
        ...FlexboxBetween,
        whiteSpace:'nowrap',
        gap:'20px',
        width:'200px',
        padding:'10px'
    });

    // handle Edit Category
    const handleEditCategory = useMutation({
      mutationFn: (id) => api.put(`${GET_CATEGORIES}`, {id ,name: newName}),
      onSuccess: () => {
        queryClient.invalidateQueries(['categories']);
        setSuccess('تم تعديل الفئة بنجاح.');
        setErr('');
        setIsEditing(false);
      },
      onError: () => {
        setErr('فشل تعديل الفئة.');
        setSuccess('');
      }
      });

      // handle Edit Click
      const handleEditClick = () =>{
        if(isEditing) {
          handleEditCategory.mutate(categoryId);
        }else{
          setIsEditing(true)
        }
      }
    // handle Delete Category
    const handleDeleteCategory = useMutation({
      mutationFn: (id) => api.delete(`${GET_CATEGORIES}/${id}`),
      onSuccess:  () => {
        queryClient.invalidateQueries(['categories']);
      },
      onError: (err) => {
        ErrorMsgToast('فشل حذف الفئة.')        
      }
    });

  return (
    <Box key={categoryId} position={'relative'}>
    <CategoryCardCustom>
      <img style={{ width:'50px', height:'50px'}} src={category} alt='category'/>
      <Box sx={FlexBoxCol}>
      <Box sx={{...Flexbox, flexDirection: 'row-reverse', alignItems: "center"}}>
        {isEditing ? (
        <TextField
        size='small'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleEditCategory.mutate(categoryId) && setIsEditing(false)}/>
      ):(
          <Typography variant='h6' color='inherit'>{categoryName.length > 6 ? categoryName.substring(0,8) +'..' : categoryName}</Typography>
        )
      }
      <IconButton onClick={handleEditClick} size="small">
          <img src={edit_icon} alt="edit" width={20} height={20} />
        </IconButton> 
      </Box>
        <Typography variant="subtitle" color="#79747E">عدد الكورسات: {courseCount}</Typography>
        </Box>
    </CategoryCardCustom>
      <DeleteBtn handleDelete={() => handleDeleteCategory.mutate(categoryId)}/>
        <SuccessMsg msg={success}/>
        <ErrorMsg err={err}/>
    </Box>
  )
}

export default CategoryCard
