import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

test("Home contains correct text", () => {
    render(<Home title="Title test" intro="Intro Test" main="Main test" />);
    const intro = screen.getByText("Intro Test");
    const title = screen.getByText("Title test");
    const main = screen.getByText("Main test");
    expect(intro).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(title).toBeInTheDocument();
});
