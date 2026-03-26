FROM node:22-alpine AS base

# Build stage
FROM base AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx vite build && node ace build

# Production stage
FROM base AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/build ./
COPY --from=build /app/public/assets ./public/assets
RUN npm ci --omit=dev
EXPOSE 3333
CMD ["node", "bin/server.js"]
