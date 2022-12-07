import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, initStateType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, initStateType >(state => state.theme) // useSelector

    const dispatch = useDispatch()
    const onChangeCallback = (value : string) => {
        dispatch(changeThemeC(value))
    }
    console.log(theme)

    return (
        <div className={s[theme.variant]} >
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <div>

                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme.variant}
                    onChangeOption={onChangeCallback}
                />

            </div>
            <hr/>
        </div>
    );
}

export default HW12;
