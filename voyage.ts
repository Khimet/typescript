class Sejour {
    private nom: string;
    private prix: number;

    constructor(nom:string, prix:number){

        this.nom = nom;
        this.prix = prix;

    }

    getNom():string {
        return this.nom;
    }

    getPrix():number {
        return this.prix;
    }

    
}

class SejourService {
    sejours: Sejour[];

    constructor(sejours:Sejour[]){
        this.sejours = sejours;
        this.sejours.push(new Sejour('NYC', 900))
        this.sejours.push(new Sejour('Hong Kong', 750))
        this.sejours.push(new Sejour('Saint-Pétersbourg', 700))
    }

    findSejourbyName(nom:string):Sejour {
        let sejourToFind = null;
        this.sejours.forEach(sejour => {
            if (sejour.getNom() === nom){
                sejourToFind = sejour;
            }
        });
        
        if (sejourToFind != null){
            return sejourToFind;
        } else {
            throw new Error("Aucun séjour n'a été trouvé")
        }
        
        
    }
}

let tableauSejours = Array<Sejour>();
const sejourService = new SejourService(tableauSejours);

// Test de la méthode findSejourByName
console.log(sejourService.findSejourbyName('NYC'));