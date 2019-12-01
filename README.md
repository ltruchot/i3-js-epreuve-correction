# JavaScript: Épreuve Théorique sur 24pts			
## Novembre 2019 – WAD19

Chaque question vaut 2pts et doit-être développée.
Les réponses doivent être personnelle, sans copier/coller.

**Prénom et Nom** :Loïc TRUCHOT

*Les réponses suivantes sont en partie subjectives - beaucoup de questions sont des sujets d'entretien d'embauche. Ce n'est pas LA correction, mais une proposition jugée bonne.*

**1 - JavaScript est-il un langage interprété ou compilé ? Quelle différence cela fait ?**

JavaScript est un langage interprété. Ça veut dire que la transformation de ce langage en binaire ou en assembleur n’est pas faite explicitement par le développeur. On édite JavaScript dans un éditeur de texte, et on laisse le navigateur le lire et l’interpréter (dans les implémentations connues, il le « pré-compile » à la volée pour mieux le comprendre et l’optimiser).


**2 - Qu'est ce qu'un framework ? Citez un framework en JavaScript et un framework dans un autre langage. A quoi servent-ils respectivement ?**

Un framework est une suite de fonctionnalités écrites pour un langage de programmation. Contrairement à une simple bibliothèque (ou librairie), le framework est un outil global qui se suffit à lui même. Il aide à produire chaque facette du software que l’on développe, avec une manière de faire similaire pour chaque projet. Par exemple Vue.js qui permet de faire des SPA en JavaScript. En PHP, Symfony est un autre framework important, qui permet de faire un site complet, front et back.

**3 - Est-ce que JavaScript est un langage de paradigme « Fonctionnel » ? Est-ce mieux que l’« Orienté Objet » ? (la réponse peut-être subjective)**

JavaScript est un langage multi-paradigme, avec un forte tendance fonctionnelle. En effet, en JavaScript les fonctions sont de première classe, on peut donc créer des fonctions d’ordre supérieur (ex : map, filter, reduce, callbacks, etc.). C’est difficile de faire de l’Orienté Objet en JavaScript car les classes n’existe que depuis ES6 et sont très incomplètes. Mais dans beaucoup d’autres langages, l’Orienté Objet est très puissant, comme en Java, C#, C++… On ne peut pas dire qu’un paradigme est meilleur que l’autre : chacun décrit le monde différemment, même si je préfère le fonctionnel pour son côté plus mathématique.

**4 - Quelle technologie permet de faire du JavaScript côté serveur ? L’objet « window » est-il disponible sur le serveur ?**

C’est Node.js, très pratique pour les développeurs fullstacks ! L’objet window ne peut pas exister côté serveur, car c’est dans le navigateur seulement qu’il représente la fenêtre active.

**5 - Quel est la portée (scope) des variables déclarées avec « var » en JavaScript ? Est-ce différent avec « let » ?**

Le scope de « var » est la fonction : toute variable déclarée dans une fonction avec « var » est disponible entre les accolades de cette fonction et dans tous les blocs enfants (dont les fonctions filles). Contrairement à var, le scope le let est le bloc, et tous ses blocs enfants (fonctions comprises): la variable est disponible dans les accolades entre lesquels il est déclaré, même si c’est celles d’un « if ».

**6 - A quoi servent les promesses (Promise) en JavaScript ?**

Elle permettent de faire de l’asynchrone. Grâce à une méthode « then » qui exécute un fonction uniquement lorsque l’étape précédente est terminée, on peut se servir des promesse pour faire de l’AJAX, des timeouts, gérer les entrées/sorties d’information dans le timing approprié...

**7 - Que veut dire « passer par référence », lorsqu’on parle de variables ?**

