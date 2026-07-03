# TRAJET en VPS Hostinger

Esta configuracion deja TRAJET listo para produccion con:

- Web React servida por Nginx.
- API Node.js/Express interna.
- PostgreSQL persistente en volumen Docker.
- Prisma aplicando el esquema al iniciar.
- WebSocket por `/socket.io`.

## 1. Preparar VPS

En Ubuntu:

```bash
sudo apt update
sudo apt install -y ca-certificates curl git ufw
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
newgrp docker
docker compose version
```

Firewall basico:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable
```

## 2. Subir el proyecto

```bash
git clone TU_REPO_TRAJET Trajet
cd Trajet
cp .env.production.example .env
nano .env
```

Cambia obligatoriamente:

- `APP_URL=https://tu-dominio.com`
- `POSTGRES_PASSWORD`
- `JWT_SECRET` con minimo 32 caracteres
- `TRAJET_ADMIN_EMAIL`
- `TRAJET_ADMIN_PASSWORD`

## 3. Levantar produccion

```bash
docker compose -f docker-compose.prod.yml up -d --build
docker compose -f docker-compose.prod.yml ps
```

Ver logs:

```bash
docker compose -f docker-compose.prod.yml logs -f api
docker compose -f docker-compose.prod.yml logs -f web
```

Probar salud:

```bash
curl http://localhost/api/health
```

## 4. Dominio y SSL

Apunta el dominio o subdominio a la IP del VPS:

```text
A  tu-dominio.com  IP_DEL_VPS
```

Para SSL puedes usar una de estas opciones:

- Hostinger panel / VPS firewall + Cloudflare proxy con SSL Full.
- Nginx Proxy Manager delante de TRAJET.
- Certbot en el VPS si usas Nginx del sistema como proxy.

Si usas Cloudflare, configura SSL/TLS en **Full**.

## 5. Actualizar TRAJET

```bash
cd Trajet
git pull
docker compose -f docker-compose.prod.yml up -d --build
```

## 6. Backup de PostgreSQL

Crear backup:

```bash
mkdir -p backups
docker compose -f docker-compose.prod.yml exec -T postgres pg_dump -U trajet trajet > backups/trajet-$(date +%F-%H%M).sql
```

Restaurar backup:

```bash
cat backups/archivo.sql | docker compose -f docker-compose.prod.yml exec -T postgres psql -U trajet trajet
```

## 7. Notas importantes

- No abras el puerto `5432` al publico.
- No subas `.env` a GitHub.
- Cambia las claves antes de poner clientes reales.
- WhatsApp Business requiere credenciales reales de Meta Cloud API.
- Si cambias `APP_URL`, reconstruye el frontend:

```bash
docker compose -f docker-compose.prod.yml up -d --build web
```
