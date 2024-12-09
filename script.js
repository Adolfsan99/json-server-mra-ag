document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "http://localhost:3000/tarjetas";
  const lista = document.querySelector(".lista");
  const addButton = document.querySelector(".add-button");
  const modal = document.querySelector(".modal");
  const form = document.querySelector("#addAnimeForm");

  async function fetchCards() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error en la respuesta de la red");
      }
      const data = await response.json();
      renderCards(data);
    } catch (error) {
      console.error("Error al cargar las tarjetas:", error);
      lista.innerHTML =
        "<p>Error al cargar las tarjetas de anime. Por favor, intenta más tarde.</p>";
    }
  }

  function renderCards(cards) {
    lista.innerHTML = "";
    cards.forEach((card) => {
      const cardElement = document.createElement("article");
      cardElement.className = "card";
      cardElement.dataset.id = card.id;
      cardElement.innerHTML = `
        <div class="delete-icon">×</div>
        <div class="category-badge">${card.categoria}</div>
        <img class="card-img-background" src="${card.imagenFondo}" alt="${card.título}" loading="lazy"/>
        <a href="${card.enlace}" target="_blank">
          <img class="card-img-character" src="${card.imagenSuperior}" alt="${card.título} personaje" loading="lazy"/>
        </a>
        <p class="card-text-tittle">${card.título}</p>
      `;

      cardElement
        .querySelector(".delete-icon")
        .addEventListener("click", (e) => {
          e.stopPropagation();
          deleteCard(card.id);
        });
      lista.appendChild(cardElement);
    });
  }

  async function deleteCard(id) {
    if (confirm("¿Estás seguro de eliminar este anime?")) {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchCards();
        } else {
          throw new Error("Error al eliminar la tarjeta");
        }
      } catch (error) {
        console.error("Error al eliminar la tarjeta:", error);
        alert("Error al eliminar la tarjeta. Por favor, intenta de nuevo.");
      }
    }
  }

  addButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  document.querySelector(".btn-secondary").addEventListener("click", () => {
    modal.style.display = "none";
    form.reset();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newCard = {
      título: form.title.value,
      categoria: form.category.value,
      imagenFondo: form.backgroundImage.value,
      imagenSuperior: form.characterImage.value,
      enlace: form.link.value,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      });

      if (response.ok) {
        modal.style.display = "none";
        form.reset();
        fetchCards();
      } else {
        throw new Error("Error al agregar la tarjeta");
      }
    } catch (error) {
      console.error("Error al agregar la tarjeta:", error);
      alert("Error al agregar la tarjeta. Por favor, intenta de nuevo.");
    }
  });

  fetchCards();
});
