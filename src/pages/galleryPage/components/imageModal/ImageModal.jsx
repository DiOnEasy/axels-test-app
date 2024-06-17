import { Box, Grid, Modal, Typography } from "@mui/material";
import { Image } from "../GalleryImage/GalleryImage";
import { ModalInput } from "../modalInput/ModalInput";
import { ModalButton } from "../modalButton/ModalButton";
import { StyledModalCloseButton, StyledModalWrapper } from "./StyledImageModal";

export const ImageModal = ({ open, handleClose }) => {
  return (
    <Modal open={open}>
      <StyledModalWrapper>
        <StyledModalCloseButton onClick={handleClose} />
        <Grid container columns={{ lg: 12 }}>
          <Grid paddingX={2} item xs={12} md={7}>
            <Image
              src={
                "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
              }
            />
          </Grid>
          <Grid paddingTop={2} item xs={12} md={5}>
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
          <Grid paddingX={2} paddingY={1} item xs={12} md={7}>
            <ModalInput placeholder={"Ваше имя"} />
            <ModalInput placeholder={"Ваш комментарий"} />
            <ModalButton />
          </Grid>
        </Grid>
      </StyledModalWrapper>
    </Modal>
  );
};
