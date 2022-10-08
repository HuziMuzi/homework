import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import 'antd/dist/antd.css';
import {Slider} from "antd";
import './SuperDoubleRange.css'


type SuperDoubleRangePropsType =  {
    onChangeDoubleRange?: (value: [number, number]) => void
    value?: [number, number]
    min? : number,
    max? : number,
    step? : number
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeDoubleRange, value,
        min,max,step
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeInput = (value: [number, number]) => {
        if (onChangeDoubleRange) {
            onChangeDoubleRange(value)
        }
    }

    return (
        <>
            <div className={'slider'}>
                <Slider range
                        step={step ? step : 1}
                        value={value}
                        onChange={onChangeInput}
                        className={'slider'}
                />
            </div>
        </>
    )
}

export default SuperDoubleRange
