import { Box, Grid, Modal, Typography } from '@mui/material';

import { GalleryImage, ModalButton, ModalInput } from '../../index';
import { StyledModalWrapper } from '../../../styled/galleryPage/imageModal/StyledModalWrapper';
import { StyledModalCloseButton } from '../../../styled/galleryPage/imageModal/StyledModalCloseButton';

import { variables } from '../../../styled/variables';

export const ImageModal = ({ open, onCloseImageModal }) => (
    <Modal open={open}>
        <StyledModalWrapper>
            <StyledModalCloseButton onClick={onCloseImageModal} />
            <Grid container columns={{ xs: 1, sm: 12 }}>
                <Grid paddingX={{ sm: 2, xs: 0 }} item xs={1} sm={7}>
                    <GalleryImage
                        src={
                            'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'
                        }
                    />
                </Grid>
                <Grid
                    paddingTop={{ xs: 3, sm: 2 }}
                    paddingBottom={{ xs: 4, sm: 0 }}
                    paddingX={{ xs: 2, sm: 0 }}
                    item
                    xs={1}
                    sm={5}
                >
                    <Box>
                        <Typography
                            color={variables.color.secondary}
                            fontSize={variables.fontSize.md}
                        >
                            18.12.2019
                        </Typography>
                        <Typography
                            color={variables.color.primary}
                            fontSize={variables.fontSize.md}
                        >
                            Отличное фото
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            color={variables.color.secondary}
                            fontSize={variables.fontSize.md}
                        >
                            18.12.2019
                        </Typography>
                        <Typography
                            color={variables.color.primary}
                            fontSize={variables.fontSize.md}
                        >
                            Я тут был, очень понравилось
                        </Typography>
                    </Box>
                </Grid>
                <Grid paddingX={2} paddingY={1} item xs={1} sm={7}>
                    <ModalInput placeholder="Ваше имя" />
                    <ModalInput placeholder="Ваш комментарий" />
                    <ModalButton />
                </Grid>
            </Grid>
        </StyledModalWrapper>
    </Modal>
);
