FROM node:alpine

# Set the working directory
WORKDIR /backend

# Copy package files for dependency installation
COPY package*.json ./

RUN npm install

# Copy the application source code
COPY . .

# Run the build process to generate the `dist` folder
RUN npm run build

# Copy the `public` folder from the `dist` directory to the desired location
RUN mkdir -p ./public && cp -r dist/config/public ./public

# Expose the application port
EXPOSE 3001

# Start the application
CMD [ "npm", "start" ]
