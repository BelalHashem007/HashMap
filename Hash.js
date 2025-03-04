const HashMap = function () {
  const loadFactor = 0.8;
  let capacity = 16;
  let arr = [];
  let bucketLength = 0;

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
      if (bucketLength > capacity * loadFactor) {
        capacity *= 2;
      }
    }
  }
  function bucket(key, value) {
    bucketLength++;
    const newBucket = LinkedList();
    newBucket.addFirst(key, value);
    return newBucket;
  }

  function values() {
    arr.forEach(logBucket);

    function logBucket(bucket) {
      console.log(bucket.getHead());
    }
  }

  function get(key) {
    let index = hash(key);
    let head = arr[index].getHead();
    do {
      if (head.hasOwnProperty(key)) {
        return head[key];
      }
      head = head.nextNode;
    } while (head != null);
  }

  function has(key) {
    let result = false;
    let index = hash(key);
    if (!arr.hasOwnProperty(index)) {
      return result;
    }
    let head = arr[index].getHead();
    while (head != null) {
      if (Object.hasOwn(head, key)) {
        return (result = true);
      }
      head = head.nextNode;
    }
    return result;
  }

  function remove(key) {
    let index = hash(key);
    if (!Object.hasOwn(arr, index)){
      return false;
    }
    let list = arr[index];
    let removed =  list.removeNode(key);
    if (list.getHead() == null){
       delete arr[index];
    }
    return removed;
  }

  return { set, values, get, has, remove };
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
  function removeNode(key) {
    let tmp = head;
    let prev = null;
    while (tmp != null){
      if (Object.hasOwn(tmp,key)){
        if (tmp == head){
          head = head.nextNode;
        }else {
          prev.nextNode = tmp.nextNode;
        }
        return true;
      }
      prev = tmp;
      tmp = tmp.nextNode;
    }
    return false;
  }
  return { addFirst, addLast, getHead , removeNode};
};

export { HashMap };
