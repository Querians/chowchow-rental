FROM node:18.15.0 AS base

# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .

# RUN yarn workspace backend install
RUN turbo prune --scope=backend --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:18.15.0 AS installer
WORKDIR /app

# Install the dependencies
COPY .gitignore .gitignore
COPY --from=base /app/out/json/ .
COPY --from=base /app/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the backend and its dependencies
COPY --from=base /app/out/full/ .
COPY --from=base turbo.json turbo.json
RUN yarn turbo run build --filter=backend...

FROM node:18.15.0 AS runner
WORKDIR /app

COPY --from=installer /app .

WORKDIR /app/apps/backend
RUN yarn prisma generate

EXPOSE 8080
CMD ["yarn", "start"]