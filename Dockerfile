FROM node:alpine

RUN mkdir -p /usr/src/<template> && chown -R node:node /usr/src/<template>

WORKDIR /usr/src/<template>

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000
