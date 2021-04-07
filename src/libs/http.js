/* Decalramos nuestra clase */
class Http {

    static instance = new Http();
    /* Declaramelos el metodo que vamos a ocupar en este caso puede ser get put post etc pasamos la variable url */
    get = async (url) =>{
        try{
            let req = await fetch();
            /* llamamos a un metodo async por eso aplicamos await */
            let json = await req.json();
            return json;
            
        } catch (err){
            console.log ("HTTP GET METHOD ERR", err);
            /* devolvemos el error para poder manejarlo y manipularlo */
            throw Error(err);
        }
    }
}
