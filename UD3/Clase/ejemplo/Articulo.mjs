export class Articulo {
            constructor (cod, nombre, precio){
                this.cod = cod;
                this.nombre = nombre;
                this.precio = precio;
            }
            get pvp(){
                return this.precio * 1.21
            }
        }