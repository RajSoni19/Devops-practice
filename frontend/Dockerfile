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

# Creates production-ready static files
RUN npm run build 

EXPOSE 4173

CMD ["npm","run","preview"]