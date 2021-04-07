Projet : RPG
  
RPG
Pour ce projet, nous allons te demander de créer un RPG !

1. Introduction
Désormais, tu sais utiliser les classes ES6 de JavaScript. Savoir organiser sa POO efficacement n'est pas une simple tâche, mais il existe des domaines où la POO est extrêmement appropriée.

Le domaine des jeux est, comme tu as pu le voir dans le cours, une très bonne introduction à la POO. Ton objectif, aujourd'hui, sera de créer une partie de jeu vidéo !

Tu devras mettre en place plusieurs personnages qui pourront se taper dessus comme tout personnage de jeu vidéo qui se respecte. Chacun de ces personnages, en fonction de sa classe, sera capable de faire une action qui lui est propre.

Une fois que toutes tes classes seront créées, tu devras englober tes personnages dans un jeu. Ce jeu se jouera au tour par tour, via la console.

2. Le projet
2.1. Description
Nous allons faire un jeu où le joueur pourra contrôler 5 personnages qui vont se combattre à mort, façon gladiateurs. Chaque personnage aura des caractéristiques qui lui sont propres.

Chaque tour, pour chaque personnage, tu vas choisir qui attaquer. Le personnage qui a le plus de points de vie à la fin de 10 tours a gagné le jeu !

2.2. Nos personnages
2.2.1. Personnages et Classes
Chaque personnage aura trois caractéristiques :

hp : acronyme de health points, soient points de vie. Un personnage commence avec un nombre défini de hp. S'il passe à 0 point de vie, il devient loser
dmg : acronyme de damage, soient points de dégât. Un personnage pourra toujours effectuer une attaque simple enlevant un nombre précis de points de vie à une cible précise
mana : les points de mana. Le mana est une ressource qui permet d'utiliser des attaques spéciales. Un personnage commence le jeu avec un nombre précis de mana qui lui permettront d'effectuer son sortilège spécial (coûtant un certain nombre de mana). Par exemple si un personnage commence avec 150 points de mana et que son sortilège spécial lui coûte 15 points de mana, il pourra effectuer 10 fois ce sortilège avant de tomber à 0 point de mana
Dans le jeu, nous aurons 5 classes :

La classe Fighter (combattant équilibré sous tous les bords)
La classe Paladin (chevalier puissant et défensif)
La classe Monk (prêtre qui peut se guérir)
La classe Berzerker (bourrin avec une attaque élevée)
La classe Assassin (rusé et fourbe)
Chacune des classes aura une attaque spéciale spécifique à la classe, coûtant un certain nombre de mana. Chaque tour le joueur choisira s'il désire utiliser l'attaque normale, ou l'attaque spéciale.

Afin de rendre ton code plus lisible, les 5 classes de personnage seront étendues d'une autre classe Character.

2.2.2. Les classes
Voici les spécificités des 5 classes

2.2.2.1. Fighter
Le Fighter commence avec 12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).

Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. Jusqu'au prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana.

2.2.2.1. Paladin
Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.

Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.

2.2.2.1. Monk
Le Monk commence avec 8 points de vie et 200 points de mana. Il a 2 points de dégât.

Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 PV. Elle coute 25 mana.

2.2.2.1. Berzerker
Le Berzerker commence avec 8 points de vie et 0 point de mana. Il a 4 points de dégât.

Le Berzerker aura une attaque spéciale Rage lui donnant +1 pour ses attaques pour tout le reste de la partie mais lui enlevant 1 hp. Elle coûte 0 mana. Elle peut être appelée plusieurs fois (par exemple, si le Berzerker a fait son attaque spéciale 2 fois, ses attaques infligeront 4 + 2 = 6 points de dégât).

2.2.2.1. Assassin
L'Assassin commence avec 6 points de vie et 20 points de mana. Il a 6 points de dégât.

L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.

2.2.3. Nos personnages
Voici nos personnages :

Grace sera le personnage de la classe Fighter
Ulder sera le personnage de la classe Paladin
Moana sera le personnage de la classe Monk
Draven sera le personnage de la classe Berzerker
Carl sera le personnage de la classe Assassin
2.2.4. Caractéristiques des personnages
Tous les personnages ont une méthode takeDamage, prenant en paramètre le nombre de dégâts à recevoir. Ils ont également une seconde méthode dealDamage, prenant en paramètre la victim à choisir. Également, ils ont un attribut status, par défaut à playing. Il pourra passer à winner ou loser.

Si jamais les PV d'un personnage tombent à 0, il est éliminé et ne peut plus jouer ni être attaqué. Son statut passe alors à loser. Lorsqu'un personnage en tue un autre, il regagne 20 point de mana.

