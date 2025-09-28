import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserProfile from '../UserProfile';
import { getAccessLog, clearAccessLog } from '../../utils/accessControl';

describe('UserProfile Access Control', () => {
  beforeEach(() => {
    clearAccessLog();
  });

  test('should render normal profile for non-restricted user', () => {
    render(
      <UserProfile
        avatar="test-avatar.jpg"
        name="Test User"
        email="test@example.com"
        bio="Test bio"
        restricted={false}
      />
    );
    
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Test bio')).toBeInTheDocument();
  });

  test('should show access restricted message for restricted user', () => {
    render(
      <UserProfile
        restricted={true}
        profileIndex={2}
      />
    );
    
    expect(screen.getByText('Access Restricted')).toBeInTheDocument();
    expect(screen.getByText('Should not be accessed')).toBeInTheDocument();
    expect(screen.queryByText('Restricted User')).not.toBeInTheDocument();
    expect(screen.queryByText('restricted@example.com')).not.toBeInTheDocument();
  });

  test('should log access attempts for restricted profiles', () => {
    render(
      <UserProfile
        restricted={true}
        profileIndex={2}
      />
    );
    
    const log = getAccessLog();
    expect(log).toHaveLength(1);
    expect(log[0].action).toBe('access_denied');
    expect(log[0].profileId).toBe('profile-2');
    expect(log[0].timestamp).toBeInstanceOf(Date);
  });

  test('should not log access attempts for non-restricted profiles', () => {
    render(
      <UserProfile
        avatar="test-avatar.jpg"
        name="Test User"
        email="test@example.com"
        bio="Test bio"
        restricted={false}
      />
    );
    
    const log = getAccessLog();
    expect(log).toHaveLength(0);
  });

  test('should handle missing profile data gracefully', () => {
    render(
      <UserProfile
        restricted={false}
      />
    );
    
    expect(screen.queryByText('Access Restricted')).not.toBeInTheDocument();
  });
});
