import type { ReactNode } from "react";

type ColumnProps = {
    title: "Todo"|"Doing"|"Done";
    children: ReactNode;
}
const Column = ({title, children}:ColumnProps) =>{

    return(
        <section className="bg-[#fec89a] rounded-lg p-4 shadow-md min-h-[200px]">
            <h2 className="text-xl font-bold text-black mb-3">{title}</h2>
            <div className="space-y-3">{children}</div>
        </section>
    );
};
export default Column;