import React, {ChangeEvent} from 'react'
import 'antd/dist/antd.css';
import {Slider} from "antd";
import './SuperDoubleRange.css'

type SuperDoubleRangePropsType = {
    onChangeDoubleRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

type value = number

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeDoubleRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {

        if (onChangeDoubleRange) {
            // onChangeDoubleRange([value1,value2])
        }
    }


    const onChange = (value:  [number, number]) => {


        onChangeDoubleRange && onChangeDoubleRange(value)
    };
    return (
        <>
            <div className={'slider'}>
                <Slider range
                        step={1}
                        defaultValue={[20, 50]}
                        value={value}
                        onChange={onChange}
                        // onAfterChange={onAfterChange}
                        className={'slider'} />
            </div>
        </>
    )
}

export default SuperDoubleRange
