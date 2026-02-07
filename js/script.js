document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Modal Handling
  const modal = document.getElementById("promoModal");
  const closeBtn = document.querySelector(".close-btn");

  // Show promo modal after 5 seconds
  setTimeout(() => {
    if (modal) modal.style.display = "flex";
  }, 5000);

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // Mock Status Check
  const statusForm = document.getElementById("checkStatusForm");
  const statusModal = document.getElementById("statusModal");
  const statusContent = document.getElementById("statusContent");
  const closeStatusBtn = statusModal ? statusModal.querySelector(".close-btn") : null;
  const statusCloseAction = document.getElementById("closeStatusModal");

  if (statusForm && statusModal) {
    statusForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderId = document.getElementById("orderId").value;
      
      // Simulated Data
      const statuses = ["En Reparación", "Listo para retirar", "En espera de repuesto", "Diagnóstico finalizado"];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      statusContent.innerHTML = `
        <div style="background: #f8f9fa; padding: 1rem; border-radius: 5px;">
            <p style="margin-bottom: 0.5rem;"><strong>Orden:</strong> #${orderId}</p>
            <p style="margin-bottom: 0.5rem;"><strong>Dispositivo:</strong> Samsung Galaxy S21 (Ejemplo)</p>
            <p style="margin-bottom: 0.5rem;"><strong>Servicio:</strong> Cambio de Módulo</p>
            <p style="margin-bottom: 0.5rem;"><strong>Estado:</strong> <span style="color: var(--primary-color); font-weight: bold; font-size: 1.1rem;">${randomStatus}</span></p>
            <p style="margin-bottom: 0;"><strong>Fecha est. entrega:</strong> Mañana 18:00hs</p>
        </div>
      `;
      
      statusModal.style.display = "flex";
    });

    const closeModal = () => {
        statusModal.style.display = "none";
    };

    if (closeStatusBtn) closeStatusBtn.addEventListener("click", closeModal);
    if (statusCloseAction) statusCloseAction.addEventListener("click", closeModal);

    window.addEventListener("click", (e) => {
        if (e.target == statusModal) {
            closeModal();
        }
    });
  }

  // Contact Form Mock
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
      contactForm.reset();
    });
  }
});
