/**
 * An animal shelter, which holds only dogs and cats, operates on a strictly "first in first out" basis
 * People must adopt either the oldest (based on arrival time) of all animals at the shelter, or they can
 * select whether they would prefer a dog or a cat (and will receive the oldest animal of that type).
 * 
 * They cannot select which specific animal they would like.
 * 
 * Create a data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, dequeueCat
 */

 // create two queues and store the index, this will let us know which animal was in first
 class QueueAnimal {
     constructor()  {
         this.values = []; // {name: 'Chester', id: 0}
     }
     queue(value, index) {
        this.values.push({name: value, id: index})

     }
     dequeue() {
         return this.values.shift();

     }
     peek() {
        return this.values[0];
    }
    isEmpty() {
        return this.values.length === 0;
    }
 }

 class QueueDogsCats {
     constructor() {
        this.cats = new QueueAnimal();
        this.dogs = new QueueAnimal();  
        this.nextIndex = 0;   
    }
    queue(value, type) {
        let index = this.nextIndex + 1;
        if (type === 'cat') {
            this.cats.queue(value, index);
            this.nextIndex = index;
        }
        if (type === 'dog') {
            this.dogs.queue(value, index);
            this.nextIndex = index;
        }
    }
    dequeueAny() {
        if (this.cats.isEmpty() && this.dogs.isEmpty()) {
            return null;
        } else if (this.cats.isEmpty()) {
            return this.dogs.dequeue();
        } else if (this.dogs.isEmpty()) {
            return this.cats.dequeue();
        }
        // we have both of them
        let nextCatToGo = this.cats.peek();
        let nextDogToGo = this.dogs.peek();

        if (nextCatToGo.id < nextDogToGo.id) {
            return this.cats.dequeue();
        } else {
            return this.dogs.dequeue();
        }
    }
    dequeueDog() {
        return this.dogs.dequeue();
    }
    dequeueCat() {
        return this.cats.dequeue();
    }
 }

 let queueDogsAndCats = new QueueDogsCats();
 queueDogsAndCats.queue('Chester', 'cat');
 queueDogsAndCats.queue('Brownie', 'dog');
 queueDogsAndCats.queue('Maki', 'dog');
 queueDogsAndCats.queue('Kiwi', 'dog');
 queueDogsAndCats.queue('Luna', 'cat');
 queueDogsAndCats.queue('Mona', 'cat');

 console.log(queueDogsAndCats.dequeueAny()); // Chester
 console.log(queueDogsAndCats.dequeueCat()); // Luna
 console.log(queueDogsAndCats.dequeueDog()); // Brownie
 console.log(queueDogsAndCats.dequeueAny()); // Maki
 console.log(queueDogsAndCats.dequeueDog()); // Kiwi

 console.log(queueDogsAndCats.cats.values, queueDogsAndCats.dogs.values); // [ { name: 'Mona', id: 6 } ] []

