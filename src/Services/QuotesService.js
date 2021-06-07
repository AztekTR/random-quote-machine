class QuoteService {
  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  async getUsers() {
    const responce = await fetch(
      `https://jsonplaceholder.typicode.com/users/${this.getRandomInt(1, 11)}`
    ).then((responce) => responce.json())
    return await responce
  }
}

export default QuoteService
