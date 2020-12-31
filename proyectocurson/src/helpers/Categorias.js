export const getCategoria = async () => {
    try {
      const resp = await fetch("http://localhost:3005/categoria", {
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