FROM node:alpine

# Set the working directory inside the container

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci --omit=dev

# Copy the remaining files
COPY ./app ./app
COPY ./blogposts ./blogposts
COPY ./components ./components
COPY ./public ./public
COPY ./style ./style
COPY ./utils ./utils
COPY db.js .


COPY jsconfig.json .
COPY next.config.js .
COPY postcss.config.js .
COPY tailwind.config.js .

# Expose the desired port(s)
EXPOSE 3000

# Build the application
RUN npm run build


# Start the application
CMD ["npm", "run", "start"]



# docker build -t lichess_swiss_website .
# docker run -p 3000:3000 -e MONGODB_URL=MONGODB_URL lichess_swiss_website

