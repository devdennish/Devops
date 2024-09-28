# Set the base image

FROM node:20-alpine

# Set the working directory

WORKDIR /app

# Copy the JSON files

COPY package*.json .

# Install dependencies

RUN npm install

# Copy the rest of the files 

COPY . .

# Expose the port

EXPOSE 1000

# Run the web app

CMD npm start
