FROM node:alpine

# Set the working directory
WORKDIR /backend

# Copy package files for dependency installation
COPY package*.json ./

RUN npm install

COPY . .


RUN mkdir -p ./public

# Run the build process to generate the `dist` folder
RUN npm run build

# Expose the application port
EXPOSE 3001

# Start the application
CMD [ "npm", "start" ]
