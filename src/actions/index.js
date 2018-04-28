export function numberPressed(param) {
    return  async (dispatch) => {
        dispatch({
            type: "NumberPressed",
            payload: { value: param.value },
        });
    }
}

export function operationPressed(param) {
    return  async (dispatch) => {
        dispatch({
            type: "OperationPressed",
            payload: {
                value: param.value,
                text: param.text
            },
        });
    }
}

export function equalsPressed(param) {
    return async (dispatch) => {
        dispatch({
            type: "EqualsPressed"
        });
    }
}

export function decimalPressed(param) {
    return  (dispatch) => {
        dispatch({
            type: "DecimalPressed",
            payload: {
                value: param.value,
                text: param.text
            },
        });
    }
}

export function clearPressed() {
    return async (dispatch) => {
        dispatch({
            type: "ClearPressed",
        });
    }
}

export function clearOnePressed() {
    return async (dispatch) => {
        dispatch({
            type: "CEPressed",
        });
    }
}