import React from 'react'

import HW12 from "../../h12/HW12";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";
import HW13 from "../../h13/HW13";

function PreJunior() {
    return (
        <div>
            <Provider store={store}>
                <HW12/>
                <HW13/>
            </Provider>
            Junior-plus
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз