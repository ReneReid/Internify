import NavBarMain from "./components/organisms/NavbarMain"
import HeaderHomeGuest from "./components/organisms/HeaderHomeGuest"
import ContainerHomeGuest from "./components/organisms/ContainerHomeGuest"
import FooterHomeGuest from "./components/organisms/FooterHomeGuest"

function App() {
  return (
    <div className="home_guest">
      <NavBarMain />
      <HeaderHomeGuest />
      <ContainerHomeGuest />
      <FooterHomeGuest />
    </div>
  );
}

export default App;
