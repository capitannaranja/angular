FROM node

# Create app directory
RUN mkdir -p /usr/src/app && mkdir /usr/src/app/logs
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install -g @angular/cli && npm install
   
# Bundle app source
COPY . /usr/src/app

EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]