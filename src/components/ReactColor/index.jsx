import { useState } from 'react';
import { CustomPicker } from "react-color";
import tinyColor from 'tinycolor2';
import {
  Hue,
  Saturation,
  EditableInput
} from 'react-color/lib/components/common';

import * as S from './styles';

const ReactColor = ({ setColor, setBackgroundColor, ...props }) => {
  const [inputColor, setInputColor] = useState(props.hex);

  function handleChange(data) {
    const color = tinyColor(data).toHexString();

    setColor(color);
    setInputColor(color);
  }

  function handleEditableInputChange(data) {
    setInputColor(data);
    setColor(data);
  }

  return (
    <S.Wrapper>
      <S.SaturationWrapper>
        <Saturation
          {...props}
          onChange={handleChange}
          pointer={S.SaturationPicker}
        />
      </S.SaturationWrapper>
      <S.HueWrapper>
        <Hue
          {...props}
          direction="vertical"
          onChange={handleChange}
          pointer={S.HuePicker}
        />
      </S.HueWrapper>
      <EditableInput
        style={{
          wrap: {
            width: 200,
          },
          input: {
            width: "100%",
            height: 24,
            border: "1px solid #E2E2E2"
          }
        }}
        value={inputColor}
        onChange={data => handleEditableInputChange(data)}
      />
      <S.Button onClick={() => setBackgroundColor(tinyColor(props.rgb).toHexString())}>
        Add as preset
      </S.Button>
    </S.Wrapper>
  );
}

export default CustomPicker(ReactColor);