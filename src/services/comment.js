import { post } from '../utils/request';

/* create comment  */
export const createComment = (params) => post(`/api/comments`, params);

// 点赞接口
export const likes = (params) => post('/api/likes', params);

// 取消点赞
export const cancelLike = (params) => post('/api/likes/cancel', params);