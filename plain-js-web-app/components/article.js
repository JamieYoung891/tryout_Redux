const article = () => {
  var state = store.getState(),
    articleElm = `
      <article>
        <h2>there's no contents</h2>
        please, create contents before try.
      </article>
    `

  switch (state.mode) {
    case "create":
      articleElm = `
          <article>
            <form onsubmit="
              event.preventDefault();
              store.dispatch({
                type:'CREATE',
                id: ${state.contents.length},
                title: this.title.value,
                desc: this.desc.value,
              })
            ">
              <p>
                <input type="text" name="title" placeholder="title">
              </p>
              <p>
                <textarea name="desc" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit" value="submit">
              </p>
            </form>
          </article>
        `
      break;

    case "read":
      if (state.contents.length) {
        const { title: rTitle, desc: rDesc } = state.contents.filter(o => o.id === state.target_id)[0];
        articleElm = `
            <article>
              <h2>${rTitle}</h2>
              ${rDesc}
            </article>
          `
      }
      break;

    case "update":
      if (state.contents.length) {
        const { title: uTitle, desc: uDesc } = state.contents.filter(o => o.id === state.target_id)[0];

        articleElm = `
            <article>
              <form onsubmit="
                event.preventDefault();
                store.dispatch({
                  type:'UPDATE',
                  id: ${state.target_id},
                  title: this.title.value,
                  desc: this.desc.value,
                })
              ">
                <p>
                  <input type="text" name="title" placeholder="title" value ="${uTitle}">
                </p>
                <p>
                  <textarea name="desc" placeholder="description">${uDesc}</textarea>
                </p>
                <p>
                  <input type="submit" value="submit">
                </p>
              </form>
            </article>
          `
      }
      break;

    case "delete":
      if (state.contents.length) {
        const { title: dTitle, desc: dDesc } = state.contents.filter(o => o.id === state.target_id)[0];
        articleElm = `
              <article>
                <h2>${dTitle}</h2>
                ${dDesc}
              </article>
              <form onsubmit="
                event.preventDefault();
                store.dispatch({
                  type: 'DELETE',
                  id: ${state.target_id}
                })
              ">
                <p>Do you really want to delete this article?</p>
                <input type="submit" value="Yes, I want to!">
              </form>
            `
      }
      break;
  }

  document.querySelector("#article").innerHTML = articleElm
}