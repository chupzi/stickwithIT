# base image
# FROM node:12.2.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install --silent
# RUN npm install react-scripts@3.0.1 -g --silent

# # start app
# CMD ["npm", "start"]

FROM node:10 as react-build
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the dev environment
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]