FROM node:24-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:24-alpine AS runtime
ENV NODE_ENV=production
ENV PORT=4000
WORKDIR /app

COPY --from=build /app/dist/leonela-cabello ./dist/leonela-cabello
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

EXPOSE 4000
CMD ["node", "dist/leonela-cabello/server/server.mjs"]
