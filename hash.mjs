class Hashmap {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) return sameKeyItem[1];
    }
    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) return true;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem, 1));
      }
    }
  }

  length() {
    let len = 0;
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) len++;
    }
    return len + 1;
  }
  clear() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = undefined;
    }
  }
  keys() {}
  values() {}
  entries() {}
}

// Test Cases
let test = new Hashmap(8);

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test);

console.log(test.has('kite'));

console.log(test.get('lion'));
test.remove('lion');
console.log(test.get('lion'));

console.log(test.length());

console.log(test.loadFactor());

test.clear();
console.log(test);
