# Build stage
FROM node:20-alpine AS build
ARG HOSTNAME 0.0.0.0
ARG PORT 8085
ARG NODE_ENV development
ENV HOSTNAME=$HOSTNAME
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

RUN apk update && apk add --no-cache tini
WORKDIR /app
COPY package*.json ./
RUN corepack enable && corepack prepare pnpm@latest-8 --activate
COPY . .
# Install dependencies for production
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod

RUN addgroup --system --gid 1001 nonroot && adduser --system --uid 1001 nonroot

USER nonroot:nonroot

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "./server.js"]

