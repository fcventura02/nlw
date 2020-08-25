interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function sigIn(email: string, password: string): Promise<Response> {
    
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'asfsfsefsh534168ssg6446ghd6fh4d6h64',
                user: {
                    name: 'Homer Simpson',
                    email: 'filipe@gmail.com'
                }
            })
        }, 2000)
    });
}