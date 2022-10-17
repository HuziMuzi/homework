import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestAPI";

const Request = () => {

    const [check, setCheck] = useState(false)
    const [resultRequest, setRequltRequest] = useState<any>()

    const sendData = () => {

            requestAPI.sendRequest(check)
                .then(resolve => {
                    setRequltRequest(resolve.data.errorText)
                })
                .catch(error => {
                    setRequltRequest(error.response ? error.response.data.errorText : error.message);
                })

    }

    const clickCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }

    return (
        <div>
            <SuperButton
                onClick={sendData}
            >
                Отправить
            </SuperButton>
            <SuperCheckbox
                checked={check}
                onChange={clickCheckBox}
            />
            <div>Ответ: {resultRequest}</div>
        </div>
    );
};

export default Request;