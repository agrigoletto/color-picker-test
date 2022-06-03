import { useColors } from '../../hook/useColors';
import * as S from './styles';

const PresetColors = () => {
  const { presetColors, setColor } = useColors();
  const hasColors = presetColors.some(c => c !== '');

  return (
    <S.Wrapper>
      {presetColors.map((color, index) => (
        <S.Content key={`${color}-${index}`}>
          {color === '' ? (
            <S.EmptyColor hasColors={hasColors} />
          ) : (
            <S.Color color={color} onClick={() => setColor(color)} />
          )}
          <S.Label>
            {color}
          </S.Label>
        </S.Content>
      ))}
    </S.Wrapper>
  );
}

export default PresetColors;
