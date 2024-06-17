import { GalleryPage } from "./pages/galleryPage/GalleryPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
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
