import axios from "axios";
import { push } from "connected-react-router";

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

export const login = (email, password) => async (dispatch) => {

    const loginInfo = {
        email: email,
        password: password
    }
    

    try {
        const response = await axios.post(`${baseURL}/login`, loginInfo)

        window.localStorage.setItem("token", response.data.token);

        dispatch(push("/feed"))

    } catch (error) {
        window.alert("Erro no login")
    }
}
