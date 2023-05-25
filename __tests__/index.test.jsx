import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

describe('Home', () => {

    it('renders a title', () => {
        render(<Home />);

        const title = screen.getByTestId('title');
        expect(title).toBeInTheDocument();
        expect(title.innerHTML).toBe("Qur'an App");
    });

    it('renders a description', () => {
        render(<Home />);

        const title = screen.getByTestId('desc');
        expect(title).toBeInTheDocument();
        expect(title.innerHTML).toBe("Baca Qur'an kapan pun dan di mana pun");
    });


});