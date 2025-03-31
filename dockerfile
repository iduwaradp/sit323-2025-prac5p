# Step 1: Use an official Node.js image from the Docker Hub as the base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose the application port (the port your app runs on)
EXPOSE 3000

# Step 7: Start the app
CMD ["node", "server.js"]
