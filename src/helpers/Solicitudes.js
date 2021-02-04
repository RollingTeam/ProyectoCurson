export const getSolicitud = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      // const resp = await fetch("http://localhost:3005/solicitud", {
        const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/solicitud", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: `${token}`
        },
      });
      const data = await resp.json();
      return data.solicitudes;
    } catch (error) {
      return error;
    }
  };