# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json* ./
RUN npm ci

# Copiar codigo fuente
COPY . .

# Build de la aplicacion (browser + server SSR)
RUN npm run build:ssr

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar solo lo necesario para ejecutar
COPY --from=builder /app/dist/leonela-cabello ./dist/leonela-cabello
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Asegurar que exista dist/leonela-cabello/browser por compatibilidad con Dokploy
RUN mkdir -p dist/leonela-cabello/browser && touch dist/leonela-cabello/browser/.env

# Instalar solo dependencias de produccion
RUN npm ci --omit=dev

# Puerto por defecto (se puede sobreescribir con -e PORT=4000)
ENV PORT=4000
EXPOSE 4000

# Comando para iniciar el servidor
CMD ["node", "dist/leonela-cabello/server/server.mjs"]
