import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import 'antd/dist/antd.css';
import {Slider, Switch} from "antd";
import './SuperDoubleRange.css'


type SuperDoubleRangePropsType =  {
    onChangeDoubleRange?: (value: [number, number]) => void
    value?: [number, number]
    setDisable: (cheked:boolean) => void
    step? : number
    disabled: boolean
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeDoubleRange, value,
        setDisable,disabled,step
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeInput = (value: [number, number]) => {
        if (onChangeDoubleRange) {
            onChangeDoubleRange(value)
        }
    }

    const onChangeDisabled = (checked: boolean) => {
        setDisable(checked)
    }



    return (
        <>
            <div className={'slider'}>
                <Slider range
                        step={step ? step : 1}
                        value={value}
                        onChange={onChangeInput}
                        className={'slider'}
                        disabled={disabled}
                />
               <Switch size="small" checked={disabled} onChange={onChangeDisabled} />
            </div>
        </>
    )
}

export default SuperDoubleRange
