export class Cliente {
            constructor (nif, nombre, direccion, tlf, email){
                this.nif = nif;
                this.nombre = nombre;
                this.direccion = direccion;
                this.tlf = tlf;
                this.email = email;
            }
        }

        function saludar(cliente){
            alert("Hola " + cliente.nombre);
        }
        export { saludar };