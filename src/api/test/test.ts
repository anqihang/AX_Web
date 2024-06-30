/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-06-18 00:10:15
 */
import { requestInstance } from '..';
export function apiTestAdd(): void {
  return new Promise((resolve, reject) => {
    const response = requestInstance({});
    if (response) {
      resolve(1 + 1);
    } else {
      reject('error');
    }
  });
}
