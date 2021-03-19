
export const httpGetMethod = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(url);
            const json = await res.json();
            res.ok ? resolve(json) : reject(json);
        } catch(error) {
            throw error
        }
    });
}