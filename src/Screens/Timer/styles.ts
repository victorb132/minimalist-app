import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TimerText = styled.Text.attrs({
  accessibilityRole: 'timer',
  accessibilityLiveRegion: 'assertive',
  importantForAccessibility: 'yes'
})`
  font-size: 24px;
`;