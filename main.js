// Toggle del menú móvil
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#primary-nav');

if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });
}

// Calculadora de presupuesto (estimativa)
const tipo = document.getElementById('tipo');
const servicio = document.getElementById('servicio');
const calcBtn = document.getElementById('calc-btn');
const result = document.getElementById('calc-result');

const BASES = {
  movil: 25,
  portatil: 35,
  tablet: 30,
  pc: 40
};

const SERVICIOS = {
  pantalla: 90,
  bateria: 50,
  diagnostico: 25,
  limpieza: 35
};

if (calcBtn) {
  calcBtn.addEventListener('click', () => {
    const t = tipo.value;
    const s = servicio.value;
    if (!t || !s) {
      result.textContent = 'Selecciona tipo de dispositivo y servicio.';
      result.style.color = 'var(--danger)';
      return;
    }
    const total = (BASES[t] || 0) + (SERVICIOS[s] || 0);
    result.style.color = 'var(--accent)';
    result.textContent = `Estimación: ${total} € (IVA no incluido).`;
  });
}

// Cerrar submenús al hacer click fuera (UX)
document.addEventListener('click', (e) => {
  const inside = e.target.closest('.has-sub');
  if (!inside) {
    document.querySelectorAll('.has-sub .sub-menu').forEach(menu => {
      menu.style.display = '';
    });
  }
});
