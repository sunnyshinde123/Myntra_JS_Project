#Base Image
FROM node:18

# Work Dir
WORKDIR /app

# Install libraries and dependencies
RUN npm install -g http-server

# Copy the code
COPY  . .

# EXpose the Port
EXPOSE 8080

# Start the server
CMD ["http-server", "-p", "8080"]
