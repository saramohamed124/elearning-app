import { Toaster } from "react-hot-toast";

export const ToastWrapper = () => (
    <Toaster
        toastOptions={{
            success: { style: { padding: "16px" } },
            error: { style: { padding: "16px" } },
        }}
    />
);


