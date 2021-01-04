export const suspederUsuario = async() => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
        const resp = await fetch('http://localhost:3005/usuarios/', {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                token: `${token}`
            }
        });
        
        const data = await resp.json

        return
    } catch (error) {
        
    }
}