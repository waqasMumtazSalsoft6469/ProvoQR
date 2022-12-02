export const endpoints = {
  auth: {
    userSignup: '/user/signup',
    login: '/user/login',
    sendEmail: '/user/forgot/password',
    setPassword: '/user/new/password',
    verifyOTP: '/user/verify/code',
    packages: '/user/subscription/package',
    subscription: '/user/subscription/package',
    mySubscription: '/user/my-subscriptions',
    cancelSubscription: '/user/cancel-subscription/',
    welcomeQuestions: '/user/welcome-questions',
  },
  other: {
    getProfile: '/user/profile',
  },
};

// for dev env
// export const base_url =
// 'https://devu2.onlinetestingserver.com/nathangainer/wp-json/theden/v1';

// for live env
export const base_url =
  'https://custom-dev.onlinetestingserver.com/provo/public/api';
