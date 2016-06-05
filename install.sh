# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash

# install node 4.4
. ~/.nvm/nvm.sh
nvm install 4.4

# install node packages
npm install
