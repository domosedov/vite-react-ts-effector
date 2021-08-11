import {
  root,
  createStore,
  createEvent,
  createEffect,
  createApi,
  guard,
} from "effector-root";
import { attachLogger } from "effector-logger/attach";

export const createCounter = () => {
  attachLogger(root);

  const reset = createEvent();
  const $count = createStore(0);
  const { inc, dec, add, sub } = createApi($count, {
    inc: (count) => count + 1,
    dec: (count) => count - 1,
    add: (count, add: number) => count + add,
    sub: (count, sub: number) => count - sub,
  });

  const logFx = createEffect<number, void>((count) => {
    console.log("Count is bigger than 100", count);
  });

  guard({
    clock: $count,
    filter: (count) => count > 100,
    target: logFx,
  });

  return { $count, reset, inc, dec, add, sub };
};
