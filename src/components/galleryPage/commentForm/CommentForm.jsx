import { Grid } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ModalButton } from '../modalButton/ModalButton';
import { ModalInput } from '../modalInput/ModalInput';

import { sendComment } from '../../../store/ducks/images';

export const CommentForm = () => {
    const dispatch = useDispatch();
    const id = useParams();

    const [commentInfo, setCommentInfo] = useState({ name: '', text: '' });

    const handleNameChange = (e) => {
        setCommentInfo((exValues) => ({ ...exValues, name: e.target.value }));
    };

    const handleTextChange = (e) => {
        setCommentInfo((exValues) => ({ ...exValues, text: e.target.value }));
    };

    const handleSendComment = () => {
        dispatch(sendComment({commentInfo, id}));
    };

    return (
        <Grid paddingX={2} paddingY={1} item xs={1} sm={7}>
            <ModalInput
                value={commentInfo.name}
                onInputChange={handleNameChange}
                placeholder="Ваше имя"
            />
            <ModalInput
                value={commentInfo.text}
                onInputChange={handleTextChange}
                placeholder="Ваш комментарий"
            />
            <ModalButton onButtonClick={handleSendComment} />
        </Grid>
    );
};
