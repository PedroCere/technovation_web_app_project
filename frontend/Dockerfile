# Use Node.js image for building the frontend
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install react-native-get-random-values polyfill with legacy peer deps to avoid dependency conflicts
RUN npm install react-native-get-random-values --legacy-peer-deps

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Run patch to polyfill crypto.getRandomValues
RUN node patch-crypto.js

# Build the application
RUN npm run build

# Use a lightweight web server to serve the application
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
