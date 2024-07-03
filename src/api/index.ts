import axios from 'api/axios';
import { ICommentInfo } from 'store/ducks/images';

export const fetchImagesApi = async () => {
    const response = await axios.get('/api/images');
    return response.data;
};

export const fetchImageDetailsApi = async (id: string) => {
    const response = await axios.get(`/api/images/${id}`);
    return response.data;
};

export const sendCommentApi = async (id: string, commentInfo: ICommentInfo) => {
    const response = await axios.post(
        `/api/images/${id}/comments`,
        commentInfo
    );
    return response.data;
};
