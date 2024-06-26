import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Grid } from '@mui/material';
import { ModalButton, ModalInput } from 'components';

import { sendComment } from 'store/ducks/images';
import * as Yup from 'yup';

interface IInputValues {
    name: string;
    text: string;
}

export const CommentForm = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Minimum name length is 3 characters')
            .max(50, 'Maximum name length 50 characters')
            .required('The "Your name" field is required'),
        text: Yup.string()
            .min(3, 'Minimum comment length is 3 characters')
            .max(500, 'Maximum comment length is 500 characters')
            .required('The "Your comment" field is required')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            text: ''
        },
        validationSchema: validationSchema,
        onSubmit: (commentInfo: IInputValues) => {
            dispatch(sendComment({ commentInfo, id: id as string }));
        }
    });

    return (
        <Grid paddingX={2} paddingY={1} item xs={1} sm={7}>
            <form onSubmit={formik.handleSubmit}>
                <ModalInput
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={
                        formik.touched.name && formik.errors.name
                            ? formik.errors.name
                            : undefined
                    }
                    placeholder="Ваше имя"
                    {...formik.getFieldProps('name')}
                />
                <ModalInput
                    error={formik.touched.text && Boolean(formik.errors.text)}
                    helperText={
                        formik.touched.text && formik.errors.text
                            ? formik.errors.text
                            : undefined
                    }
                    placeholder="Ваш комментарий"
                    {...formik.getFieldProps('text')}
                />
                <ModalButton type="submit" />
            </form>
        </Grid>
    );
};
