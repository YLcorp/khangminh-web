FROM node:16-bullseye-slim as dependencies
WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn

FROM node:16-bullseye-slim as builder

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
EXPOSE 3000
RUN yarn build
CMD ["yarn", "start"]
