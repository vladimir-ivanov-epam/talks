import { Buffer } from 'buffer';

const encode = (value) => {
    return new Buffer(value).toString('base64');
};

export const loginAsync = async (login, password) => {
    let base64 = encode(`${login}:${password}`);
    try {
        let result = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64
            },
        });
        if (result.status === 200) {
            return {
                user: JSON.parse(result._bodyInit),
                auth: base64
            };
        } else {
            console.log("[LoginActions] result.status = " + JSON.stringify(result.status));
            return { error: `Failed to login with ${result.status}` };
        }
    } catch (error) {
        console.log("[LoginActions] error = " + JSON.stringify(error));
        return { error: `Failed to login with ${error}` };
    }
};