2.2.5. En avant ?
À partir de là, tu as toutes les infos nécessaires pour créer les classes liées aux personnages. Je t'invite à le faire avant de passer aux classes liées au système du jeu.

2.3. Notre système
Tout le jeu se passera sur la console. Si jamais tu as commencé à mettre en place une interface HTML, libre à toi de l'utiliser ou non si tu préfères.

Nos 5 personnages sont instanciés initialement dans la partie.

Une classe Game doit être mise en place. Elle contiendra un attribut turnLeft, indiquant le nombre de tours restants. Par défaut, 10. Grâce à la méthode newTurn, on retire un tour. Une fois à 0, la partie est terminée, et les personnages restants gagnent, voyant ainsi leur paramètre status passer à winner.

Une classe Turn sera dédiée à un tour de jeu, et fera tout ce qui concerne le tour de jeu : les attaques, etc. Turn.new déclarera un nouveau tour.

C'est à toi de réfléchir comment tu vas conceptualiser ta classe, essaie de réfléchir de quoi tu peux avoir besoin tout en gardant en tête que le but est d'interagir avec une page HTML.

Une méthode startTurn est activée, loggant ainsi It's turn X, X étant le numéro du tour actuel.
Les personnages sont appelés chacun leur tour, dans un ordre aléatoire. Ils seront appelés par la console qui loggera automatiquement It's time for Y to play.
Ils peuvent utiliser leur méthode qui leur est propre ou utiliser dealDamage sur l'ennemi de leur choix. Ensuite, il sera loggé X is attacking Y. He deals him Z damages. Y got A lifepoints left.
Une fois que tous les joueurs ont joué, on log l'ensemble des personnages encore en vie et on utilise newTurn.
S'il ne reste plus qu'un joueur en vie, il devient le winner et la partie s'arrête. L'utilisateur a la possibilité à tout moment d'utiliser la méthode watchStats pour afficher les statistiques de tout le monde, pour réfléchir qui attaquer, etc.

Libre à toi de la designer comme tu le souhaites.

2.4. Et après ?
Franchement, pas mal non ! L'avantage de ce jeu et du principe du jeu d'aventures est que l'on part un peu à l'aventure en y jouant et que tout le monde aura une classe préférée (perso moi c'est le monk, car je donne beaucoup tavu).

Aussi, le fait d'avoir cette base te permettra d'ajouter des fonctionnalités bonus qui vont agrémenter ton jeu.

Voici quelques idées pour donner du pep's à ton jeu :

2.4.1. Aléatoire
Fais en sorte qu'une partie commence plutôt avec 5 personnages tirés au hasard, avec des classes tirées au hasard. Une classe aura toujours le même nombre de points de vie, mana et points de dégât, peu importe le personnage.

2.4.2. Nouvelles classes
Ajoute deux nouvelles classes.

Le Wizard, un puissant sage utilisant des sorts magiques pour taper ses adversaires. Un wizard commence avec 10 points de vie et 200 points de mana. Il a 2 points de dégât.

Le wizard a une attaque spéciale Fireball qui inflige 7 points de dégât et qui coûte 25 points de mana.

Pour la seconde classe, je te laisse utiliser ton imagination :)

2.4.3. Une meilleure interface utilisateur
N'hésite pas à renvoyer joliment l'état des personnages en prenant le temps de customiser la façon dont l'information est rendue au joueur.

2.4.4. Équilibre tes classes !
Peut-être que les classes ne sont pas super bien équilibrées et qu'il faut revoir certaines classes à la hausse ou d'autres à la baisse. Je te laisse ajuster les classes.

2.4.5. De l'intelligence artificielle
C'est le niveau des champions ! Fais en sorte que le joueur ne peut jouer qu'avec un seul personnage et que les autres personnages soient contrôlés par l'ordinateur.

Au début, fais en sorte que l'ordinateur attaque au pif (yolol). Une fois que tu as ceci de fonctionnel donne-lui de l'IA :

Prioriser les coups fatals
S'il n'y a pas de coup fatal disponible, tu peux faire du hasard
Et oui, l'intelligence artificielle dans les jeux vidéo (voire même les autres types d'application) se résume bien souvent à ceci ! Un exemple très célèbre est Pokémon version Bleu ou Rouge, où les pokémon en face choisissaient leur attaque au hasard, moyennant quelques modifications. Tu pourras trouver plus d'info ici. Donc si on te vend de l'IA, généralement c'est du if.

