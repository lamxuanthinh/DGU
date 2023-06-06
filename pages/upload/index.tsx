import MainLayout from "@/components/layout/MainLayout"
import UploadPage from "@/Views/Upload"



export default function index() {
    return (
        <>
            <UploadPage />
        </>
    )
}

index.Layout = MainLayout;
