import "./App.css";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const global = useGlobalContext();
  console.log(global);
  
  const displayData = () => {
    switch(active)
    {
      case 1: return <Dashboard/>;
      case 2: return <Dashboard/>;
      case 3: return <Income/>;
      case 4: return <Expenses/>;
      default: return <Dashboard/>;
    }
  }

  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main
        className="flex-1 z-10 opacity-95 bg-[rgba(254,254,254,0.78)] border-4 border-[#ffffff] rounded-2xl backdrop-blur-lg overflow-auto overflow-x-hidden">
          {
            displayData()
          }
        </main>
      </MainLayout>
      {/* <Orb/> */}
      {orbMemo}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background-image: url(${(props) => props.bg});
  position: relative;
  // main {
  //   flex: 1;
  //   background: rgba(252, 246, 249, 0.78);
  //   border: 3px solid #ffffff;
  //   backdrop-filter: blur(4.5px);
  //   border-radius: 32px;
  //   overflow-x: hidden;
  //   &::-webkit-scrollbar {
  //     width: 0;
  //   }
  // }
`;

export default App;