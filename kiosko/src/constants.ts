export const appUrls = {
  categories: '/categories',
  chat: '/chat',
  home: '/',
  invite: '/invite',
  memberships: '/memberships',
  privacy: '/privacy-policy',

  services: {
    index: '/services',
    details: (id: string | number) => `/services/${id}`,
    reviews: (id: string | number) => `/services/${id}/reviews`,
  },

  account: {
    index: '/account',
    deliverys: '/account/deliverys',
    changePassword: '/account/change-password',
    invoices: {
      index: '/account/invoices',
      details: (id: string | number) => `/account/invoices/${id}`,
    },
    reviews: '/account/reviews',
  },
  dashboard: {
    index: '/dashboard',
    services: {
      index: '/dashboard/services',
      add: '/dashboard/services/add',
      details: (id: string | number) => `/dashboard/services/${id}`,
    },
    bookings: '/dashboard/bookings',
    reviews: '/dashboard/reviews',
    invoices: {
      index: '/dashboard/invoices',
      create: '/dashboard/invoices/create',
      details: (id: string | number) => `/dashboard/invoices/${id}`,
    },
    getpaid: '/dashboard/get-paid',
  },
  login: {
    index: '/login',
    resetPassword: '/login/reset-password',
  },
  signup: {
    index: '/signup',
    verify: '/signup/verify',
  },
} as const

export const CATEGORIES_PATH = '/categories'
export const CHAT_PATH = '/chat'
export const HOME_PATH = '/'
export const INVITE_PATH = '/invite'
export const LOGIN_PATH = '/login'
export const MEMBERSHIPS_PATH = '/memberships'
export const PRIVACY_PATH = '/privacy-policy'
export const RESET_PASSWORD_PATH = `${LOGIN_PATH}/reset-password`
export const SIGNUP_PATH = '/signup'
export const TERMS_PATH = '/terms-of-service'
export const VERIFY_PATH = `${SIGNUP_PATH}/verify`
export const SERVICES_PATH = '/services'
export const servicesDetailsPath = (id: number) => `${SERVICES_PATH}/${id}`
export const PRODUCTS_FILTERED_PATH = '/products/filtred'

export const ACCOUNT_PATH = '/account'
export const ACCOUNT_BOOKINGS_PATH = `${ACCOUNT_PATH}/bookings`
export const ACCOUNT_CHANGE_PASSWORD_PATH = `${ACCOUNT_PATH}/change-password`

export const DASHBOARD_PATH = '/dashboard'
export const DASHBOARD_SERVICES_PATH = `${DASHBOARD_PATH}/services`
export const DASHBOARD_SERVICES_ADD_PATH = `${DASHBOARD_SERVICES_PATH}/add`
export const dashboardServicesDetailsPath = (id: number) => `${DASHBOARD_SERVICES_PATH}/${id}`
export const DASHBOARD_BOOKING_PATH = `${DASHBOARD_PATH}/bookings`
export const DASHBOARD_REVIEWS_PATH = `${DASHBOARD_PATH}/reviews`
export const DASHBOARD_INVOICING_PATH = `${DASHBOARD_PATH}/invoicing`
export const DASHBOARD_GETPAID_PATH = `${DASHBOARD_PATH}/get-paid`

export const PROFILE_BOOKING_RECEIVED_PATH = `${DASHBOARD_BOOKING_PATH}/received`
export const PROFILE_BOOKING_SUBMITTED_PATH = `${DASHBOARD_BOOKING_PATH}/submitted`
export const PROFILE_CHANGE_PASSWORD_PATH = `${DASHBOARD_PATH}/change-password`
export const PROFILE_EDIT_PATH = `${DASHBOARD_PATH}/edit`
export const PROFILE_REVIEWS_RECEIVED_PATH = `${DASHBOARD_REVIEWS_PATH}/received`
export const PROFILE_REVIEWS_SUBMITTED_PATH = `${DASHBOARD_REVIEWS_PATH}/submitted`

// feature flags
export const CHAT_DISABLED = true
export const GETPAID_DISABLED = true
export const INVOICE_DISABLED = true
