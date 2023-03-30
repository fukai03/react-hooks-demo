# README

### useState
```jsx
const [state, setState] = useState(initialState)
```
- state，目的提供给 UI ，作为渲染视图的数据源。
- setState, 改变 state 的函数，可以理解为推动函数组件渲染的渲染函数。
- initialState, 有两种情况，第一种情况是非函数，将作为 state 初始化的值。 第二种情况是函数，函数的返回值作为 useState 初始化的值。

注意：
-  在函数组件一次执行上下文中，state 的值是固定不变的
-  如果两次 setState 传入相同的 state 值，那么组件就不会更新
-  执行相同的setState，会进行合并
-  当触发 setState 在当前执行上下文中获取不到最新的 state, 只有再下一次组件 rerender 中才能获取到。