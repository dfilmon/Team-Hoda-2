import './style.css';
import React from 'react';
import 'tailwindcss/tailwind.css';
import Hero from './Hero';
import Feature from './Feature';
import MyForm from './MyForm';

export default function App() {
  return (
    <div>
      <Hero />
      <Feature />
      <MyForm />
    </div>
  );
}
