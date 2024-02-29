export const changeHandler = (e: any, setState: any) => {
  setState((prevState: any) => {
    return { ...prevState, [e.target.name]: e.target.value };
  });
};

export const changeHandlerCheck = (e: any, setState: any) => {
  setState((prevState: any) => {
    return { ...prevState, [e.target.name]: e.target.checked };
  });
};
