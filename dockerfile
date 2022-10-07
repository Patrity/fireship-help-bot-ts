# FROM node:lts as build
# COPY . /app
# WORKDIR /app
# RUN npm install
# RUN dir -s

FROM node:alpine

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


CMD [ "npm", "run", "start" ]