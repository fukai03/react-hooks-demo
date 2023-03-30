import React, { useCallback, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import styles from './index.less';
import MegaBoost from './MegaBoost';

const Index: React.FC = () => {
    const [count, setCount] = useState(0);

    function handleMegaBoost() {
        setCount((currentValue) => currentValue + 1234);
    }
    const handleClick = useCallback(handleMegaBoost, []);
    return (
        <PageContainer ghost>
            <div className={styles.container}>
                Count: {count}
                <Button
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    Click me!
                </Button>
                {/* <MegaBoost handleClick={handleMegaBoost} /> */}
                <MegaBoost handleClick={handleClick} />
            </div>
        </PageContainer>
    );
};

export default Index;
