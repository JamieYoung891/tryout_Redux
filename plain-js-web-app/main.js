const reducer = (state, action) => {

  let newState;

  if (state === undefined)
    newState = {
      mode: "read",
      target_id: 0,
      contents: [
        { id: 0, title: "HTML", desc: "HTML is ..." },
        { id: 1, title: "CSS", desc: "CSS is ..." },
        { id: 2, title: "JavaScript", desc: "JavaScript is ..." }
      ]
    };

  else switch (action.type) {

    case "MODE":
      newState = Object.assign(
        {}, state,
        { mode: action.mode }
      );
      break;

    case "CREATE":
      let cNewContents = state.contents.concat()
      cNewContents.push({
        id: action.id,
        title: action.title,
        desc: action.desc
      });

      newState = Object.assign(
        {}, state,
        {
          mode: "read",
          target_id: action.id,
          contents: cNewContents
        }
      );
      break;

    case "READ":
      newState = Object.assign(
        {}, state,
        {
          mode: action.mode,
          target_id: action.id
        }
      );
      break;

    case "UPDATE":
      let uNewContents = state.contents.concat()
      uNewContents[action.id] = {
        id: action.id,
        title: action.title,
        desc: action.desc
      };

      newState = Object.assign(
        {}, state,
        {
          mode: "read",
          contents: uNewContents
        }
      );
      break;

    case "DELETE":
      let dNewContents = state.contents.concat()
      dNewContents.pop(action.id)

      newState = Object.assign(
        {}, state,
        {
          mode: "read",
          target_id: 0,
          contents: dNewContents
        }
      );
      break;
  }

  return newState
};

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(nav);
store.subscribe(article);



onload = () => {
  header();
  nav();
  control();
  article();
}