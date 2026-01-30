import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewTodoForm from './NewTodoForm';
import { describe, it, expect, vi } from 'vitest';

describe('NewTodoForm', () => {
  it('renders without crashing', () => {
    render(<NewTodoForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  })

  // Add test: 'calls addTodo with form data on submit'

  // Add test: 'rests form after submit'
});