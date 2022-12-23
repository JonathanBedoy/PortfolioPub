FROM node:lts-alpine AS build
WORKDIR /src
COPY ./portfolio/package*.json .
RUN npm install
COPY ./portfolio .
RUN npm run build
CMD ["npm", "run", "build"]

FROM node:lts-alpine
WORKDIR /usr/app
COPY ./BackEnd/package*.json .
RUN npm install
COPY ./BackEnd .
RUN rm -rf public
RUN mkdir public
COPY --from=build /src/build/ ./public
EXPOSE 4000
CMD ["node", "app.js"]