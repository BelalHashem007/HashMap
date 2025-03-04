const HashMap = function () {
  const loadFactor = 0.8;
  let capacity = 16;
  let arr = [];
  let bucketLength = 0;

  if (bucketLength > capacity * loadFactor) {
    capacity *= 2;
  }
  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= capacity;
    }
    return hashCode;
  }

  function set(key, value) {
    const index = hash(key);
    if (arr.hasOwnProperty(index)) {
      const head = arr[index].getHead();
      let tmp = head;
      while (tmp.nextNode != null) {
        if (tmp.hasOwnProperty(key)) {
          tmp[key] = value;
          return;
        } //update value for existing keys.
        tmp = tmp.nextNode;
      }
      arr[index].addLast(key, value);
    } else {
      const newBucket = bucket(key, value);
      arr[index] = newBucket;
    }
  }
  function bucket(key, value) {
    bucketLength++;
    const newBucket = LinkedList();
    newBucket.addFirst(key, value);
    return newBucket;
  }

  function values() {
    let result = [];
    arr.forEach(logBucket);

    function logBucket(bucket) {
      console.log(bucket.getHead())
    }
  }
  return { set, values };
};

const LinkedList = function () {
  let head = null;
  function node(key, value) {
    return { [key]: value, nextNode: null };
  }
  function addFirst(key, value) {
    head = node(key, value);
  }
  function addLast(key, value) {
    let tmp = head;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = node(key, value);
  }
  function getHead() {
    return head;
  }
  return { addFirst, addLast, getHead };
};

export { HashMap };
