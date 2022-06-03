import { useState } from 'react'; 

import ReactColorful from '../../components/ReactColorful';
import PresetColors from '../../components/PresetColors';
import { useColors } from '../../hook/useColors';
import * as S from './styles';

const Home = () => {
  const { addToPreset, color, setColor, selectColor } = useColors();
  return (
    <S.Wrapper>
      <h1>A Custom Color Picker with react-color</h1>

      <ReactColorful />
      <PresetColors />

    </S.Wrapper>
  )
}

export default Home;
