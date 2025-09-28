import { logAccessAttempt, getAccessLog, clearAccessLog } from '../utils/accessControl';

describe('Access Control Utilities', () => {
  beforeEach(() => {
    clearAccessLog();
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should log access attempts correctly', () => {
    logAccessAttempt('profile-2', 'access_denied');
    
    const log = getAccessLog();
    expect(log).toHaveLength(1);
    expect(log[0].profileId).toBe('profile-2');
    expect(log[0].action).toBe('access_denied');
    expect(log[0].timestamp).toBeInstanceOf(Date);
    expect(log[0].userAgent).toBeDefined();
  });

  test('should log multiple access attempts', () => {
    logAccessAttempt('profile-2', 'access_denied');
    logAccessAttempt('profile-4', 'access_denied');
    
    const log = getAccessLog();
    expect(log).toHaveLength(2);
    expect(log[0].profileId).toBe('profile-2');
    expect(log[1].profileId).toBe('profile-4');
  });

  test('should clear access log', () => {
    logAccessAttempt('profile-2', 'access_denied');
    expect(getAccessLog()).toHaveLength(1);
    
    clearAccessLog();
    expect(getAccessLog()).toHaveLength(0);
  });

  test('should log security warnings to console', () => {
    const consoleSpy = jest.spyOn(console, 'warn');
    
    logAccessAttempt('profile-2', 'access_denied');
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'Security Alert: access_denied for restricted profile profile-2',
      expect.objectContaining({
        profileId: 'profile-2',
        action: 'access_denied'
      })
    );
  });

  test('should return immutable copy of access log', () => {
    logAccessAttempt('profile-2', 'access_denied');
    
    const log1 = getAccessLog();
    const log2 = getAccessLog();
    
    expect(log1).not.toBe(log2);
    expect(log1).toEqual(log2);
  });
});
