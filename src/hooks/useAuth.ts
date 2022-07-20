import {useAppSelector} from '../utils/redux-utils';

export const useAuth = () => {
    const {email, token, id} = useAppSelector(state => state.auth)

    return {
        isAuth: !!email, email, token, id
    }
}