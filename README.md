<h2>Ejemplo de MEAN</h2>
Para instalar el entorno
<ul>
<li>instalar ruby</li>
<li>gem update --system</li>
<li>gem install compass</li>
<li>ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</li>
<li>brew install node</li>
<li>brew install mongodb</li>
<li>npm install -g grunt-cli</li>
<li>npm install -g bower</li>
<li>sudo mkdir -p /data/db</li>
<li>sudo chmod 0755 /data/db</li>
<li>sudo chown -R $USER /data/db</li>
<li>mongod</li>
</ul>


Presentacion: http://travistidwell.com/presentations/meanapp/#/4
<br>
Video: https://www.youtube.com/watch?v=OhPFgqHz68o
<br>

Dentro de la carpeta server:
<ul>
<li>npm init</li>
<li>editar el package.json con:</li>
<pre>
{
  "name": "MeanApp",
  "version": "1.0.0",
  "description": "A M.E.A.N application.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.10.1",
    "express": "^4.11.0",
    "lodash": "^2.4.1",
    "method-override": "^2.3.1",
    "mongoose": "^3.8.21",
    "node-restful": "^0.1.17"
  }
}
</pre>
</ul>

<br>
Otras cosas:
<ul>
<li>correr: npm install tanto en la carpeta server como en la client</li>
<li>si se queja el bower, correr: bower install</li>
<li>si yeoman no genera las rutas, correr: npm install -g generator-angular</li>
<li>Para correr el server: node index.js</li>
<li>Para correr el cliente: grunt serve</li>
<li>si el algun paquete de bower no modifica el index.hmtl para agregarse, usar: grunt wiredep (esto paso al instalar el restangular</li>
</ul>

<h2> Para correr el proyecto </h2>
<ul>
<li>lanzar el MongoDB: mongod</li>
<li>en server: node index.js</li>
<li>en client: grunt serve</li>
<li>para usar la interfaz REST desde el chrome, usar la extension Postman - REST client shortcut</li>
<li>para que se vea bonito el JSON en chrome, usar la extension JSONView</li>
</ul>
