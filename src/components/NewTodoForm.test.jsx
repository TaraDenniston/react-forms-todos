import { render , fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import { describe, it, expect } from 'vitest';

describe('TodoList', () => {
  it('renders without crashing', () => {
    render(<TodoList />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  })

  // Add test: 'should add new todo item'

  // Add test: 'should display multiple todo items'
});