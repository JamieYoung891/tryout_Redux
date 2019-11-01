const nav = () => {
  var state = store.getState(),
    liElms = "";

  for (let i = 0; i < state.contents.length; i++) {
    const con = state.contents[i];
    liElms += `
        <li>
          <a onclick="
            event.preventDefault();
            store.dispatch({type:'READ', mode:'read', id:${con.id}});
          " href="${con.id}">
            ${con.title}
          </a>
        </li>
      `
  }

  document.querySelector("#nav").innerHTML = `
      <nav>
        <ol>
          ${liElms}
        </ol>
      </nav>
    `
}