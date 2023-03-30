import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import { Button } from 'antd';



const Index: React.FC = () => {
  const [state, setState] = useState(0)
  const [ number, setNumber ] = React.useState(0)
  const [ timer, setTimer ] = React.useState(0)
  const [person, setPerson] = useState({name: 'John', age: 20})

  const handleClick = () => {
    let interval = setInterval(()=>{
      console.log('timer', number);
      // 此时 number 一直都是 0
      setNumber(number + 1 ) 
    },1000)
    setTimer(interval)
    return interval
  }
  // question: 为什么person的name和age不会被更新？
  // answer: 因为person是一个对象，对象是引用类型，当你改变person的值时，你只是改变了person的引用，而不是改变了person的值
  // q: 怎么样正确修改person的属性
  // a: 1. 使用useReducer
  //    2. 使用展开运算符
  //  3. 使用Object.assign
  //  4. 使用lodash的set方法
  //  5. 使用immer
  //  6. 使用immutable.js
  // 7. 使用mobx

  const personChange = () => {
    person.name = 'Tom'
    person.age = 30
    setPerson(person)
  }

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <a href="https://react.dev/reference/react/useState" target='_blank' rel="noreferrer" >useState hook</a>
        <Button 
          onClick={() => {
            setState(state + 1)
            setState(state + 1)
            setState(state + 1)
            console.log('state', state);// state is not updated yet
          }}
          style={{width: '150px'}}
        >Add Number</Button>
        <span>state:{state}</span>

        <Button onClick={handleClick} style={{width: '150px'}} >Number {number}</Button>
        <Button onClick={() => clearInterval(timer)} style={{width: '150px'}} >Clear Interval</Button>

        <span>{person.name}-{person.age}</span>
        <Button onClick={personChange} style={{width: '150px'}} >Set Person</Button>
      </div>
    </PageContainer>
  );
};

export default Index;
