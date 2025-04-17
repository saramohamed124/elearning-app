import { Box, styled, Typography } from "@mui/material";
import { Flexbox } from "../../../../styles/globalStyles";

const ArticleCard = ({src, alt, dataCount, title}) => {
    const ArticleCardContainer = styled(Box)(({theme}) =>({
        ...Flexbox,
        width:'250px',
        height: '90px',
        borderRadius: "10px",
    }));
    return(
        <ArticleCardContainer>
            <img style={{
                backgroundColor: title === 'الأرباح' ? 'var(--main-dark-midnight-blue)' : 'var(--main-color-dark-teal)',
                width: '30px',
                height: 'auto',
                padding:' 15px 25px',
                borderRadius:'0px 10px 10px 0px',
            }} src={src} alt={alt}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: title === 'الأرباح' ? 'var(--main-color-dark-teal)' : 'var(--main-dark-midnight-blue)',
                color: 'white',
                borderRadius:'10px 0px 0px 10px',
                flex: '2',
            }}>
                <Typography variant="h6">{dataCount}</Typography>
                <Typography>{title}</Typography>
            </Box>
        </ArticleCardContainer>
    )
}

export default ArticleCard;