import { GalleryPage } from "./pages/galleryPage/GalleryPage";
import { Footer } from "./pages/galleryPage/components/footer/Footer";
import { Header } from "./pages/galleryPage/components/header/Header";
import { AppWrapper } from "./styled/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Header />
      <GalleryPage />
      <Footer />
    </AppWrapper>
  );
}

export default App;
