//let myVariable = new String("Hola Mundo") // instancia de un objeto


class UserProfile {

    constructor(pUserName, pEmail, pUrlAvatar){
        this.username = pUserName;
        this.email = pEmail;
        this.urlAvatar = pUrlAvatar;
    }

    // Tiene username
    // email
    // url avatar

    getEmail() {
        return this.email;
    }

    setEmail(nuevoEmail){
        this.email = nuevoEmail;
    }

    save(){
        console.log("ACa se conecta a una base de datos...");
        localStorage.setItem("UserProfile", this);
    }

    load() {
        console.log("CArge datos de una base de datos...")
    }

    toString(){
        return this.username + this.email + this.urlAvatar;
    }

}


let myObject = { }; // Esto tambien es un objeto

let myUserObject = new UserProfile("Ale", "ale@ale.com" ,"http://url.../algo..");
let useremail = myUserObject.getEmail(); // <- al dev solo le importa tener el email...


myUserObject.save(); // Estoy salvando el objeto user profile en el localstorage...

console.log("" + myUserObject);

class Animal {
 constructor (){

 }
}


class Perro extends Animal {

}

class Gato extends Animal {

}