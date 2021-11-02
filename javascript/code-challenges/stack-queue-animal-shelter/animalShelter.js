const Queue = require('./queue');

class AnimalShelter {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  enqueue(animal) {
    if(this.q2.isEmpty()) {
      this.q1.enqueue(animal);
    } else {
      this.q2.enqueue(animal);
    }
  }

  dequeue(pref) {
    let result = null;

    if(this.q2.isEmpty() && this.q1.isEmpty())
      throw new Error('There are no animals at the shelter today!');

    if(pref !== 'dog' && pref !== 'cat')
      return null;

    //if first item is of right type, don't bother swapping queues
    let firstItemHit = true;
    if(this.q2.isEmpty()) {
      while(!this.q1.isEmpty()) {
        let temp = this.q1.dequeue();

        if(temp.animal === pref) {
          result = temp;
          break;
        }
        firstItemHit = false;
        this.q2.enqueue(temp);
      }
      while(!this.q1.isEmpty() && !firstItemHit) {
        let temp = this.q1.dequeue();
        this.q2.enqueue(temp);
      }
    } else {
      while(!this.q2.isEmpty()) {
        let temp = this.q2.dequeue();
        if(temp.animal === pref) {
          result = temp;
          break;
        }
        firstItemHit = false;
        this.q1.enqueue(temp);
      }
      while(!this.q2.isEmpty() && !firstItemHit) {
        let temp = this.q2.dequeue();
        this.q1.enqueue(temp);
      }
    }
    return result;
  }
}

module.exports = AnimalShelter;
