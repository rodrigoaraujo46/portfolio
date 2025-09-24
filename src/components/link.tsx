import type { AnchorHTMLAttributes } from "react"
import Tooltip from "./tooltip"

function Link({
    children,
    title,
    target = "_blank",
    rel = "noopener noreferrer",
    ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        title === undefined ?
            <a target={target} rel={rel} {...props}>
                {children}
            </a>
            :
            <Tooltip tip={title}>
                <a target={target} rel={rel} {...props}>
                    {children}
                </a>
            </Tooltip>
    )
}

export default Link
