import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders concerts block', async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(await screen.findByText('КОНЦЕРТЫ 2024')).toBeInTheDocument();
  expect(screen.getByText('Купить билеты')).toBeInTheDocument();
});

test('renders info group block', async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(await screen.findByText('О ГРУППЕ')).toBeInTheDocument();
  expect(screen.getByText('Три дня дождя - российская рок-группа, зажигающая сцены своим энергичным звучанием и яркими текстами.')).toBeInTheDocument();
  expect(screen.getByText('Группа активно выступает как в России, так и за ее пределами, завоевывая сердца поклонников с каждым концертом.')).toBeInTheDocument();
  // Add more assertions for other content in the info group block
});

test('renders albums block', async () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(await screen.findByText('АЛЬБОМЫ И СИНГЛЫ')).toBeInTheDocument();
  expect(screen.getByText('КРАСОТА')).toBeInTheDocument();
  expect(screen.getByText('МОИ ДРУЗЬЯ')).toBeInTheDocument
});