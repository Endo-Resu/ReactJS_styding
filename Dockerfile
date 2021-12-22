FROM node
COPY . /app
WORKDIR /app
CMD node /app/index.js
