# Basket Scores

## Table des matières 

1. [Introduction](#Introduction)
2. [Outils utilisés](#Outils)
3. [Description du projet](#Description)
5. [installation](#Installation)
6. [Remarques](#Remarques)
7. [Ressources](#Ressources)

## Introduction

Basket Scores est une application permettant de visualiser les résultats de la première division de la LNB.  
Le but de cette application est de m'initier à la librairie React à travers un projet concret.  
Les données sont récupérées grâce à l'API TheSportsDB dans sa version gratuite.  

## Outils utilisés 

React 18.2 + ViteJs  
React Router 6.22.1  
Bootstrap 5.3.2.  
API : [The Sports DB](https://www.thesportsdb.com/)  

## Description du projet

L'application est composée de 2 pages générées dynamiquement grâce à React Router.

### Page d'accueil

* Sur la page d'accueil, on peut visualiser un carrousel composé de cards contenant les résultats pour chaque match classé par journée.  
Un formulaire composé d'un élément **select** permet à l'utilisateur de sélectionner une journée à afficher. A chaque clique, la liste des **cards** est actualisé.                  

![capture d'écran de l'application Basket Score, montrant le caroussel affichant les résultats des matchs par journée](/annexes/capture_ecran_accueil_carrousel.png)

* La liste des composants React de la page d'accueil :


![Liste des composants React de la page d'accueil](/annexes/composants_react_accueil.jpg)

Un bouton *détails* est présent sur chaque card permettant d'afficher un composant supplémentaire **EventDetails** sous le carrousel donnant des informations détaillées sur les matchs.


<img src="/annexes/Vidéo_apercu_acceuil.gif" alt="affichage du composant eventDetails" width="100%">

### Page équipes

La deuxième page est composée d'une sidebar permettant de sélectionner une équipe et de charger les informations détaillées disponibles d'un club dans le composant **TeamDetails**  


![capture d'écran de l'application Basket Score, page équipes](/annexes/capture_ecran_page_equipes.png)  


## Installation

***Basket Scores est une application en développement et créée uniquement dans un but éducatif. Elle ne dispose pas d'une version en production***

$ git clone https://github.com/JeanNoLimit/Basket_scores.git  
$ cd Basket_scores  
$ npm install  
$ npm run dev  


## Remarques, difficultés rencontrées et perspectives d'améliorations

* La première difficulté rencontrée a été de trouver une API de résultats sportifs gratuite permettant d'effectuer suffisamment de requêtes sans être bloqué. Je me suis tourné vers l'API theSportDB car cette API dispose d'une version gratuite intéressante permettant d'effectuer jusqu'à 100 requêtes par minute.

* Les données disponibles depuis cette API sont plutôt limitées. La recherche des résultats ne peut s'effectuer que par journée et le classement des équipes n'est pas disponible. Dans la version initiale du projet, j'imaginais pouvoir récupérer plus de statistiques sur les équipes, me permettant ainsi d'afficher des graphiques à l'aide de la bibliothèque Char.js.  
-> **Amélioration :** Pour améliorer cet aspect, il faudrait trouver une API plus complète, mais payante. 

* Les logos récupérés ne sont disponibles qu'en version "blanc", certains ne sont donc pas visibles.  
-> **Amélioration :** Pour améliorer l'affichage, il faudrait que je télécharge tous les logos pour me passer des badges proposés par l'API.

* C'est ma première application React, il m'a fallu du temps pour appréhender cet outil. regarder des tutoriels, lire beaucoup de documentations. Certains composants ne sont pas forcement utile (ex: League Information). L'arborescence des fichiers pourrait être améliorée.  
-> **Amélioration :** Optimiser le code

* Pour l'instant, il n'existe pas de système de sauvegarde des données récupérées depuis l'API.  
-> **Amélioration :** Sauvegarder les données dans le LocalStorage. 

## Ressources 

* Documentation [React](https://react.dev/)  
* Cours OpenClassromms : [Débutez avec React](https://openclassrooms.com/fr/courses/7008001-debutez-avec-react), [Développez une application React complète](https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete)  
* Tutoriel [React Router](https://reactrouter.com/en/main/start/tutorial) + documentation
* Tutoriels [grafikart](https://grafikart.fr/tutoriels/introduction-react-1312)
* Documentation [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
