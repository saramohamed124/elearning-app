import toast from "react-hot-toast";

export const SuccessMsgToast = (message) => {
    toast.success(message, {
        position: "top-left",
        duration: 20000, 
            style:{
            backgroundColor:'var(--main-color-orange-gold)',
            color:'black',
            fontSize:'16px',
            fontWeight:"bold",
            padding:'10px',
            icon: '✔️',
    }
    });
}

export const ErrorMsgToast = (message) => {
    toast.error(message,{
        position: "top-left",
        duration: 20000, 
        style:{
            backgroundColor:'var(--main-color-error)',
            color:'white',
            fontSize:'16px',
            fontWeight:"bold",
            padding:'10px',
        }
    })
}