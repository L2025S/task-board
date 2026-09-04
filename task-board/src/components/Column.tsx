import type { ReactNode } from "react";

type ColumnProps = {
    title: "Todo"|"Doing"|"Done";
    children: ReactNode;
}
const Column = ({title, children}:ColumnProps) =>{

    return(
        <section className="columns">
            <h2 className="column-title">{title}</h2>
            {children}
        </section>
    );
};
export default Column;