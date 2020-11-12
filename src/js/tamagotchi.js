
// function to store state
const storeState = (initialState) => {
  let currentState = { initialState };
  return (StateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState
  };
};

const tamagotchiArray = []
let currentTamagotchi = 0;

// function factory 
const change = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

const feed = changeState("food")(1);

const sleep = changeState("rest")(1);

const play = changeState("play")(1);


// Add new Tamagotchi to tamagotchiArray
function newTamagotchi(name) {
  const tamagotchi = { name: name, stateControl };
  const count = tamagotchiArray.length;
  currentTamagotchi = count;
  tamagotchiArray.push(tamagotchi);
  return `<button class="btn btn-info" value=${count}>${name}</button>`;
}
 

