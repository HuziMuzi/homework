import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Col, Row} from "antd";
import './HW11.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)


    const onChangeDoubleRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
        // console.log(value[0])
    }

    return (
        <div >
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={'blockInput'}>
                <div>
                    <span className={'input'}>{value1}</span>
                    <SuperRange
                        // сделать так чтоб value1 изменялось
                        onChangeRange={(currVal) => setValue1(currVal)}
                        value={value1}

                    />
                </div>

                <Row wrap={false}>
                    <Col flex="none">
                        <span className={'input'}>{value1}</span>
                    </Col>
                    <Col flex="0 0 150px">
                        <SuperDoubleRange
                            // сделать так чтоб value1 и value2 изменялось
                            onChangeDoubleRange={onChangeDoubleRange}
                            value={[value1, value2]}
                        />
                    </Col>
                    <Col flex="none">
                        <span>{value2}</span>
                    </Col>
                </Row>

            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
