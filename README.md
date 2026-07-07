# TRAJET SaaS

TRAJET es una plataforma SaaS web para couriers: gestion de ordenes, destinatarios, emisores, rutas, repartidores, usuarios, verificacion, importacion masiva, suscripciones e integraciones.

## Arquitectura

- Frontend: React + Vite.
- Backend: Node.js + Express + Socket.IO.
- Base de datos: PostgreSQL con Prisma ORM.
- Produccion: preparada para AWS, VPS Hostinger o cualquier servidor Docker con Nginx, API interna y PostgreSQL.
- SaaS multi-tenant: todas las entidades principales pertenecen a una organizacion.
- Logo y favicon: `frontend/public/trajet-logo.png` y `frontend/public/favicon.png`.
- Seguridad: JWT, roles y permisos por usuario.
- Operacion: CRUD de remitentes/destinatarios, ordenes con guia automatica y manifiestos por una o varias guias.

## Acceso administrador

En produccion el administrador se configura con variables de entorno:

- `TRAJET_ADMIN_EMAIL`
- `TRAJET_ADMIN_PASSWORD`

No se publica una cuenta demo por seguridad.

## Desarrollo local

```bash
npm install
npm --prefix backend install
npm --prefix frontend install
docker compose up -d postgres
npm run db:push
npm run db:seed
npm run dev
```

En Windows, si PowerShell bloquea `npm.ps1`, usa `npm.cmd`.

Despues de instalar Docker/WSL por primera vez, reinicia Windows y ejecuta:

```powershell
powershell -ExecutionPolicy Bypass -File .\start-trajet.ps1
```

Frontend: `http://localhost:5173`

API: `http://localhost:4000/api`

## Modulos funcionales

- Registro SaaS: el usuario crea cuenta con correo, password y datos de empresa.
- Sesion: iniciar sesion, mantener token local y cerrar sesion desde la interfaz.
- Empresa: editar datos fiscales/contacto/direccion en Configuraciones y guardarlos en PostgreSQL.
- Ordenes: crea envios y genera guia automaticamente.
- Guias: consulta e imprime la guia de cada envio.
- Manifiestos: selecciona una o varias guias y genera manifiesto imprimible.
- Remitentes y destinatarios: agregar, editar y eliminar.
- Usuarios: crear usuarios, cambiar roles y asignar permisos granulares.
- Integraciones: base para Shopify, WooCommerce, Zapier, WhatsApp, Webhooks y API.

## Variables

Copia `backend/.env.example` a `backend/.env` y ajusta credenciales para produccion.

## Produccion en AWS

Para produccion real en AWS con Amazon RDS PostgreSQL:

```bash
cp .env.aws.example .env
docker compose -f docker-compose.aws.yml up -d --build
```

Guia completa: `DEPLOY_AWS.md`.

## Produccion en VPS

Para produccion real con base de datos persistente usa Docker Compose:

```bash
cp .env.production.example .env
docker compose -f docker-compose.prod.yml up -d --build
```

Guia completa: `DEPLOY_HOSTINGER.md`.

La app publica queda en el puerto `80`, la API se sirve por `/api` y PostgreSQL queda privado dentro de Docker.
