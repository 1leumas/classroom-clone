export class ClassService {
  async fetchClasses() {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    return data;
  }

  async addClass(title, professor) {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, professor }),
    });

    if (!response.ok) {
      throw new Error("Failed to add class");
    }

    return response;
  }

  async removeClass(id) {
    const response = await fetch("http://localhost:3000/api", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error("Failed to remove class");
    }

    return response;
  }
}
