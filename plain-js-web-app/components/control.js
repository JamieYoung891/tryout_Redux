const control = () => {
  const onclick = (name, prevent) => {
    return `
      onclick="
        event.preventDefault();
        store.dispatch({type:'MODE', mode:'${name}'});
      "
    `
  }

  document.querySelector("#control").innerHTML = `
    <section>
      <ul>
        <li>
          <a ${onclick("create")} href="./create">create</a>
        </li>
        <li>
          <a ${onclick("update")} href="./update">update</a>
        </li>
        <li>
          <a ${onclick("delete")} href="./delete">delete</a>
        </li>
      </ul>
    </section>
  `
}