
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  // {
  //   path: '/Usuarios',
  //   component: () => import('pages/Usser.vue')
  // },
  {
    path: '/Administrador',
    component: () => import('pages/Staff.vue')
  },
  {
    path: '/Player',
    component: () => import('pages/Play.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
