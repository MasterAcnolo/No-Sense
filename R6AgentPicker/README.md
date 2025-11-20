# Random Agent Picker

## Explication de la fonction

Ce que ça fait, c'est que on prend un tableau, par exemple celui des attaquants:

```js
const AttackOperator = [
  { operator: "Rauora", icon: "assets/icons/attack/rauora.svg" },
  { operator: "Striker", icon: "assets/icons/attack/striker.svg" },
  { operator: "Deimos", icon: "assets/icons/attack/deimos.svg" },
  //C'est comme ça pour tous les persos de ce tableau
];
```

Et on va utiliser cette formule, associé à une variable:

```js
const DefenseOperatorOutput =
  DefenseOperator[Math.floor(Math.random() * DefenseOperator.length)];
```

Ce qui permet de si on littéralise cela:

Je vais associer à la variable **DefenseOperatorOutput** un nombre. Ce nombre sera l'index dans le tableau, qu'on pourrait aussi bien noter:

```
DefenseOperator[0] // Celà nous retournera Rauora
```

Mais nous on souhaite avoir un nombre aléatoire, donc on va dire:

_Notre nombre sera arrondi au nombre inférieur (Ex: 4.2 sera arrondi à 4). Tu me prend un nombre aléatoire entre 0 et 1. Et tu multiplieras ce nombre par la longeur de notre tableau. Cela permet d'obtenir un index dans notre tableau. Par cette méthode_

Puis on affiche l'output, en injectant dans notre HTML un paragpraphe avec comme contenu le résultat de notre recherche. Par le biais de la méthode point on affiche le contenu de l'objet. Par exemple avec

```js
{ operator: "Fenrir", icon: "assets/icons/defense/fenrir.svg" },
```

Si l'on utilise la méthode point. Et bien on aura `DefenseOperatorOutput.operator` qui renverra **"Fenrir"**

Pour l'image la méthode est relativement la même, sauf que au lieu d'envoyer un paragprahe, on renvoie une image avec comme chemin le chemin de l'image associé, toujours avec Fenrir, cela nous renvoie:

```js
// Avec { operator: "Fenrir", icon: "assets/icons/defense/fenrir.svg" }, On va utiiliser la méthode:
<img src="${AttackOperatorOutput.icon}">
```

Comme ça l'image sera associé au path, et elle s'affichera correctement. Et avec un peu de style et de magie le site ressemble à ça:

![alt text](example.png)
