import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import { store } from '@store/Store'

describe('Counter', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  })

  it('Should render counter', () => {
    expect(screen.getByText('Counter')).toBeTruthy()
  })

  it('Should increase counter', () => {
    const count = screen.getByTestId('count')

    expect(Number(count.textContent)).toBe(0)

    const button = screen.getByText('+')

    fireEvent.click(button)

    expect(Number(count.textContent)).toBe(1)
  })

  it('Should decrease counter', () => {
    const count = screen.getByTestId('count')

    expect(Number(count.textContent)).toBe(1)

    const button = screen.getByText('-')

    fireEvent.click(button)

    expect(Number(count.textContent)).toBe(0)
  })
})
