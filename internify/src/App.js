import NavBarMain from "./components/NavbarMain"
import HeaderHomeGuest from "./components/HeaderHomeGuest"
import ContainerHomeGuest from "./components/ContainerHomeGuest"
import FooterHomeGuest from "./components/FooterHomeGuest"
import "./App.css";

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
