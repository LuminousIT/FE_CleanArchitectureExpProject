import { ICardSetupRequest } from '@domain/card-setup';
import axios from './index';

export const _getCardTypeRequest: ICardSetupRequest['getCardTypeRequest'] = () =>
    axios.get(`v1/admins/get/card-types/-/-/-`).then((res) => res.data);

export const _createCardTypeRequest: ICardSetupRequest['createCardTypeRequest'] = (payload) =>
    axios.post('v1/admins/create/card-type', payload).then((res) => res.data);
