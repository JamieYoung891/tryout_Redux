var reducer = (state, action) => {

  if (state === undefined)
    return { color: "yellow" }

  if (action.type === "CHANGE_COLOR")
    return Object.assign({}, state, { color: action.color });
}

var store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

onload = () => {
  var elms = document.getElementsByClassName("target")

  for (let i = 0; i < elms.length; i++) {
    const color = elms[i].id

    const setter = () => {

      var state = store.getState();
      document.querySelector(`#${color}`).innerHTML = `
        <div class="container" id="component_${color}" style="background-color:${state.color}">
          <h1>${color}</h1>
          <input type="button" value="fire"
            onclick='
              store.dispatch({type:"CHANGE_COLOR", color:"${color}"})
            '
          >
        </div>
      `;
    }

    setter()
    store.subscribe(setter)
  };
}