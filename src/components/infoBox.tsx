import type { ReactNode } from "react";

type infoBoxProps={
    mode:"Warning" | "Hint";
    children:ReactNode
}
export default function infoBox({mode,children}: infoBoxProps) {
    if(mode==="Hint")return<aside className="hint">
        <p>{children}</p>
    </aside>
    return <aside className="warning">
        <h1>Warning</h1>
        <p>{children}</p>
    </aside>

}