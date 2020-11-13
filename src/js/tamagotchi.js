
// function to store state
export const storeState = (initialState) => {
  let currentState = initialState;  // {} only if empty object ... otherwise pass initialState
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};


export const tamagotchiArray = [];
//export let currentTamagotchi = 0;
// tamagotchiArray = [{Name: name, storeState}, {}]
// tamagotchiArray = [{storeState()}, {}]

// function factory 
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

export const feed = changeState("food")(1);

export const sleep = changeState("rest")(1);

export const play = changeState("play")(1);


// Add new Tamagotchi to tamagotchiArray
export function newTamagotchi(name) {
  const stateControl = storeState({Name: name, food: 0,  rest: 0, play: 0});
  //const count = tamagotchiArray.length;
  //currentTamagotchi = count;
  const newhtml = `<button class="btn btn-info next-tamagotchi" value=${tamagotchiArray.length}>${name}</button>`;
  tamagotchiArray.push(stateControl);
  // console.log(tamagotchiArray[0]().food)
  // storeControl().food === referring to line 40 which is now "const tamagotchi"
  return newhtml;
}