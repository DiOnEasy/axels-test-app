import { Box, Grid, Modal, Typography } from "@mui/material";
import { Image } from "../galleryImage/GalleryImage";
import { ModalInput } from "../modalInput/ModalInput";
import { ModalButton } from "../modalButton/ModalButton";
import { StyledModalWrapper } from "../../../styled/galleryPage/imageModal/StyledModalWrapper";
import { StyledModalCloseButton } from "../../../styled/galleryPage/imageModal/StyledModalCloseButton";

export const ImageModal = ({ open, onCloseImageModal }) => {
  return (
    <Modal open={open}>
      <StyledModalWrapper>
        <StyledModalCloseButton onClick={onCloseImageModal} />
        <Grid container columns={{ xs: 1, sm: 12 }}>
          <Grid paddingX={{ sm: 2, xs: 0 }} item xs={1} sm={7}>
            <Image
              src={
                "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
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
              <Typography color={"var(--text-color-secondary)"} fontSize={16}>
                18.12.2019
              </Typography>
              <Typography color={"var(--text-color)"} fontSize={16}>
                Отличное фото
              </Typography>
            </Box>
            <Box>
              <Typography color={"var(--text-color-secondary)"} fontSize={16}>
                18.12.2019
              </Typography>
              <Typography color={"var(--text-color)"} fontSize={16}>
                Я тут был, очень понравилось
              </Typography>
            </Box>
          </Grid>
          <Grid paddingX={2} paddingY={1} item xs={1} sm={7}>
            <ModalInput placeholder={"Ваше имя"} />
            <ModalInput placeholder={"Ваш комментарий"} />
            <ModalButton />
          </Grid>
        </Grid>
      </StyledModalWrapper>
    </Modal>
  );
};
