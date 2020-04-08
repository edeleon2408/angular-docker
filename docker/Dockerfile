# Start with a base image containing Java runtime
FROM nginx:1.15

# Add Maintainer Info
LABEL maintainer="edeleon"

# Make port 80 available to the world outside this container
EXPOSE 80

COPY  /dist/PortalWeb/ /usr/share/nginx/html/
COPY /docker/nginx.conf /etc/nginx/nginx.conf