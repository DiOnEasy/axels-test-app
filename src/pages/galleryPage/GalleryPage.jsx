import { Grid } from "@mui/material";
import { Image } from "./components/GalleryImage/GalleryImage";
import { useState } from "react";
import { ImageModal } from "./components/imageModal/ImageModal";

export const GalleryPage = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const images = [
    {
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      url: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
  ];

  return (
    <>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={2}
        columns={{ xs: 4, md: 8, lg: 12 }}
      >
        {images &&
          images.map((img, index) => (
            <Grid key={index} item xs={4}>
              <Image src={img.url} />
            </Grid>
          ))}
      </Grid>
      <ImageModal open={modalOpen} handleClose={handleClose} />
    </>
  );
};
