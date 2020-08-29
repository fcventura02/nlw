import api from "./api";

interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export async function sigIn (email: string, password: string): Promise<Response> {
    const res = await api.post('/user/auth', {
            email,
            password,
        })

    return res.data
}