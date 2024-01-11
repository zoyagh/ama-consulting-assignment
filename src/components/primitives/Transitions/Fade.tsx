import type {FC, PropsWithChildren, ReactElement} from 'react';

import {cloneElement} from 'react';
import {Transition} from 'react-transition-group';

interface FadeProps extends PropsWithChildren {
  in: boolean;
  duration?: number;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

export const Fade: FC<FadeProps> = ({
  children,
  in: inProp,
  duration = 300,
  mountOnEnter = true,
  unmountOnExit = true,
}) => (
  <Transition
    in={inProp}
    timeout={duration}
    mountOnEnter={mountOnEnter}
    unmountOnExit={unmountOnExit}
    onEnter={(node: HTMLElement) => node.offsetHeight}
  >
    {(state: string) => {
      return (
        children &&
        cloneElement(children as ReactElement, {
          style: {
            ...{
              transition: `opacity ${duration}ms ease-in-out`,
              opacity:
                {
                  entering: 1,
                  entered: 1,
                  exiting: 0,
                  exited: 0,
                }[state] ?? 0,
              visibility:
                {
                  entering: 'visible',
                  entered: 'visible',
                  exiting: 'visible',
                  exited: 'hidden',
                }[state] ?? 'hidden',
            },
          },
        })
      );
    }}
  </Transition>
);
