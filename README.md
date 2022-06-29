# Projet de fin d'année

Créer une pwa mobile-first

## Commandes pré-faites:

Pour faciliter l'accès à chacun des taches on été pré-faites.
Ces taches peuvent êtres retrouvées dans `.vscode/tasks.json`
### Pour utliser les tâches

`CTRL+SHIFT+P` ou `CMD+SHIFT+P`

**"Run task"** :

- start : Installe/Mets à jour les dépences et lance le serveur
- dev : lance le serveur
- install : mets à jours les dépendances
- build : Créer un dossier avec les fichiers finaux (pas nécéssaire pour le déploiment dans notre cas)


## Dépendences : 

- ReactJs(Vite)
- React Router Dom
- Supabase
- vite-plugin-pwa

## Client

Jeune chambre économique de Paris 
#tech4good

>Mettre le numérique au service des petis commerçant et artisans

## Solutions proposé

Application de livraison pour les petits commercant

## Structure du dossier

```
|- .github
|     |-workflow (Deprecated)
|- .vscode
|     |-tasks.json -> Taches à utiliser pour le projet
|- public
|     |-Fichiers nécéssaire pour le bon fonctionnement de la PWA
|-src
|    |-api
|    |    
|    |-components
|    |     |
|    |     |-> Client
|    |     |   |
|    |     |   |-> Nearby.jsx (Pour les magasins proches)
|    |     |   |
|    |     |   |-> Popular.jsx (Pour les magasins populaire)
|    |     |   |
|    |     |   |-> Recent.jsx (Pour les magasins déjà visité récemment)
|    |     |   
|    |     |-> NavBar.jsx (Navbar pour les différentes pages)
|    |     |
|    |     |-> CheckoutShop.jsx (Components pour la liste des commandes)
|    |     |
|    |     |-> shopCard.jsx (Components pour la liste des magasins)
|    |-func
|    |     |-> fonctions pouvant être utiliser pour la pwa
|    |-img -> icones/images pour le projet censé être remplacé plus tard
|    |-pages
|    |    |-> auth -> Pour l'authentification
|    |    |
|    |    |-> Client -> Pour les utilisateurs lambda
|    |    |
|    |    |-> DeliveryGuy -> Pour les livreurs
|    |    |
|    |    |-> Shop -> Pour les magasins
|    |
|    |-styles
|    |    |->index.scss -> Fichier global de la stylisation
|    |    |
|    |    |->index.css -> résultat du scss
|    |
|    |-main.jsx -> Fichier principale du projet
|    |
|    |-Routes.jsx -> Router du projet avec (pour l'instant fausse)détection de la connection
|
|-.gitattributes/gitignore -> Fichier pour le repo github
|
|- index.html -> Racine du projet
|
|- package.json/package-lock.json -> pour les nodes_modules
|
|- vercel.json -> Pour le deploiment sur vercel
|
|- vite.config.js -> config de vite
```