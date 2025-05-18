# Use Node.js 24 as base image
FROM node:24-slim

# Create app directory
WORKDIR /app

# Set NODE_ENV to production for better performance
ENV NODE_ENV=production

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Command to run the compiled application
CMD ["node", "src/index.js"]