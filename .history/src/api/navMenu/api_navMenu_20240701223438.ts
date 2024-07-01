/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-07-01 22:16:04
 */
import { requestInstance } from '..';
/**
 * @description 获取导航菜单列表
 * @param {number|undefined} id
 * @returns {AxiosPromise<any>}
 */
export const apiNavMenuGet = (id: number | undefined) => {
  return requestInstance({
    url: '/navMenu',
    method: 'GET',
    params: {
      id: id,
      type: import.meta.env.VITE_PLATFORM
    }
  });
};
