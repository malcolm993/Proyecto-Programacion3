type NavigateFunction = (to: string) => void;

export let navigate: NavigateFunction = () => {};

export const setNavigate = (fn: NavigateFunction) => {
  navigate = fn;
};