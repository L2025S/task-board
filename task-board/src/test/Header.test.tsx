import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";


describe("Header component",() =>{

    it("shows title", ()=>{
        render(<Header title="React" courseName="Course: Front-end development - React"></Header>);
        expect(screen.getByRole("heading")).toBeVisible();
    });
});