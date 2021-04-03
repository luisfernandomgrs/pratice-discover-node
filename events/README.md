# Event Module

É um mecanismo para

- [] Disparar eventos
- [] Ouvir eventos
- [] Fazer alguma ação quando ouvir o evento
- [] É a base para muitos outros módulos como:
  http, stream, file system, etc...

## O que vamos aprender ?

- [] Utilizar os eventos
- [] Dispara eventos
- [] Ouvir eventos
- [] Executar ações para determinados eventos
- [] Entender como ele é a base para os outros módulos

O que há no objeto "Events" ?...

```js
   <ref *1> [Function: EventEmitter]
   {
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
```
