export interface AccessAttempt {
  timestamp: Date;
  profileId: string;
  action: 'view_attempt' | 'access_denied';
  userAgent?: string;
}

const accessLog: AccessAttempt[] = [];

export const logAccessAttempt = (profileId: string, action: AccessAttempt['action']) => {
  const attempt: AccessAttempt = {
    timestamp: new Date(),
    profileId,
    action,
    userAgent: navigator.userAgent
  };
  accessLog.push(attempt);
  console.warn(`Security Alert: ${action} for restricted profile ${profileId}`, attempt);
};

export const getAccessLog = () => [...accessLog];

export const clearAccessLog = () => {
  accessLog.length = 0;
};
