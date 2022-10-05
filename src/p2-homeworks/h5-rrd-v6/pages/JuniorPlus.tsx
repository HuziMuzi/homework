import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import HW12 from "../../h12/HW12";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";

function PreJunior() {
    return (
        <div>
            <Provider store={store}>
            <HW12/>
            </Provider>
            Junior-plus
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз