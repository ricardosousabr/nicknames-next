import styled from "styled-components";

export const Wrapper = styled.div`
  background: #282c33;
  padding: 50px 0;
`;

export const BoxSwitch = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Switch = styled.div<{ enabled: boolean }>`
  background: white;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const SwitchSpan = styled.span<{ enabled: boolean }>`
 width: 30px;
height: 30px;
`

