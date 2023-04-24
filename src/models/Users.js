// que hacer para registrar un usuario : ?? 
// 1. guardar al suaurio en la DB 
// 2. buscar al usuario que se quiere loguear por su email
// 3. buscar a un usuario por su ID - SI
// 4. Editar la info de un usuario
// 5. Eliminar a un usuario de la DB

 const { Console } = require("console");
const fs = require("fs");

const User = {

    fileName: "./src/data/users.json",

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },
    generateId: function ( ) {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;

    },

    findAll: function() {
        return this.getData();
    },
    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser =>
            oneUser.id === id);
            return userFound
        
    },
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser =>
            oneUser[field] === text);
            return userFound
        
    },

     create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ... userData

        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ""));
        return newUser;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser =>
             oneUser.id !== id);
             fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ""));
        return true;
        }
    }

    
    module.exports = User; 