
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