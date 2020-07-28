"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Sejour.prototype.getNom = function () {
        return this.nom;
    };
    Sejour.prototype.getPrix = function () {
        return this.prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(sejours) {
        this.sejours = sejours;
        this.sejours.push(new Sejour('NYC', 900));
        this.sejours.push(new Sejour('Hong Kong', 750));
        this.sejours.push(new Sejour('Saint-Pétersbourg', 700));
    }
    SejourService.prototype.findSejourbyName = function (nom) {
        var sejourToFind = null;
        this.sejours.forEach(function (sejour) {
            if (sejour.getNom() === nom) {
                sejourToFind = sejour;
            }
        });
        if (sejourToFind != null) {
            return sejourToFind;
        }
        else {
            throw new Error("Aucun séjour n'a été trouvé");
        }
    };
    return SejourService;
}());
var tableauSejours = Array();
var sejourService = new SejourService(tableauSejours);
// Test de la méthode findSejourByName
console.log(sejourService.findSejourbyName('NYC'));
