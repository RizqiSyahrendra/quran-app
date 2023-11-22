import { render } from '@testing-library/react';
import Header from '@/components/Header';
import '@testing-library/jest-dom';

// Mock useRouter:
jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            prefetch: () => null,
            push: () => null,
            back: () => null,
        };
    }
}));

describe('Header', () => {

    it('render a Header', () => {
        const { getByText } = render(
            <Header 
                title="Judul"
            />
        );
        const text = getByText("Judul");
        expect(text).toBeInTheDocument();
    });

    it('render Header unchanged', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });

});