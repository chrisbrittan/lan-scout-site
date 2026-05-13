document.querySelectorAll(".contact-button").forEach((button) => {
  button.addEventListener("click", () => {
    const address = `${button.dataset.contactLocal}@${button.dataset.contactDomainA}.${button.dataset.contactDomainB}`;
    const subject = encodeURIComponent(button.dataset.contactSubject || "LAN Scout Support");
    window.location.href = `mailto:${address}?subject=${subject}`;
  });
});
