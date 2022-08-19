class StorageMock {
  static data = [];

  static add(obj) {
    StorageMock.data.push(obj);
  }
}

export default StorageMock;