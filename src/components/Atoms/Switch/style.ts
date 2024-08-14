import styled from "styled-components";

export const Wrapper = styled.div`
  background: #282c33;
  padding: 50px;
`;

export const BoxSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Switch = styled.div<{ enabled: boolean }>`
  background: white;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const SwitchSpan = styled.span<{ enabled: boolean }>`
  width: 15px;
  height: 15px;
`