Au lieu de copier la valeur de la variable dans une autre, on copie seulement l’adresse (en mémoire de l’ordinateur) de la valeur utilisée. Il n’y a donc qu’une seule valeur partagée entre plusieurs variables , et modifier l’une des variables, c’est modifier cette valeurs pour toutes c’est variables ! En JavaScript, les « Object » sont automatiquement passé par référence, mais pas les types primitifs qui sont copiés d’office.

**8 - Qu’est-ce qu’AJAX ? Citez une librairie JavaScript qui aide à faire de l’AJAX ? Est-elle absolument nécessaire pour faire de l’AJAX ?**

C’est l’acronyme de Asynchronous JavaScript And XML. C’est une API web présente dans JavaScript pour faire des requêtes HTTP sans recharger la page web. Ça permet donc d’enrichir la navigation d’un utilisateur sur une page, selon ses actions et/ou en arrière plan. Mais il ne porte plus très bien son nom car on peut aujourd’hui envoyer/recevoir autre chose que du XML en AJAX, comme du JSON. Axios permet de faire des requêtes AJAX sous forme de promesses. Il y en a bien d’autre, et sans librairie on peut utiliser XMLHttpRequest ou « fetch ».

**9 - Qu’est-ce que l’ECMA ?**

European Computer Manufacturers Association. C’est l’organisme chargé (entre autre) de standardiser le JavaScript pour tous les navigateurs, et de faire avancer ses fonctionnalités et son versionning. Cette norme s’apelle EcmaScript, d’où ES5, ES6...

**10 - Une fonction peut-elle retourner une fonction en JavaScript ?**

Oui car les fonctions sont de premières classes en JavaScript : elle peuvent être traiter comme les primitifs ou les objets. Donc une fonction peut en retourner une autre comme elle peut retourner une « string », par exemple. La « closure » et le currying sont des exemples classiques.

**11 - A quoi sert JQuery ?**

C’est une librairie très importante dans l’univers de JavaScript, mais moins utilisée dans les sites récents. Elle permet de contrôler/animer le DOM, gérer les évènements utilisateurs et faire de l’AJAX. Ses nombreux plugins permettent de tout faire dans ces domaines, en codant moins. Sa globale est « $ » qui permet de le reconnaître et l’utiliser.

**12 - Citez deux forces et deux faiblesses de JavaScript ? (la réponse peut-être subjective)**
- une syntaxe courte qui s’apprend vite (force)
- les fonctions de première classe pour faire du fonctionnel efficace (force)
- le typage faible qui augmente le risque d’erreur au runtime (faiblesse)
- l’existence de « null » ou « undefined » qui peuvent remplacer des valeurs et mener à des bugs. Gérer les cas d’absence de valeur systématiquement serait moins dangereux. (faiblesse)

### Questions bonus (non comptabilisées) : 

- En quoi un « Object » JavaScript est différent d'un Dictionnaire ?

Il peut avoir ses propres méthodes définie par le codeur et servir de prototype.

- Qu’est que le « Currying » ?

L’application partielle d’arguments, en faisant des fonctions qui retournent des fonctions.

- Qu’est-ce que la méthode « reduce » ?

Une méthode d’Array qui permet de faire un cumul des valeurs d’un Array, selon une opération choisie et une valeur de départ.

- Pourquoi dit-on qu’il y a une « pop-culture » des frameworks JavaScript - ou une «  JavaScript fatigue » ? Qu’est-ce que cela implique, pour nous, codeurs/codeuses ?

Les frameworks et librairies JavaScript les plus utilisés changent très régulièrement depuis 10 ans, naissants et mourants aussi vite que des pop-stars, avec beaucoup de nouveaux challengers chaque année et une incertitude sur l’avenir et les technologies à apprendre. L’effet « nouveauté» marche bien sur la communauté des devs, mais elle fatigue aussi pour ceux qui sont là depuis plus longtemps, qui doivent réapprendre chaque année. Les managers sont aussi affectés : ils ne peuvent pas suivre facilement l’évolution de la technologie et ni être sûr de leur choix à moyen et long terme pour les produits et les embauches.