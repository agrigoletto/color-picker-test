import { HexColorPicker } from "react-colorful";
import { useColors } from "../../hook/useColors";

import * as S from './styles';

const ReactColorFul = () => {
  const { addToPreset, color, setColor } = useColors();

  function handleAddPreset() {
    addToPreset(color);
  }

  return (
    <S.Wrapper>
      <HexColorPicker color={color} onChange={setColor} />

      <S.InputWrapper>
        <S.ColorInput color={color} onChange={setColor} prefixed/>
        <S.Button onClick={handleAddPreset}>Add as Preset</S.Button>
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default ReactColorFul;
