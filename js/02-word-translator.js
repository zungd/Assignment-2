
let language = prompt("Input es, de, en or fr");

switch(language){
    
    case "es":
     alert("Hello World translated in Spanish is: Hola Mundo");
    break;
    case "de":
     alert("Hello World translated in German is: Hallo Welt");
    break;
    case "en":
        alert("Hello World translated in English is: Hello World");
       break;
    case "fr":
    alert("Hello World translated in French is: Bonjour le monde");
    break;
    default:
        alert("Hello World translated in English is: Hello World");  
        break;
}