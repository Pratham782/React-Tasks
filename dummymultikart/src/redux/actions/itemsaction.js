import axios from "axios";

export const itemsaction = () => async (dispatch) => {
    try {
        dispatch({ type: "datas_request" });
        let { data } = await axios.get('https://fakestoreapi.com/products?limit=15');
        dispatch({ type: "datas_success", payload: data });
    }
    catch (error) {
        dispatch({ type: "datas_fail", payload: error.message });
    }
}