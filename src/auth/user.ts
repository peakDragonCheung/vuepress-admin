
export function getUserToken() :string{
    let token : string;
    try {
        token = localStorage.getItem(import.meta.env.VITE_APP_USE_TOEKN as string) as string;
    } catch (error) {
        token = '';
    }
    return token;
}

export function setUserToken(token: string) :void {
    try {
        localStorage.setItem( import.meta.env.VITE_APP_USE_TOEKN as string , token);
    } catch (error) {
        console.error('存储token 出现错误')
    }
}

