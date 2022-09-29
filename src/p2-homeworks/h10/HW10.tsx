import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import './HW10.css'

export type loadingType = {
    isLoading: boolean
}

function HW10() {

    // useSelector, useDispatch
    // const loading = false
    const loading = useSelector<AppStoreType, loadingType>(state => state.loading)
    console.log(loading)
    let dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    // <div>крутилка...</div>
                    <div className="loader"></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
