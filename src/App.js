import logo from './logo.svg';
import './App.css';
import Side from './Components/Side';
import { Box, Flex } from '@chakra-ui/react';
import RenderPage from './Components/RenderPage';
import bgImage from "./Images/bgImage.png"
import MobSide from './Components/MobSide';





function App() {
  return (
    <Box>
      <Flex backgroundImage={`url(${bgImage})`}
        height={['auto','100%','100%','92vh']}
        backgroundSize="cover"
        backgroundPosition="center"
        flexDirection={['column','column','column','row']}
        backgroundRepeat="no-repeat">
        <Box w={'20%'} display={['none','none','none','block']}>
          {/* <MobSide /> */}
          <Side />
        </Box>
        <Box  display={['block','block','block','none']}>
          <MobSide />
        </Box>
        <Box w={['100%','100%','100%','80%']}>
          
          <RenderPage />
        </Box>
      </Flex>
      <Box display={['none','none','none','block']} height={'8vh'} bgColor={'rgba(243, 0, 80, 1)'} position={'sticky'} bottom={"0px"}>

      </Box>
    </Box>
  );
}

export default App;
