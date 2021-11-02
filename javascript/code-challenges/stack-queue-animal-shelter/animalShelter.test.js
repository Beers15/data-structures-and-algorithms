const AnimalShelter = require('./animalShelter');

describe('Testing Animal Shelter Class functionality', () => {
  it('allows the enqueuing and dequeuing of either a dog or cat', () => {
    let obj1 = {animal: 'cat'};
    let obj2 = {animal: 'dog'};

    let shelter = new AnimalShelter();
    shelter.enqueue(obj1);
    expect(shelter.dequeue('cat')).toEqual(obj1);

    shelter.enqueue(obj2);
    expect(shelter.dequeue('dog')).toEqual(obj2);
  });

  it('allows the dequeuing of one animal type mixed in with others without changing the FIFO order', () => {
    let obj1 = {animal: 'cat', name: 'MEOWSWORTH'};
    let obj2 = {animal: 'cat', name: 'SYLVESTER'};
    let obj3 = {animal: 'dog', name: 'FIDO'};
    let obj4 = {animal: 'dog', name: 'BIDO'};
    let obj5 = {animal: 'cat', name: 'BRUTUS'};

    let shelter = new AnimalShelter();
    shelter.enqueue(obj1);
    shelter.enqueue(obj4);
    shelter.enqueue(obj2);
    shelter.enqueue(obj3);
    shelter.enqueue(obj5);

    expect(shelter.dequeue('dog')).toEqual(obj4);
    expect(shelter.dequeue('cat')).toEqual(obj1);
    expect(shelter.dequeue('cat')).toEqual(obj2);
    expect(shelter.dequeue('cat')).toEqual(obj5);
    expect(shelter.dequeue('dog')).toEqual(obj3);
  });

  it('returns null if the user enters an animal that is not a cat or dog when dequeueing', () => {
    let shelter = new AnimalShelter();
    let obj1 = {animal: 'cat', name: 'MEOWSWORTH'};

    shelter.enqueue(obj1);
    expect(shelter.dequeue('bird')).toBe(null);
  });
  it('does not allow the dequeuing of animals if there are no animals in the shelter', () => {
    let shelter = new AnimalShelter();

    let error;
    try {
      shelter.dequeue('cat');
    } catch(err) {
      error = err.message;
    }
    expect(error).toBe('There are no animals at the shelter today!');
  });
  it('returns null if a valid animal type if preferred, but no animals of that type are in the shelter', () => {
    let shelter = new AnimalShelter();
    let obj1 = {animal: 'cat', name: 'MEOWSWORTH'};
    let obj2 = {animal: 'cat', name: 'SYLVESTER'};
    let obj3 = {animal: 'cat', name: 'BRUTUS'};

    shelter.enqueue(obj1);
    shelter.enqueue(obj2);
    shelter.enqueue(obj3);

    expect(shelter.dequeue('dog')).toBe(null);
  });
});
