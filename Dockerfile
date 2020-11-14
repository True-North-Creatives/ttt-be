FROM node:alpine

RUN mkdir -p /usr/ttt-be
    #chown -R node:node /usr/ttt-be

WORKDIR /usr/ttt-be

#USER node

COPY package.json package-lock.json ./

RUN npm install

COPY . ./
#COPY --chown=node:node . .
RUN npm run build

EXPOSE 443

CMD ["npm", "run", "start"]
