40 +2
var point = {x: 1, y: 1};
point
point.x
var bool = true;
var number = 1234.5;
var text = "I want to be a pirate!";
var object = {};
var code = function () {return 42;};
typeof true;
typeof 1234.5;
typeof "I want to be a pirate";
typeof {};
typeof function ();
typeof function () {return 42;};
var x
typeof x;
x = 5;
typeof x;
var point = {'x': 10, 'y': 15};
var point = {x:10, y:10};
point.x;
point.y;
point.x = 0;
point.y = 0;
point[x] = 0;
var label = point.label;
typeof label
var menu = ['Attack', 'Defense', 'Inventory'];
menu = ['Attack', 'Defense', 'Inventory'];
menu.splice(2, 0, 'Magic'); // añade Magic antes de Inventory.
menu.splice(2, 2, 'Ench. Inventory'); // reemplaza Magic and Inventory with Ench. Inventory.
menu.splice(0, 0, 'Wait'); // añade Wait al principio de la lista.

menu;
menu.length;
var item = menu[10];
typeof item; // será undefined.
menu[10] = 'Secret';
menu;
menu.length;
var obj = {}; // el objeto vacío es tan válido como cualquier otro.
var arr = []; // una lista sin elementos, como te puedes imaginar.
typeof obj; // será object.
typeof arr; // será object.
Array.isArray(obj); // será false.
Array.isArray(arr); // será true.
function getNextAliveEnemy() {
var nextEnemy;
if (aliveEnemies.length > 0) {
  nextEnemy = aliveEnemies[0];
  }
else {
  nextEnemy = null;
  }
return nextEnemy;
}
var hero = { sword: null, shield: null };
hero.sword = { attack: 20, magic: 5 }; // coge una espada.
hero.sword = null; // suelta la espada.
var hero = {
name: 'Link',
life: 100,
weapon: { kind: 'sword', power: 20, magicPower: 5 },
defense: { kind: 'shield', power: 5, magicPower: 0 },
// Inventario por slots. Dos slots vacion y una último con 5 pociones.
inventory: [
{ item: null, count: 0},
{ item: null, count: 0},
{ item: { kind: 'potion', power: 15 }, count: 5}
]
};
hero.name; // el nombre del héroe.
hero.weapon.kind; // el tipo de arma.
hero.inventory[0]; // el primer slot del inventario.
hero.inventory[0].item; // qué hay en el primer slot del inventario.
hero.inventory[2].item.power; // el poder del item del tercer slot del inventario.
var enemy = {
graphic: 'specie01.png',
currentDirection: 'right',
position: { x: 10, y: 10 },
score: 40
};
var enemy = {
_graphic: 'specie01.png',
_currentDirection: 'right',
_position: { x: 10, y: 10 },
_score: 40,

moveLeft: function () { console.log('Going left!'); },
moveRight: function () { console.log('Going right!'); },
advance: function () { console.log('Marching forward!'); },
shoot: function () { console.log('PICHIUM!'); } // (es un láser)
};
