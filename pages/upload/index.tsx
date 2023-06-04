import MainLayout from "@/components/layout/MainLayout"
import Upload from "@/Views/Upload"

export const index = () => {
    return (
        <>
            <Upload/>
        </>
    )
}

index.Layout = MainLayout;
