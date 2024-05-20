import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const expiration = localStorage.getItem('expiration');
    
    const expiresAt = new Date(expiration);
    const now = new Date();
    
    return expiresAt.getTime()-now.getTime();
}

export function getAuthToken() {
    const token = localStorage.getItem('token');
    const duration = getTokenDuration();

    if(!token) {
        return null;
    }

    if(duration<0) {
        return 'EXPIRED';
    }
    return token;
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if(!token) {
        return redirect('/auth?mode=login');
    }

    return null;
}