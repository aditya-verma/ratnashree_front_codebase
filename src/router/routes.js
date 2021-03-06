
const routes = [
  {
    path: '/',
    alias: ['/home/'],
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') }
    ]
  },

  {
    path: '/categories/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CategoriesPage.vue') }
    ]
  },

  {
    path: '/studio/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/StudioPage.vue') }
    ]
  },

  {
    path: '/product/',
    component: () => import('layouts/CommonLayout.vue'),
    children: [
      {
        name: 'Product',
        path: '',
        component: () => import('pages/ProductDetailsPage.vue')
      }
    ]
  },

  {
    path: '/me/dashboard/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/me/DashboardPage.vue') }
    ]
  },

  {
    path: '/me/profile/edit/',
    component: () => import('layouts/CommonLayout.vue'),
    children: [
      { path: '', component: () => import('pages/me/profile/edit.vue') }
    ]
  },

  {
    path: '/checkout/cart/',
    component: () => import('layouts/CommonLayout.vue'),
    children: [
      {
        name: 'Cart',
        path: '',
        component: () => import('pages/checkout/CheckoutCartPage.vue')
      }
    ]
  },

  {
    path: '/checkout/address/',
    component: () => import('layouts/CommonLayout.vue'),
    children: [
      {
        name: 'Address',
        path: '',
        component: () => import('pages/checkout/CheckoutAddressPage.vue')
      }
    ]
  },

  {
    path: '/orders/',
    component: () => import('layouts/CommonLayout.vue'),
    children: [
      {
        name: 'Orders',
        path: '',
        component: () => import('pages/order/OrdersPage.vue')
      }
    ]
  },

  {
    path: '/orders/item-details/',
    component: () => import('layouts/CommonLayout.vue'),
    children: [
      {
        name: 'OrderItemDetails',
        path: '',
        component: () => import('pages/order/OrderItemDetailsPage.vue')
      }
    ]
  },

  {
    path: '/authentication/login/',
    component: () => import('layouts/CommonLayout.vue'),
    children: [
      {
        name: 'LoginPage',
        path: '',
        component: () => import('pages/authentication/LoginPage.vue')
      }
    ]
  },

  {
    path: '/authentication/verify-otp/',
    component: () => import('layouts/CommonLayout.vue'),
    children: [
      {
        name: 'OtpPage',
        path: '',
        component: () => import('pages/authentication/OtpPage.vue')
      }
    ]
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404Page.vue')
  }
]

export default routes
