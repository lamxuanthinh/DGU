import { useAppContext } from "@/Context";
import { LayoutProps } from "@/model";
import Loading from "@/components/common/Loading";
export interface EmptyLayoutProps {}

export function EmptyLayout(props: LayoutProps) {
    const { isLoading } = useAppContext();

    return (
        <div>
            {isLoading && <Loading />}
            {props.children}
        </div>
    );
}
