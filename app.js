const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 10 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h1M9 13h1M9 17h1M16 13h1M16 17h1"/></svg>',
  route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M12 19h2a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h3"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 17h4V5H2v12h3"/><path d="M14 8h4l4 4v5h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
  scan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3v3a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5"/><path d="M18 12h.01"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg>',
  plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v4a6 6 0 0 1-12 0V8Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5v14"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m8 5 11 7-11 7Z"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m20 6-11 11-5-5"/></svg>'
};

const seedOrders = [
  { id: 67, sender: "Hector Villasenor", recipient: "D. Eric Aguayo", phone: "+56 9 4480 2301", sale: "23324234", city: "de Arriba", address: "Av. Los Aromos 221", payment: "POR PAGAR", shipping: "EN TRANSITO", created: "2026-06-27", delivered: "", type: "Entrega", notes: "Producto delicado", driver: "", fee: 5200 },
  { id: 66, sender: "Hector Villasenor", recipient: "Carmen Pedraza", phone: "+56 9 7812 1221", sale: "213213", city: "de Arriba", address: "Las Violetas 450", payment: "PAGADO", shipping: "POR ENVIAR", created: "2026-06-25", delivered: "", type: "Entrega", notes: "Transportar con cuidado", driver: "", fee: 4500 },
  { id: 65, sender: "Felipe Pinto", recipient: "Luis", phone: "+56 9 2222 1010", sale: "98764", city: "Las Condes", address: "Apoquindo 6100", payment: "POR PAGAR", shipping: "ENTREGADO", created: "2026-06-22", delivered: "2026-06-24", type: "Entrega", notes: "Recibido conforme", driver: "Admin", fee: 6800 },
  { id: 64, sender: "Alberto Vila", recipient: "D. Eric Aguayo", phone: "+56 9 5000 3000", sale: "222", city: "de Arriba", address: "Prat 311", payment: "PAGADO", shipping: "POR ENVIAR", created: "2026-06-21", delivered: "", type: "Entrega", notes: "", driver: "Admin", fee: 3900 },
  { id: 63, sender: "Maria Perez", recipient: "Berta Carretero Hijo", phone: "+56 9 3333 8899", sale: "333", city: "del Penedes", address: "Los Carrera 202", payment: "POR PAGAR", shipping: "EN TRANSITO", created: "2026-06-18", delivered: "", type: "Entrega", notes: "", driver: "Admin", fee: 5900 },
  { id: 62, sender: "Maria Perez", recipient: "Carmen Pedraza", phone: "+56 9 1111 2222", sale: "34544", city: "de Arriba", address: "Balmaceda 889", payment: "POR PAGAR", shipping: "POR ENVIAR", created: "2026-06-15", delivered: "", type: "Entrega", notes: "", driver: "", fee: 4100 },
  { id: 61, sender: "Super-Admin", recipient: "Julia", phone: "+56 9 9721 1511", sale: "4101850333378", city: "Santiago", address: "Santo Domingo 1401", payment: "PAGADO", shipping: "ENTREGADO", created: "2026-06-11", delivered: "2026-06-12", type: "Recolecta", notes: "desde zapier", driver: "Super-Admin", fee: 7200 },
  { id: 60, sender: "Super-Admin", recipient: "Jane", phone: "+56 9 9721 1814", sale: "4101797118146", city: "Santiago", address: "Merced 454", payment: "PAGADO", shipping: "POR ENVIAR", created: "2026-06-09", delivered: "", type: "Recolecta", notes: "desde zapier", driver: "Super-Admin", fee: 7200 }
];

const drivers = ["", "Admin", "Super-Admin", "Carla Rojas", "Diego Munoz", "Valentina Soto"];
const state = {
  orders: JSON.parse(localStorage.getItem("trajet.orders") || "null") || seedOrders,
  logs: JSON.parse(localStorage.getItem("trajet.logs") || "null") || [
    { title: "Sistema iniciado", text: "TRAJET listo para operar envios.", time: new Date().toLocaleString("es") }
  ],
  selected: new Set()
};

