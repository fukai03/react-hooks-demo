import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'React Hooks Demo',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: 'useState',
      path: '/useState',
      component: './UseState',
    },
    {
        name: ' useEffect',
        path: '/useEffect',
        component: './UseEffect',
    },
    {
        name: ' useLayoutEffect',
        path: '/useLayoutEffect',
        component: './UseLayoutEffect',
    },
    {
        name: ' useReducer',
        path: '/useReducer',
        component: './UseReducer',
    },
    {
        name: ' useCallback',
        path: '/useCallback',
        component: './UseCallback',
    },
  ],
  npmClient: 'pnpm',
});

