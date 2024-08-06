# Usa una imagen base oficial de Node.js con la versión LTS
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Establece la variable de entorno para producción
ENV NODE_ENV=production

# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto que la aplicación Next.js usará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