function save() {
  localStorage.setItem("trajet.orders", JSON.stringify(state.orders));
  localStorage.setItem("trajet.logs", JSON.stringify(state.logs.slice(0, 20)));
}

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function money(value) {
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(value);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function toast(message) {
  const el = qs("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

function log(title, text) {
  state.logs.unshift({ title, text, time: new Date().toLocaleString("es") });
  save();
  renderActivity();
}

function badgeClass(value) {
  if (value === "PAGADO") return "paid";
  if (value === "POR PAGAR") return "unpaid";
  if (value === "ENTREGADO") return "delivered";
  if (value === "EN TRANSITO") return "transit";
  return "pending";
}

function orderRow(order, full = false) {
  const checked = state.selected.has(order.id) ? "checked" : "";
  const extra = full
    ? `<td>${order.address}</td><td><span class="badge ${badgeClass(order.payment)}">${order.payment}</span></td><td><span class="badge ${badgeClass(order.shipping)}">${order.shipping}</span></td><td>${order.created}</td>`
    : `<td>${order.sale}</td><td>${order.city}</td><td><span class="badge ${badgeClass(order.payment)}">${order.payment}</span></td><td><span class="badge ${badgeClass(order.shipping)}">${order.shipping}</span></td><td>${order.type}</td>`;
  return `
    <tr>
      <td><input class="row-check" data-id="${order.id}" type="checkbox" ${checked} aria-label="Seleccionar orden ${order.id}"></td>
      <td><a>${order.id}</a></td>
      <td><a>${order.sender}</a></td>
      <td><a>${order.recipient}</a></td>
      ${extra}
      <td><a>${order.driver || "Sin asignar"}</a></td>
      <td>
        <div class="row-actions">
          <button data-action="view" data-id="${order.id}" title="Ver">${icons.eye}</button>
          <button data-action="edit" data-id="${order.id}" title="Editar">${icons.edit}</button>
          <button data-action="deliver" data-id="${order.id}" title="Entregar">${icons.check}</button>
          <button data-action="delete" data-id="${order.id}" title="Eliminar">${icons.trash}</button>
        </div>
      </td>
    </tr>`;
}

function filteredOrders() {
  const term = (qs("#global-search")?.value || "").toLowerCase().trim();
  const status = qs("#status-filter")?.value || "all";
  return state.orders.filter(order => {
    const haystack = Object.values(order).join(" ").toLowerCase();
    const matchesTerm = !term || haystack.includes(term);
    const matchesStatus = status === "all" || order.payment === status || order.shipping === status;
    return matchesTerm && matchesStatus;
  });
}

function renderOrders() {
  const rows = filteredOrders().map(order => orderRow(order)).join("");
  qs("#orders-body").innerHTML = rows || emptyRow("No hay ordenes con ese filtro", 11);
  qs("#orders-full-body").innerHTML = state.orders.map(order => orderRow(order, true)).join("") || emptyRow("No hay ordenes registradas", 10);
  bindRowEvents();
}

function emptyRow(text, cols) {
  return `<tr><td colspan="${cols}">${text}</td></tr>`;
}

function bindRowEvents() {
  qsa(".row-check").forEach(input => {
    input.addEventListener("change", event => {
      const id = Number(event.currentTarget.dataset.id);
      event.currentTarget.checked ? state.selected.add(id) : state.selected.delete(id);
    });
  });
  qsa("[data-action]").forEach(button => {
    button.addEventListener("click", () => handleRowAction(button.dataset.action, Number(button.dataset.id)));
  });
}

function handleRowAction(action, id) {
  const order = state.orders.find(item => item.id === id);
  if (!order) return;
  if (action === "view") {
    toast(`#${order.id} ${order.recipient}: ${order.address}, ${order.city}. ${order.shipping}.`);
  }
  if (action === "edit") {
    fillForm(order);
    navigate("orders");
  }
  if (action === "deliver") {
    order.shipping = "ENTREGADO";
    order.delivered = today();
    log("Orden entregada", `#${order.id} fue marcada como entregada.`);
    rerender();
  }
  if (action === "delete") {
    state.orders = state.orders.filter(item => item.id !== id);
    state.selected.delete(id);
    log("Orden eliminada", `#${id} salio del tablero operativo.`);
    rerender();
  }
}

function renderStats() {
  const total = state.orders.length;
  const paid = state.orders.filter(order => order.payment === "PAGADO").length;
  const delivered = state.orders.filter(order => order.shipping === "ENTREGADO").length;
  const revenue = state.orders.reduce((sum, order) => sum + Number(order.fee || 0), 0);
  qs("#created-count").textContent = total;
  qs("#created-delta").textContent = `${paid} pagadas, ${delivered} entregadas`;
  qs("#revenue-total").textContent = money(revenue);
  qs("#avg-time").textContent = delivered ? "31 h" : "0 h";
  renderStatusList();
  drawChart();
}

function renderStatusList() {
  const items = [
    ["POR PAGAR", "#e85d5d", state.orders.filter(o => o.payment === "POR PAGAR").length],
    ["PAGADO", "#21a66b", state.orders.filter(o => o.payment === "PAGADO").length],
    ["POR ENVIAR", "#d99b19", state.orders.filter(o => o.shipping === "POR ENVIAR").length],
    ["EN TRANSITO", "#2384d9", state.orders.filter(o => o.shipping === "EN TRANSITO").length],
    ["ENTREGADO", "#00a59b", state.orders.filter(o => o.shipping === "ENTREGADO").length]
  ];
  qs("#status-summary").innerHTML = items.map(([label, color, count]) => {
    const pct = state.orders.length ? Math.round((count / state.orders.length) * 100) : 0;
    return `<li><span class="dot" style="background:${color}"></span>${label}: ${count} (${pct}%)</li>`;
  }).join("");
}

function drawChart() {
  const canvas = qs("#status-chart");
  const ctx = canvas.getContext("2d");
  const values = [
    ["#e85d5d", state.orders.filter(o => o.payment === "POR PAGAR").length],
    ["#21a66b", state.orders.filter(o => o.payment === "PAGADO").length],
    ["#2384d9", state.orders.filter(o => o.shipping === "EN TRANSITO").length],
    ["#00a59b", state.orders.filter(o => o.shipping === "ENTREGADO").length]
  ];
  const total = values.reduce((sum, item) => sum + item[1], 0) || 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let start = -Math.PI / 2;
  values.forEach(([color, count]) => {
    const angle = (count / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(65, 65, 42, start, start + angle);
    ctx.lineWidth = 13;
    ctx.strokeStyle = color;
    ctx.stroke();
    start += angle;
  });
  ctx.beginPath();
  ctx.arc(65, 65, 28, 0, Math.PI * 2);
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--surface");
  ctx.fill();
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--ink");
  ctx.font = "700 13px Inter";
  ctx.textAlign = "center";
  ctx.fillText(`${state.orders.length}`, 65, 69);
}

function renderActivity() {
  qs("#activity-log").innerHTML = state.logs.map(item => `
    <div class="event">
      <strong>${item.title}</strong>
      <span>${item.text}</span>
      <span>${item.time}</span>
    </div>`).join("");
}

function renderDrivers() {
  qs("#driver").innerHTML = drivers.map(driver => `<option>${driver}</option>`).join("");
}

function fillForm(order) {
  qs("#form-title").textContent = `Editar orden #${order.id}`;
  ["sender", "recipient", "phone", "address", "city", "sale", "payment", "shipping", "type", "fee", "driver", "notes"].forEach(key => {
    qs(`#${key}`).value = order[key] || "";
  });
  qs("#order-id").value = order.id;
}

function resetForm() {
  qs("#form-title").textContent = "Nueva orden";
  qs("#order-form").reset();
  qs("#order-id").value = "";
  qs("#fee").value = 4500;
}

function submitOrder(event) {
  event.preventDefault();
  const data = {
    id: qs("#order-id").value ? Number(qs("#order-id").value) : Math.max(0, ...state.orders.map(order => order.id)) + 1,
    sender: qs("#sender").value.trim(),
    recipient: qs("#recipient").value.trim(),
    phone: qs("#phone").value.trim(),
    address: qs("#address").value.trim(),
    city: qs("#city").value.trim(),
    sale: qs("#sale").value.trim(),
    payment: qs("#payment").value,
    shipping: qs("#shipping").value,
    type: qs("#type").value,
    fee: Number(qs("#fee").value || 0),
    driver: qs("#driver").value,
    notes: qs("#notes").value.trim(),
    created: today(),
    delivered: qs("#shipping").value === "ENTREGADO" ? today() : ""
  };
  const index = state.orders.findIndex(order => order.id === data.id);
  if (index >= 0) {
    data.created = state.orders[index].created;
    state.orders[index] = data;
    log("Orden actualizada", `#${data.id} quedo lista para ${data.recipient}.`);
  } else {
    state.orders.unshift(data);
    log("Orden creada", `#${data.id} agregada para ${data.recipient}.`);
  }
  resetForm();
  rerender();
  toast("Orden guardada correctamente.");
}

function applyBulk() {
  const action = qs("#bulk-action").value;
  const ids = [...state.selected];
  if (!action || !ids.length) {
    toast("Selecciona ordenes y una accion.");
    return;
  }
  if (action === "delete") {
    state.orders = state.orders.filter(order => !state.selected.has(order.id));
    log("Accion masiva", `${ids.length} ordenes eliminadas.`);
  } else {
    state.orders.forEach(order => {
      if (!state.selected.has(order.id)) return;
      if (action === "mark-paid") order.payment = "PAGADO";
      if (action === "dispatch") order.shipping = "EN TRANSITO";
      if (action === "delivered") {
        order.shipping = "ENTREGADO";
        order.delivered = today();
      }
    });
    log("Accion masiva", `${ids.length} ordenes actualizadas.`);
  }
  state.selected.clear();
  qs("#bulk-action").value = "";
  rerender();
}

function moduleTable(title, intro, columns, rows) {
  return `
    <section class="panel">
      <div class="panel-header">
        <div><h2>${title}</h2><p>${intro}</p></div>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr>${columns.map(col => `<th>${col}</th>`).join("")}</tr></thead>
          <tbody>${rows.join("")}</tbody>
        </table>
      </div>
    </section>`;
}

function renderModules() {
  const recipients = uniqueBy(state.orders, "recipient").map(order => `<tr><td><a>${order.recipient}</a></td><td>${order.phone}</td><td>${order.address}</td><td>${order.city}</td><td>${countBy("recipient", order.recipient)}</td></tr>`);
  qs("#recipients-view").innerHTML = moduleTable("Destinatarios", "Agenda consolidada desde todas las ordenes.", ["Nombre", "Telefono", "Direccion", "Comuna", "Envios"], recipients);

  const senders = uniqueBy(state.orders, "sender").map(order => `<tr><td><a>${order.sender}</a></td><td>${countBy("sender", order.sender)}</td><td>${money(sumBySender(order.sender))}</td><td><span class="badge active">Activo</span></td></tr>`);
  qs("#senders-view").innerHTML = moduleTable("Emisores", "Clientes que originan envios en TRAJET.", ["Emisor", "Ordenes", "Facturacion", "Estado"], senders);

  const routeRows = groupByCity().map(route => `<tr><td><a>Ruta ${route.city}</a></td><td>${route.count}</td><td>${route.pending}</td><td>${route.drivers || "Sin asignar"}</td><td><span class="badge ${route.pending ? "warning" : "delivered"}">${route.pending ? "Abierta" : "Completa"}</span></td></tr>`);
  qs("#routes-view").innerHTML = moduleTable("Rutas", "Agrupacion operativa por comuna.", ["Ruta", "Ordenes", "Pendientes", "Repartidores", "Estado"], routeRows);

  const driverRows = drivers.filter(Boolean).map(driver => `<tr><td><a>${driver}</a></td><td>${state.orders.filter(o => o.driver === driver).length}</td><td>${state.orders.filter(o => o.driver === driver && o.shipping === "ENTREGADO").length}</td><td><span class="badge active">Disponible</span></td></tr>`);
  qs("#drivers-view").innerHTML = moduleTable("Repartidores", "Carga, entregas y disponibilidad del equipo.", ["Nombre", "Asignadas", "Entregadas", "Estado"], driverRows);

  qs("#users-view").innerHTML = `<section class="panel"><div class="panel-header"><div><h2>Usuarios</h2><p>Roles principales del sistema.</p></div></div><div class="cards-grid">${["Super-Admin|Acceso total|Activo", "Admin|Operaciones y rutas|Activo", "Verificador|Lectura y validacion|Activo"].map(item => {
    const [name, role, status] = item.split("|");
    return `<article class="mini-card"><strong>${name}</strong><span>${role}</span><span class="badge active">${status}</span></article>`;
  }).join("")}</div></section>`;

  qs("#verify-view").innerHTML = `
    <section class="panel"><div class="panel-header"><div><h2>Verificador de ordenes</h2><p>Consulta rapida por ID, destinatario o venta.</p></div></div>
    <div class="module-block verify-box"><label>Codigo o texto<input id="verify-input" placeholder="Ej: 67, Carmen, 410185"></label><button class="primary-button" id="verify-button">${icons.scan}Verificar</button><div class="verify-result" id="verify-result">Ingresa un dato para validar una orden.</div></div></section>`;

  qs("#import-view").innerHTML = `
    <section class="panel"><div class="panel-header"><div><h2>Importacion masiva</h2><p>Pega filas CSV: emisor,destinatario,telefono,direccion,comuna,venta.</p></div></div>
    <div class="module-block import-box"><textarea id="import-text" rows="8" placeholder="Acme,Sofia,+56 9 1234 5678,Av Norte 100,Santiago,TRJ-900"></textarea><button class="primary-button" id="import-button">${icons.upload}Importar filas</button></div></section>`;

  qs("#billing-view").innerHTML = `<section class="panel"><div class="panel-header"><div><h2>Suscripciones</h2><p>Planes para couriers en crecimiento.</p></div></div><div class="cards-grid">${[
    ["Base", "Hasta 300 ordenes/mes", "$29.990"],
    ["Operacion", "Rutas, importacion y usuarios", "$59.990"],
    ["Enterprise", "Integraciones y SLA dedicado", "A medida"]
  ].map(plan => `<article class="mini-card"><strong>${plan[0]}</strong><span>${plan[1]}</span><strong>${plan[2]}</strong><button class="secondary-button">Seleccionar</button></article>`).join("")}</div></section>`;

  qs("#settings-view").innerHTML = `<section class="panel"><div class="panel-header"><div><h2>Configuraciones</h2><p>Parametros generales de la operacion.</p></div></div><div class="module-block settings-grid"><label>Nombre comercial<input value="TRAJET"></label><label>Moneda<select><option>CLP</option><option>USD</option></select></label><label>Notificaciones<select><option>Email y panel</option><option>Solo panel</option></select></label><button class="primary-button" id="save-settings">${icons.save}Guardar configuracion</button></div></section>`;

  qs("#integrations-view").innerHTML = `<section class="panel"><div class="panel-header"><div><h2>Integraciones</h2><p>Conecta TRAJET con tus canales de venta.</p></div></div><div class="cards-grid">${["Shopify", "WooCommerce", "Zapier", "API REST", "WhatsApp", "Webhooks"].map(name => `<article class="mini-card"><strong>${name}</strong><span>Sincronizacion disponible</span><button class="secondary-button" data-connect="${name}">${icons.plug}Conectar</button></article>`).join("")}</div></section>`;

  bindDynamicModules();
}

function bindDynamicModules() {
  qs("#verify-button")?.addEventListener("click", () => {
    const value = qs("#verify-input").value.toLowerCase().trim();
    const match = state.orders.find(order => Object.values(order).join(" ").toLowerCase().includes(value));
    qs("#verify-result").innerHTML = match
      ? `<strong>Orden #${match.id} encontrada</strong><br>${match.recipient}, ${match.address}, ${match.city}. <span class="badge ${badgeClass(match.shipping)}">${match.shipping}</span>`
      : "No se encontro una orden con ese dato.";
  });
  qs("#import-button")?.addEventListener("click", () => {
    const lines = qs("#import-text").value.split(/\n+/).map(line => line.trim()).filter(Boolean);
    lines.forEach(line => {
      const [sender, recipient, phone, address, city, sale] = line.split(",").map(value => (value || "").trim());
      if (!sender || !recipient) return;
      state.orders.unshift({ id: Math.max(0, ...state.orders.map(o => o.id)) + 1, sender, recipient, phone, address, city, sale, payment: "POR PAGAR", shipping: "POR ENVIAR", created: today(), delivered: "", type: "Entrega", notes: "Importado por CSV", driver: "", fee: 4500 });
    });
    qs("#import-text").value = "";
    log("Importacion masiva", `${lines.length} filas procesadas.`);
    rerender();
    toast("Importacion completada.");
  });
  qs("#save-settings")?.addEventListener("click", () => toast("Configuracion guardada."));
  qsa("[data-connect]").forEach(button => button.addEventListener("click", () => toast(`${button.dataset.connect} quedo en modo de configuracion.`)));
}

function uniqueBy(items, key) {
  return [...new Map(items.map(item => [item[key], item])).values()];
}

function countBy(key, value) {
  return state.orders.filter(order => order[key] === value).length;
}

function sumBySender(sender) {
  return state.orders.filter(order => order.sender === sender).reduce((sum, order) => sum + Number(order.fee || 0), 0);
}

function groupByCity() {
  return Object.values(state.orders.reduce((acc, order) => {
    acc[order.city] ||= { city: order.city, count: 0, pending: 0, drivers: new Set() };
    acc[order.city].count += 1;
    if (order.shipping !== "ENTREGADO") acc[order.city].pending += 1;
    if (order.driver) acc[order.city].drivers.add(order.driver);
    return acc;
  }, {})).map(route => ({ ...route, drivers: [...route.drivers].join(", ") }));
}

function exportCsv() {
  const headers = ["id", "sender", "recipient", "phone", "sale", "city", "address", "payment", "shipping", "created", "delivered", "type", "driver", "fee", "notes"];
  const csv = [headers.join(","), ...state.orders.map(order => headers.map(key => `"${String(order[key] ?? "").replaceAll('"', '""')}"`).join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `trajet-ordenes-${today()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  toast("CSV exportado.");
}

function navigate(view) {
  qsa(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === view));
  qsa(".view").forEach(section => section.classList.toggle("active", section.id === `${view}-view`));
  const active = qs(`#${view}-view`);
  qs("#view-title").textContent = active?.dataset.title || "TRAJET";
}

function rerender() {
  save();
  renderStats();
  renderOrders();
  renderModules();
}

function boot() {
  qsa("[data-icon]").forEach(el => {
    const name = el.dataset.icon;
    if (icons[name]) el.innerHTML = icons[name];
  });
  renderDrivers();
  rerender();
  renderActivity();

  qsa(".nav-item").forEach(item => item.addEventListener("click", () => navigate(item.dataset.view)));
  qs("#global-search").addEventListener("input", renderOrders);
  qs("#status-filter").addEventListener("change", renderOrders);
  qs("#order-form").addEventListener("submit", submitOrder);
  qs("#reset-form").addEventListener("click", resetForm);
  qs("#new-order-button").addEventListener("click", () => {
    resetForm();
    navigate("orders");
    qs("#sender").focus();
  });
  qs("#apply-bulk").addEventListener("click", applyBulk);
  qs("#export-button").addEventListener("click", exportCsv);
  qs("#clear-log").addEventListener("click", () => {
    state.logs = [];
    log("Actividad limpia", "Se reinicio el historial visible.");
  });
  qs("#select-all").addEventListener("change", event => {
    filteredOrders().forEach(order => event.currentTarget.checked ? state.selected.add(order.id) : state.selected.delete(order.id));
    renderOrders();
  });
  qs("#theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    drawChart();
  });
}

document.addEventListener("DOMContentLoaded", boot);
