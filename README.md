# Mikro-Frontend-Prototyp

Dieses Prototyp wurde im Rahmen einer Abschlussarbeit entwickelt. 
Das Prototyp enthaelt sowie Frontend-Anwendungen, als auch Backend-Service fuer die Anwendungen.

# Backend: 

Das Backend besteht aus drei API-Service: User, Item, Order.
Jedes Service muss in einem eigenen Terminalfenster gestartet werden. 

## Start Item-API-Service:

- Run `cd backend` 
- Run `cd item`     		
- Run `npm start`                                   | (*path=micro-frontend-prototyp/backend/item)

## Start User-API-Service:

- Run `cd backend` 
- Run `cd user`     		
- Run `npm start`                                   | (*path=micro-frontend-prototyp/backend/user)

## Start Order-API-Service:

- Run `cd backend` 
- Run `cd order`    		
- Run `npm start`                                   | (*path=micro-frontend-prototyp/backend/order)

# Frontend: 

## Deployment Frontnend:

- Run `cd frontend`		
- Run `npm run build`                                | (*path=micro-frontend-prototyp/frontend)

## Start Frontend:

Jede Mikroanwendung muss in einem eigenen Terminalfenster gestartet werden. 

## Start Product-Mikroanwendung:
- Run `cd frontend`	
- Run `npm run start:product`	                         | (*path=micro-frontend-prototyp/frontend)

## Start Order-Mikroanwendung:
- Run `cd frontend`	
- Run `npm run start:order`		                         | (*path=micro-frontend-prototyp/frontend)

## Start Shell-Mikroanwendung:
- Run `cd frontend`	
- Run `npm run start`		                             | (*path=micro-frontend-prototyp/frontend)


Die Hauptanwendung wird automatisch im Browser ge�ffnet und auf dem URL: localhost:80801 zug�nglich. 

## Unit tests:                                        

                                                     | (*path=micro-frontend-prototyp/frontend)

- Run `ng test` um die Unit Tests der Hauptanwendung auszuf�hren mit [Karma](https://karma-runner.github.io).

- Run `ng test --project:order` um die Unit Tests der Order-Anwendung auszuf�hren mit [Karma](https://karma-runner.github.io).

- Run `ng test --project:product` um die Unit Tests der Product-Anwendung auszuf�hren mit [Karma](https://karma-runner.github.io).
