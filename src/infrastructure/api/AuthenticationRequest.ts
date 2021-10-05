import { ILoginRequest } from '@domain/auth';
import axios from './index';

export const _loginRequest: ILoginRequest['loginRequest'] = (payload) =>
    axios.post('v1/admins/login/admin', payload).then((res) => res.data);
