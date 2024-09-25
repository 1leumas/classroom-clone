import fs from "node:fs/promises";

export class Database {
  #database = [];

  constructor() {
    fs.readFile("./database.json", "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile("./database.json", JSON.stringify(this.#database));
  }

  select() {
    return this.#database;
  }

  insert(data) {
    this.#database.push(data);
    this.#persist();

    return;
  }

  delete(id) {
    const rowIndex = this.#database.findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database.splice(rowIndex, 1);
      this.#persist();
    }
  }
}
