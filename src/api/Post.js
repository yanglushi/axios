import fetch from '../http/Http';
import {baseURL} from './AIP'

const config = {
    baseURL: baseURL,
    method: 'post',
    suffix:false,
    token:false
};
/*获取信息*/
export function websiteIndex(params) {
    return fetch({
        url: '/api/v1/openData/getGoodsInfo',
        data:params,
        ...config
    });
}