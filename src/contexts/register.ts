import api from "../services/api";

interface RegisterProps {
    name: string,
    lastname: string,
    avatar?: string,
    whatsapp?: string,
    email: string,
    password: string,
    bio?: string
}

const register = async (registerData: RegisterProps) => {

    const response = await api.post('/user', {
        name: registerData.name,
        lastname: registerData.lastname,
        avatar: "",
        whatsapp: "",
        email: registerData.email,
        password: registerData.password,
        bio: ""
    }).then(res => res.status).catch(err => err.status);
    return response
}

export default register;