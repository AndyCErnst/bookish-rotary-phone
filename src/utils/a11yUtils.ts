
export const keyboardAction = (cb: VoidFunction):React.KeyboardEventHandler => (e) =>{
    // @ts-ignore
    if([' ', 'Enter'].includes(e.key)) {
        cb()
    }
  }