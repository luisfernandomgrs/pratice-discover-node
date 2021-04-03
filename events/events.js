/*
 * O que há no objeto "Events" ?...
 *
 *  <ref *1> [Function: EventEmitter]
 * {
    once: [Function: once],
    on: [Function: on],
    EventEmitter: [Circular *1],
    usingDomains: false,
    captureRejectionSymbol: Symbol(nodejs.rejection),
    captureRejections: [Getter/Setter],
    errorMonitor: Symbol(events.errorMonitor),
    defaultMaxListeners: [Getter/Setter],
    init: [Function (anonymous)],
    listenerCount: [Function (anonymous)]
   }
*/

//
// Duas formas de obter os dados de Events / EventEmitter
// const events = require("events");
// console.log(events);

// extraindo somente EventEmitter, uma função no estilo classe...
const { EventEmitter } = require("events");
// console.log(EventEmitter);

/*
 * O que contém...
 * 
 * EventEmitter {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    [Symbol(kCapture)]: false
  }
*/
const ev = new EventEmitter();

// Fica ativo durante todo o fluxo da aplicação...
ev.on("saySomething", (message) => {
    console.log("Eu ouvi você, " + message);
});

// Fica ativo apenas até a primeira execução...
ev.once("meuInitApplicaton", (message) => {
    console.log("O Init da Aplicação foi executado, " + message);
});

ev.emit("meuInitApplicaton", "admin");
ev.emit("saySomething", "Luis");
ev.emit("saySomething", "Fernando");