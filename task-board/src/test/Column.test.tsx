import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Column from "../components/Column";


describe("Column component",() =>{

    it("show title and children", ()=>{
        render( <Column title="Doing">
                    <p>Task 1</p>
                </Column>
        );

        expect(screen.getByText("Doing")).toBeVisible();
        expect(screen.getByText("Task 1")).toBeVisible();

    });


});