FROM node:8

WORKDIR /app
COPY package*.json ./
ENV HOST 0.0.0.0
ENV PORT 80
RUN npm install
COPY . .
CMD [ "npm", "start" ]



