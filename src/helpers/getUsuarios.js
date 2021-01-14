export const getUsuarios = async() => {
        try {
            // const resp = await fetch("http://localhost:3005/usuarios", {
              const resp = await fetch("https://afternoon-fjord-84174.herokuapp.com/usuarios", {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                },
              });
            
            const data = await resp.json()

            // console.log(data.usuarios)
          
            return data.usuarios

        } catch (error) {
            return error
        }
}
