class StorageMock {
  static data = [];

  add(obj) {
    StorageMock.data.push(obj);
  }
}

export default StorageMock;