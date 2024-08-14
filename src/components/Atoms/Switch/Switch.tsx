import { useState } from "react";
import { Wrapper, BoxSwitch, Switch, SwitchSpan } from "./style";
import Image from "next/image";


export default function Swicht() {
  const [swichtSelector, setSwichtSelector] = useState<boolean>(true);

  function controlSwitch() {
    setSwichtSelector(!swichtSelector);
  }
  return (
    <Wrapper>
      <BoxSwitch>
        <Switch enabled={swichtSelector} onClick={controlSwitch}>
          {swichtSelector ? (
            <>
              <SwitchSpan enabled={swichtSelector}>
                <Image src="/img/switch.png" width={20} height={20} alt="Picture of the author"/>
              </SwitchSpan>
              <SwitchSpan enabled={swichtSelector}>
                <Image src="/img/withe.png" width={20} height={20} alt="Picture of the author"/>
              </SwitchSpan>
            </>
          ) : (
            <>
              <SwitchSpan enabled={swichtSelector}>
                <Image src="/img/withe.png" width={20} height={20} alt="Picture of the author"/>
              </SwitchSpan>
              <SwitchSpan enabled={swichtSelector}>
                <Image src="/img/switch.png" width={20} height={20} alt="Picture of the author"/>
              </SwitchSpan>
            </>
          )}
        </Switch>
      </BoxSwitch>{" "}
    </Wrapper>
  );
}
