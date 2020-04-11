#Start node
FROM  node:12.16.1 as build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build  

# Start with a base image containing Java runtime
FROM nginx:1.15 as prod-stage

# Add Maintainer Info
LABEL maintainer="edeleon2408@gmail.com"

COPY --from=build-step  /app/dist/angular-docker/ /usr/share/nginx/html

# Make port 80 available to the world outside this container
EXPOSE 80

#COPY  /dist/angular-docker/ /usr/share/nginx/html/
#COPY /docker/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]