2.4.6. Autre ?
J'ai donné ces 5 idées, mais libre à toi d'améliorer le jeu comme tu le veux ! Tu peux par exemple proposer une deuxième attaque spéciale par classe, afin de diversifier ces dernières.

2.5. Help ! Par quoi je commence ?
(cette section te sera utile si tu ne sais pas par quoi commencer)

Le syndrome de la page blanche : très difficile à vaincre, surtout en POO. En effet, si tu vois à peu près comment réparer une roue de voiture ou de vélo, construire une voiture ou un vélo à partir de boulons et de vis est tout de suite bien plus compliqué. Pour continuer cette métaphore, je te propose de te donner un objectif beaucoup plus réalisable : construire un vélo sans frein, sans vitesse, avec juste deux roues et un cadre. À partir de là, il te sera bien plus aisé d'ajouter un système de freins, des vitesses, etc.

C'est d'ailleurs plus ou moins la technique du MVP : construire une version ultra minimaliste de ton app, avant d'ajouter des fonctionnalités au fur et à mesure.

2.5.1. Un jeu minimaliste, mais fonctionnel !
Essayons de penser à l'essentiel du jeu. Si l'on enlève tout le gras, à quoi se résume le jeu :

un système où des gens se battent
pendant 10 tours, les personnages en vie à la fin gagnent
c'est tout !
Et bien ce sera notre but, au début. Commence donc par créer un système où deux Character vont se battre pendant 10 tours. Le ou les characters en vie à la fin des 10 tours gagnent. Pas de mana, pas d'héritage, pas de blabla, juste un système simple.

Il y a plein de façons de designer cela, mais personnellement, j'aurais fait trois classes :

Character : qui sera notre personnage. Il aura un attribut hp et un attribut dmg. Puis il pourra attaquer.
Game : qui lance la partie avec Game.new
Turn, qui fera les actions du tour de jeu : les personnages attaquent, etc.
Une fois que tu as réussi à faire un système de jeu qui fait des combats entre deux personnages, bravo ! Tu as ton MVP. Ajouter des fonctionnalités sera bien plus aisé, et bien plus gratifiant ! En effet, tu auras l'impression que ton jeu n'est pas hyper intéressant, et tu auras envie d'ajouter des fonctionnalités pour qu'il soit de mieux en mieux.

Et puis tu as battu le syndrome de la page blanche. Et ça, ce n'est pas rien ;)

2.5.2. Nouvelle fonctionnalité : un troisième personnage
Maintenant que tu as ton système rudimentaire, nous pouvons construire par-dessus. La première chose à faire sera d'ajouter un troisième personnage dans l'arène, puis de demander à l'utilisateur à chaque attaque de personnage qui se dernier visera.

Je ne te cache pas que ce sera une partie pas forcément très simple, mais tout à fait à ta hauteur :)

2.5.3. Les autres fonctionnalités
Et bien maintenant tu as un système qui commence à être ce vers quoi nous tendons, ajoute les fonctionnalités qui te semblent les plus pertinentes. L'ordre est à ton libre arbitre, mais personnellement j'aurais fait :

avoir un système complet d'affichage en console.log du status de jeu, avec des majuscules, emojis, et compagnie. Si tu te sens d'attaque, tu peux même bien ranger ce système dans une classe Display.
ajouter le name de nos personnages
passer à 5 personnages
intégrer dans la classe character la notion d'attaque spéciale. Pas de mana au début, juste proposer à l'utilisateur quelle attaque il veut faire : normale ou spéciale
intégrer dans la classe character la notion de mana
intégrer les différents types de characters avec l'héritage. On commence par gérer les spécificités simples (hp, mana)
faire les attaques spéciales pour chaque type de character. Faire du plus simple au plus dur
intégrer les notions suivantes et finaliser (quand un personnage en tue un autre, il regagne 10 points de mana, etc.)
Siroter une bière de la victoire
Me frotter les mains devant les prochaines fonctionnalités
3. Rendu attendu
Le rendu attendu est un dossier contenant un fichier HTML ainsi que plusieurs fichiers JS. Par convention, on fait généralement un fichier JS par classe.

Afin de créer tes personnages, tu peux, au choix, faire soit un formulaire HTML, soit une fonction que tu peux appeler depuis la console. Dans la console, grâce à Game.watchStats(), tu peux voir à tout moment la liste des personnages vivants ainsi que leurs caractéristiques.

L'utilisateur doit être capable d'ajouter ou non un personnage avant le début de la partie. Ensuite, il peut lancer la partie et jouer tous les personnages un par un. Au bout de 10 tours ou bien quand il ne reste plus qu'un personnage, le personnage avec le plus de points de vie a gagné !
