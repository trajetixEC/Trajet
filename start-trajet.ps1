$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

Write-Host "Starting TRAJET dependencies..."
docker compose up -d postgres

Write-Host "Applying database schema..."
npm.cmd --prefix backend run db:push

Write-Host "Seeding demo data..."
npm.cmd --prefix backend run db:seed

Write-Host "Starting backend and frontend..."
npm.cmd run dev
