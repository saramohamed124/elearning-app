import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const ShowMore = ({linkpg}) => {
    const ShowMrCustom = styled(Link)(({theme})=>({
        display:'block',
        width:'fit-content',
        padding:'15px 45px',
        margin:'20px auto',
        borderRadius:'30px',
        backgroundColor:'var(--main-color-golden-yellow)',
        color:'black',
        fontWeight:'bold',
        textDecoration:'none'
    })) 
  return (
    <ShowMrCustom to={linkpg}>
      عرض المزيد
    </ShowMrCustom>
  )
}

export default ShowMore
