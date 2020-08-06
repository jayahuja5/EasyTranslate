function getLangResources(){
    var en = new Array();
    en['hi'] = "Hi";
    en['hello'] = "Hello";
    en['button'] = "Button";
    en['placeholder'] = "Placeholder";
    en['input'] = "Input";
    en['submit'] = "Submit";
    en['rhino'] = "Rhino";
    
    var fr = new Array();
    fr['hi'] = "Salut";
    fr['hello'] = "Bonjour";
    fr['button'] = "Bouton";
    fr['placeholder'] = "Espace réservé";
    fr['input'] = "Contribution";
    fr['submit'] = "Soumettre";
    fr['rhino'] = "Rhinocéros";
    
    var resources = new Array();
    resources['fr'] = fr;
    resources['en'] = en;
    
    return resources;
}