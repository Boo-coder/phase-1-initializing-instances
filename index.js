class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    } 
}

let brkFast = new Breakfast("eggs", "juice");
brkFast;


class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let lch = new Lunch("side salad", "broccoli cheddar soup", "iced tea");
lch;


class Dinner{
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

let dnr = new Dinner("balsamic salad", "consomme", "filet mignon", "cheesecake");
dnr;