export class Tramite {
    cod_tre? :number;
    tre_id :String;
    tre_nombre :String;
    tre_titulo :String;
    tre_titulo_interno :String;
    tre_glosa :String;
    tre_hab :String;
    tre_duracion :String;
    tre_desc :String;
    tre_costo:number;
    tre_tipo :String;
    tre_buscar_en :String;
    tre_cuenta:String;

    constructor(
    cod_tre:number,
    tre_id :String,
    tre_nombre :String,
    tre_titulo :String,
    tre_titulo_interno :String,
    tre_glosa :String,
    tre_hab :String,
    tre_duracion :String,
    tre_desc :String,
    tre_costo:number,
    tre_tipo :String,
    tre_buscar_en :String,
    tre_cuenta:String) {

     
        this.tre_id =tre_id;
        this.tre_nombre =tre_nombre ;
        this.tre_titulo =tre_titulo;
        this.tre_titulo_interno =tre_titulo_interno;
    this.tre_glosa =tre_glosa;
    this.tre_hab =tre_hab;
    this.tre_duracion =tre_duracion;
    this.tre_desc =tre_desc;
    this.tre_costo=tre_costo;
    this.tre_tipo =tre_tipo;
    this.tre_buscar_en =tre_buscar_en;
    this.tre_cuenta=tre_cuenta
    }
}