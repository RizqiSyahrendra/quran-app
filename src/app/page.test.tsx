import { render, screen, fireEvent } from '@testing-library/react';
import Landing from './page';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Landing Screen', () => {

  it('should render title and desc text', () => {
    render(<Landing />)

    const title1 = screen.getByTestId("title");
    expect(title1).toBeInTheDocument()
    expect(title1.innerHTML).toMatch("Qur'an App")

    const title2 = screen.getByTestId("desc");
    expect(title2).toBeInTheDocument();
    expect(title2.innerHTML).toMatch("Baca Qur'an kapan pun dan di mana pun")
  });

  it('should render start button', () => {
    render(<Landing />)
    const button = screen.getByTestId('btn-start')
    expect(button).toBeInTheDocument()
    expect(button.innerHTML).toMatch("Mulai")
    expect(button).toBeEnabled()
  })

  it('should redirects to Home Screen on button click', () => {
    render(<Landing />, { wrapper: MemoryRouterProvider });

    const button = screen.getByTestId('btn-start')
    fireEvent.click(button);
    expect(mockRouter).toMatchObject({
      pathname: "/home",
    });
  });

})