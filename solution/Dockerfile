FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --silent

COPY src ./src
COPY tests ./tests

CMD ["npm", "test"]