import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { clearAccessLog } from '../utils/accessControl';

describe('App Access Control Integration', () => {
  beforeEach(() => {
    clearAccessLog();
  });

  test('should render all non-restricted profiles normally', () => {
    render(<App />);
    
    expect(screen.getByText('Alex Johnson')).toBeInTheDocument();
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Emily Davis')).toBeInTheDocument();
  });

  test('should show access restricted for restricted profiles', () => {
    render(<App />);
    
    const restrictedMessages = screen.getAllByText('Access Restricted');
    expect(restrictedMessages).toHaveLength(2);
    
    const shouldNotAccessMessages = screen.getAllByText('Should not be accessed');
    expect(shouldNotAccessMessages).toHaveLength(2);
  });

  test('should not expose sensitive data in DOM for restricted profiles', () => {
    render(<App />);
    
    expect(screen.queryByText('Restricted User')).not.toBeInTheDocument();
    expect(screen.queryByText('restricted@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('This profile should not be accessed')).not.toBeInTheDocument();
    expect(screen.queryByText('Classified Profile')).not.toBeInTheDocument();
    expect(screen.queryByText('classified@example.com')).not.toBeInTheDocument();
    expect(screen.queryByText('Access to this profile is restricted')).not.toBeInTheDocument();
  });

  test('should render correct number of profiles', () => {
    render(<App />);
    
    const profileCards = screen.getAllByRole('article');
    expect(profileCards).toHaveLength(5);
  });

  test('should display application title and description', () => {
    render(<App />);
    
    expect(screen.getByText('User Profiles')).toBeInTheDocument();
    expect(screen.getByText(/A collection of user profile cards/)).toBeInTheDocument();
  });
});
