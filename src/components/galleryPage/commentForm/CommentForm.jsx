import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { Grid } from '@mui/material';
import { ModalButton, ModalInput } from 'components';

import { sendComment } from 'store/ducks/images';

export const CommentForm = () => {
    const dispatch = useDispatch();
    const id = useParams();

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
        onSubmit: (commentInfo) => {
            console.log('fsdklfjsld');
            dispatch(sendComment({ commentInfo, id }));
        }
    });

    return (
        <Grid paddingX={2} paddingY={1} item xs={1} sm={7}>
            <form onSubmit={formik.handleSubmit}>
                <ModalInput
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    placeholder="Ваше имя"
                />
                <ModalInput
                    name="text"
                    value={formik.values.text}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.text && Boolean(formik.errors.text)}
                    helperText={formik.touched.text && formik.errors.text}
                    placeholder="Ваш комментарий"
                />
                <ModalButton type="submit" />
            </form>
        </Grid>
    );
};
