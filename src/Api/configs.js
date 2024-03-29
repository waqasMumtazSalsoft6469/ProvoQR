export const endpoints = {
  auth: {
    userSignup: '/user/signup',
    login: '/user/login',
    sendEmail: '/user/forgot/password',
    setPassword: '/user/new/password',
    verifyOTP: '/user/verify/code',
    packages: '/user/subscription/package',
    subscription: '/user/subscription/payment',
    mySubscription: '/user/my-subscriptions',
    cancelSubscription: '/user/cancel-subscription/',
    completeProfile: '/complete/profile',
    editProfile: '/user/update/profile',
    changePassword: '/user/change/password',
  },
  other: {
    getProfile: '/user/profile',
    home: '/get/home/data',
    restaurantDetail: '/get/restaurant/details',
    getMySubscription: '/user/subscription/plan',
    subscriptionLogs: '/user/subscription/logs',
    provoPackages: '/provo/packages',
    provoCashTransfer: '/provo-cash/transfer',
    provoWallet: '/provo_wallet',
    provoPayment: '/purchase/provo/cash',
    getBilling: '/get/billing',
    addRestaurantRequest: '/user/restaurant/request',
    getRestaurantRequest: '/user/restaurant/request/logs',
    getMenu: '/get/restaurant/menu',
    contactUs: '/user/feedback',
    aboutUs: '/about',
    referal: '/get/referralcode',
    nearRes: '/get/restaurant/list/bymap',
    lootBoxPurchaseByCoin: '/lootbox/purchase/bycoin',
    lootBoxPurchaseByCard: '/purchase/lootbox',
    restaurantList: '/get/restaurant/list',
    categoryList: '/category/list',
    rewardList: '/get/reward',
    rewardDetail: '/get/reward/detail',
    redeem: '/reward/redeem',
    history: '/get/history/list',
    historyDetail: '/history/details',
    recommendedRestaurantList: '/get/recommended/restaurant/list',
    notifications: '/user/notify',
    lootBoxDraw: '/get/lootbox',
    lootBoxes: '/get/lootbox/prizes',
    claimLootbox: '/get/lootbox/claim',
  },
};

// for dev env
// export const base_url =
// 'https://devu2.onlinetestingserver.com/nathangainer/wp-json/theden/v1';

// for live env
// export const base_url =
//   'https://custom-dev.onlinetestingserver.com/provo/public/api';

// export const base_url = 'https://team81.customdev.solutions/provo/public/api'; //new URL
export const base_url = 'https://team81.customdev.solutions/provo/api'; //Latest new URL
// export const imageUrl = 'https://custom-dev.onlinetestingserver.com/';
export const imageUrl = 'https://team81.customdev.solutions/';

// export const imageUrl = 'https://team81.customdev.solutions/'; //new URL
