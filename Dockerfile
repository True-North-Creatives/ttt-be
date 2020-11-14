FROM node:alpine

RUN mkdir -p /usr/src/ttt-be && \
    chown -R node:node /usr/src/ttt-be

WORKDIR /usr/src/ttt-be

COPY package.json yarn.lock ./

USER node

RUN yarn install --pure-lockfile

RUN yarn install build

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "start"]