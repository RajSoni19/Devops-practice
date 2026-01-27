# 1️⃣ Base image
FROM node:20-alpine 

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy dependency files
COPY package*.json ./ 

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy source code
COPY . .

# 6️⃣ Expose backend port
EXPOSE 5000

# 7️⃣ Start backend server
CMD ["node","server.js"]
