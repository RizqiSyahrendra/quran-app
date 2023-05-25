import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

describe('Home', () => {

    it('render a title', () => {
        render(<Home />);

        const el = screen.getByTestId('title');
        expect(el).toBeInTheDocument();
        expect(el.innerHTML).toBe("Qur'an App");
    });

    it('render a description', () => {
        render(<Home />);

        const el = screen.getByTestId('desc');
        expect(el).toBeInTheDocument();
        expect(el.innerHTML).toBe("Baca Qur'an kapan pun dan di mana pun");
    });

    it('render a center image', () => {
        render(<Home />);

        const el = screen.getByRole('img');
        expect(el).toBeInTheDocument();
        expect(el).toHaveAttribute("src");
        expect(el).toHaveAttribute("alt");
        expect(el.getAttribute("src")).toContain("quran-landing-logo.png");
        expect(el.getAttribute("alt")).toContain("quran");
    });

    it('render a start button', () => {
        render(<Home />);

        const el = screen.getByRole('button');
        expect(el).toBeInTheDocument();
        expect(el).toHaveAttribute("href");
        expect(el.getAttribute("href")).toContain("home");
        expect(el.innerHTML.toLowerCase()).toContain("mulai");
    });

    it('render homepage unchanged', () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });

});