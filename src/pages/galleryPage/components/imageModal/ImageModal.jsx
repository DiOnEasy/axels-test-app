import { Box, Grid, Modal, Typography } from "@mui/material";
import { ModalWrapper } from "../../../../styled/components/StyledModal";
import { Image } from "../Image/Image";
import { ModalInput } from "../modalInput/ModalInput";
import { ModalButton } from "../modalButton/ModalButton";
import { StyledModalCloseButton } from "../../../../styled/components/StyledModalCloseButton";

export const ImageModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalWrapper>
        <StyledModalCloseButton />
        <Grid container columns={{ lg: 12 }}>
          <Grid paddingX={2} item xs={12} md={7}>
            <Image
              src={
                "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
              }
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography color={"#C9C9C9"} fontSize={16}>
                18.12.2019
              </Typography>
              <Typography color={"#000000"} fontSize={16}>
                Отличное фото
              </Typography>
            </Box>
            <Box>
              <Typography color={"#C9C9C9"} fontSize={16}>
                18.12.2019
              </Typography>
              <Typography color={"#000000"} fontSize={16}>
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
      </ModalWrapper>
    </Modal>
  );
};
