# TRAJET en AWS

Esta guia deja TRAJET listo para produccion en AWS usando una arquitectura SaaS practica:

- EC2 con Docker Compose para ejecutar frontend Nginx y API Node.js.
- Amazon RDS PostgreSQL para la base de datos real.
- Route 53 para DNS.
- HTTPS con Application Load Balancer + ACM, o Cloudflare delante del EC2.
- Backups automaticos desde RDS.

## 1. Crear RDS PostgreSQL

En AWS crea una base PostgreSQL:

- Motor: PostgreSQL 16.
- DB name: `trajet`.
- Usuario: `trajet`.
- Public access: `No`, si EC2 queda en la misma VPC.
- Backups: activados.
- Storage autoscaling: activado.

En el Security Group de RDS permite el puerto `5432` solo desde el Security Group del EC2.

Guarda el endpoint de RDS. Lo usaras en `DATABASE_URL`.

## 2. Crear EC2

Recomendado para empezar:

- Ubuntu Server 24.04 LTS.
- Tipo: `t3.small` minimo, `t3.medium` recomendado si habra clientes reales.
- Disco: 30 GB gp3 o mas.
- Security Group:
  - `22` solo desde tu IP.
  - `80` publico.
  - `443` publico si no usas un Load Balancer.

Conectate por SSH e instala Docker:

```bash
sudo apt update
sudo apt install -y ca-certificates curl git ufw
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
newgrp docker
docker compose version
```

Firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable
```

## 3. Subir TRAJET al EC2

```bash
git clone TU_REPO_TRAJET Trajet
cd Trajet
cp .env.aws.example .env
nano .env
```

Cambia obligatoriamente:

- `APP_URL=https://app.tu-dominio.com`
- `DATABASE_URL=postgresql://...@ENDPOINT_RDS:5432/trajet?schema=public&sslmode=require`
- `JWT_SECRET`, minimo 32 caracteres.
- `TRAJET_ADMIN_EMAIL`
- `TRAJET_ADMIN_PASSWORD`
- `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` y `SMTP_FROM` para enviar bienvenida y codigo de verificacion.

No subas `.env` a GitHub.

## 3.1. Configurar correo SMTP

Para AWS se recomienda Amazon SES:

1. Verifica tu dominio en Amazon SES.
2. Crea credenciales SMTP en SES.
3. Si tu cuenta SES esta en sandbox, solicita salida a produccion.
4. Configura `.env`:

```bash
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=TU_USUARIO_SMTP_SES
SMTP_PASS=TU_PASSWORD_SMTP_SES
SMTP_FROM=TRAJET <no-reply@tu-dominio.com>
```

Sin SMTP en produccion, el registro no podra enviar el codigo de activacion.

## 4. Levantar produccion

```bash
docker compose -f docker-compose.aws.yml up -d --build
docker compose -f docker-compose.aws.yml ps
```

Ver logs:

```bash
docker compose -f docker-compose.aws.yml logs -f api
docker compose -f docker-compose.aws.yml logs -f web
```

Probar salud:

```bash
curl http://localhost/api/health
```

## 5. Crear usuario administrador inicial

La API crea o actualiza el administrador desde:

- `TRAJET_ADMIN_EMAIL`
- `TRAJET_ADMIN_PASSWORD`

Para ejecutar seed manual:

```bash
docker compose -f docker-compose.aws.yml exec api npm run db:seed
```

## 6. Dominio y HTTPS

Opcion recomendada en AWS:

1. Crea un certificado en ACM para `app.tu-dominio.com`.
2. Crea un Application Load Balancer publico.
3. Listener 443 con certificado ACM.
4. Target Group hacia el EC2 por puerto 80.
5. En Route 53 crea un registro `A/ALIAS` hacia el Load Balancer.

Opcion simple:

- Apunta `A app.tu-dominio.com` a la IP elastica del EC2.
- Usa Cloudflare con SSL/TLS en modo **Full**.

## 7. Actualizar TRAJET

```bash
cd Trajet
git pull
docker compose -f docker-compose.aws.yml up -d --build
```

## 8. Backups y restauracion

Usa los snapshots automaticos de RDS. Para un backup manual:

```bash
docker compose -f docker-compose.aws.yml exec api npx prisma db pull
```

Tambien puedes crear snapshots desde la consola de RDS antes de cambios grandes.

## 9. Escalado SaaS recomendado

Cuando tengas mas clientes:

- Mover `web` a S3 + CloudFront.
- Mover `api` a ECS Fargate.
- Mantener RDS PostgreSQL con Multi-AZ.
- Usar Secrets Manager para `DATABASE_URL`, `JWT_SECRET` y WhatsApp.
- Usar S3 para logos, guias, manifiestos e importaciones.
- Activar CloudWatch Logs y alarmas.

## 10. Checklist antes de clientes reales

- `JWT_SECRET` fuerte.
- RDS sin acceso publico.
- Backups de RDS activos.
- HTTPS activo.
- `.env` fuera de GitHub.
- Admin privado configurado.
- SMTP probado para registro y verificacion de correo.
- WhatsApp con credenciales reales si vas a enviar notificaciones.
- Probar registro, login, crear orden, guia, manifiesto, mapa y cierre de sesion.
