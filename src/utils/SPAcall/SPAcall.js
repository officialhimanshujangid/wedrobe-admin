
import { apiCall, apiCallUploadImage } from '../api';

const httpGet = async (url, params) =>
    await apiCall('GET', url, params);

const httpPost = async (url, params) =>
    await apiCall('POST', url, params);

const httpPatch = async (url, params) =>
    await apiCall('PATCH', url, params);

const httpPut = async (url, params) =>
    await apiCall('PUT', url, params);

const httpDelete = async (url, params) =>
    await apiCall('DELETE', url, params);

const httpUploadImage = async (url, params) =>
    await apiCallUploadImage('POST', url, params);

export { httpGet, httpPost, httpPatch, httpPut, httpDelete, httpUploadImage };
