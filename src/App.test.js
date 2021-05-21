import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import particlesConfig from './config/configParticles';
import MipsMicroprocessor from "./components/MipsMicroprocessor";
import ReactGoGame from "./components/ReactGoGame";
import SeniorDesign from "./components/SeniorDesign";
import RestaurantSuggestion from "./components/RestaurantSuggestion"

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('ehren')).toBeInTheDocument();
    expect(screen.getByLabelText('projects')).toBeInTheDocument();
    expect(screen.getByLabelText('about')).toBeInTheDocument();
    expect(screen.getByLabelText('contact')).toBeInTheDocument();
    expect(screen.getByLabelText('linkedinButton')).toBeInTheDocument();
    expect(screen.getByLabelText('githubButton')).toBeInTheDocument();




  });
});
