import router from '../router';
import { getUserToken, setUserToken } from './user';
router.beforeEach((to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    
    if(getUserToken()) {

        if(to.path === '/login') {
            next('/');
        } else {
            next()
        }

    } else if(to.path === '/login'){
        next()

    } else {
        next({
            path: 'login'
        })
    }
})

export default {
    getUserToken,
    setUserToken
}