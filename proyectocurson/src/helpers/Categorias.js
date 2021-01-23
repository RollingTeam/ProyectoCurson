export const getCategoria = async () => {
    try {
      const resp = await fetch("http://localhost:3005/categoria", {
        // const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/categoria", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      });
      const data = await resp.json();
      return data.categorias;
    } catch (error) {
      return error;
    }
  };