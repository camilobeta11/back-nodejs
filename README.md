# Backend API

Este proyecto es un backend desarrollado con **Node.js**, **TypeScript**, y **MongoDB**, diseñado para cumplir con los requisitos de la prueba técnica. Implementa registro, login, verificación de salud del servidor y autenticación mediante JWT. También incluye documentación automática con Swagger y está preparado para ejecutarse en Docker.

## Características

- **Registro y login** de usuarios con validación de datos.
- **Protección de rutas** mediante autenticación con JWT.
- **Documentación automática** generada con Swagger.
- **Docker Compose** para despliegue simplificado.
- **MongoDB** como base de datos.

---

## Requisitos previos

1. Tener instalado:
   - [Docker](https://www.docker.com/)
   - [Node.js](https://nodejs.org/) (si no se usa Docker directamente)
2. Clonar este repositorio:
   ```bash
   git clone https://github.com/camilobeta11/back-nodejs.git
3. Correr el proyecto:
   ```bash
   npx ts-node src/index.ts
**Se verá asi:
   ```bash
   Swagger -> http://localhost:3000/api-docs
   MongoDB connected successfully
   Server running on http://localhost:3000
