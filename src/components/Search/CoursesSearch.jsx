import React from 'react';
import CoursesFormSearch from './components/CoursesFormSearch';
import { Box, styled } from '@mui/material';

// icons
import { FlexboxCenter } from '../../styles/globalStyles';

const CoursesSearch = ({ onSearch }) => {

  const SearchCustom = styled(Box)(() => ({
    ...FlexboxCenter,
    width: 'fit-content',
    padding: '4px 8px',
    margin: '20px auto',
    borderRadius: '50px',
    backgroundColor: 'var(--main-color-vibrant-orange)',
  }));

  return (
    <SearchCustom>
      <CoursesFormSearch onSearch={onSearch} />
    </SearchCustom>
  );
};

export default CoursesSearch;
