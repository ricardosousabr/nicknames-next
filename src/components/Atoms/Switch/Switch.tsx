import { useState } from "react";
import { Wrapper, BoxSwitch, Switch, SwitchSpan } from "./style";

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
            <div>
              <SwitchSpan enabled={swichtSelector}>
                <svg
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    stroke="green"
                    stroke-width="4"
                    fill="yellow"
                  />
                </svg>
              </SwitchSpan>
              <SwitchSpan enabled={swichtSelector}>
                <svg
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    stroke="green"
                    stroke-width="4"
                    fill="red"
                  />
                </svg>
              </SwitchSpan>
            </div>
          ) : (
            <div>
              <SwitchSpan enabled={swichtSelector}>
                <svg
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    stroke="green"
                    stroke-width="4"
                    fill="red"
                  />
                </svg>
              </SwitchSpan>
              <SwitchSpan enabled={swichtSelector}>
                <svg
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    stroke="green"
                    stroke-width="4"
                    fill="yellow"
                  />
                </svg>
              </SwitchSpan>
            </div>
          )}
        </Switch>
      </BoxSwitch>{" "}
    </Wrapper>
  );
}
