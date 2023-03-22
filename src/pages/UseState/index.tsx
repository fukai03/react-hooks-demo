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
