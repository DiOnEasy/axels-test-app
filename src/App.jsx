import { GalleryPage } from "./pages/galleryPage/GalleryPage";
import { Footer, Header } from "./components";
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
