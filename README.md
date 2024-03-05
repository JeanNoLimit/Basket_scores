# Basket Scores

## Table des matières 

1. [Introduction](#Introduction)
2. [Technologies](#Technologies)
3. [Description du projet](#Description)
5. [installation](#Installation)
6. [Remarques](#Remarques)

## Introduction

Basket Scores est une application permettant de visualiser les résultats de la Première division de la LNB.  
Le but de cette application est de m'initier à la librairie React à travers un projet concret.  
Les données sont récupérées gràce l'API TheSportsDB dans sa version gratuite.  

## Technologies 

React 18.2 + ViteJs  
React Router 6.22.1  
Bootstrap 5.3.2.  
API : [The Sports DB](https://www.thesportsdb.com/)  

## Description du projet

L'application est composée de 2 pages générées dynamiquement gràce à React Router.

### Page d'accueil

Sur la page d'accueil on peut visualiser un carrousel composé de cards contenant les résultats pour chaque match classé par journée.  
Un formulaire composé d'un élément <select> permet à l'utilisateur de sélectionner une journée à afficher. Au clique, la liste des cards est actualisé.  


### Page équipes

La deuxième page est composée d'une sidebar permettant de selectionner une équipe et de charger les informations détaillés disponible d'un club dans le composant <Teamdetails />  

![capture d'écran de l'application Basket Score, page équipes](/annexes/capture_ecran_page_equipes.png)  

## Installation

## Remarques et difficultés rencontrées

