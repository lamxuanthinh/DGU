import { LayoutProps } from "../../../model";

export interface EmptyLayoutProps {}

export function EmptyLayout(props: LayoutProps) {
  return <div>{props.children}</div>
}
