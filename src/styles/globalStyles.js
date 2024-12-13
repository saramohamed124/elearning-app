// FLex Styles
export const Flexbox = {
    display:'flex',
}

export const FlexboxCenter = {
    ...Flexbox,
    justifyContent:'center',
    alignItems:'center'
}

export const FlexboxEnd = {
    ...Flexbox,
    justifyContent:'flex-end',
}

export const FlexboxBetween = {
    ...Flexbox,
    justifyContent:'space-between',
}

export const Gap20 ={
    gap:'20px'
}

export const FlexBoxRow = {
    ...Flexbox,
    flexDirection:'row'
}

export const FlexCards = {
    display: 'flex',
    columnGap: '25px', // Space between items
    rowGap: '25px', // Space between items
    justifyContent: 'center', // Align items
    flexWrap:'wrap',
    margin:'20px 0'
}

// Global Styles

export const TextDecorationNone = {
    textDecoration :'none !important'
}

export const OverflowHidden = {
    overflow:'hidden'
}

export const PositionRelative = {
    position:'relative'
}

export const WidthFit = {
    width:'fit-content'
}

export const TextLeft = {
    textAlign:'left'
}

// Links
export const LinkStyle = {
    textDecoration:'none', color:'white', display:'block', marginBottom:'5px',letterSpacing:'1px'
}

// Auth
export const ImgAuth = {
    maxWidth: '100%', flex: '1' ,maxHeight:'600px',margin:'10px auto',placeSelf:'center'
}

export const FormCustomStyle = {
    backgroundColor: 'var(--main-dark-midnight-blue)',
    color: 'white',
    padding: '0 40px',
    flexDirection: 'column',
    flex: '1',
    justifyContent:'center',
    alignContent:'center'
}

export const  FormRegisterStyle = {
    backgroundColor: 'var(--main-dark-midnight-blue)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flex: '1',
}

export const FormLoginCostum = {
    backgroundColor: 'var(--main-dark-midnight-blue)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flex: '1',
}

// Link
export const StyledLink = {
    display:'block',
    color: '#2D54E0',
    }
