import RootLayout from "./layout"
import { it, describe, expect } from 'vitest';
import { render, screen } from "@testing-library/react";

describe("Layout tests", () => {
    it("should render layout with heading containing Hacker News", () => {
        const layout = render(<RootLayout children={undefined} />)

        expect(layout.getByRole("heading").innerHTML).toBe('Hacker News')
    })

    it("should render layout with login button containing Login", () => {
        const layout = render(<RootLayout children={undefined} />)

        expect(layout.getAllByRole("button")[0].textContent).toBe('Login');
    })
})