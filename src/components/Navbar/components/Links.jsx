import { List, ListItem } from '@mui/material'
import React from 'react'
import { FlexboxBetween, FlexBoxRow, Gap20} from '../../../styles/globalStyles';
import { LinkCostum, pages } from '../Navbar';
// Nav Links

const Links = () => {    
  return (
    <div>
        <List sx={{...FlexBoxRow,...FlexboxBetween,...Gap20,display:{xs:'none',md:'flex'}}}>
            {pages.map((page)=>(
                <ListItem key={page.link}>
                    <LinkCostum to={page.link}>{page.name}</LinkCostum>
                </ListItem>
            ))}
        </List>
    </div>
  )
}

export default Links
