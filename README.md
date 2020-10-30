# hidden-stone

1. Clone the repo
2. Run
    ```
    sudo apt-get update
    sudo apt-get install build-essential libssl-dev curl 
    ```
<!-- 3. Change postgres password
    ```
    sudo -i -u postgres
    psql
    ALTER USER "postgres" with PASSWORD '//ENTER YOUR PASSWORD HERE//';
    ``` -->

<!-- 3. Copy scripts/sample.setup.sh to scripts/setup.sh and change the password. -->
<!-- 4. Run `cd scripts && bash setup.sh` -->
3. Install nvm - Node Version Manager
    * `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
    * `export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
    * run `command -v nvm` to check to installation
    * if not then, create a file with `touch ~/.bash_profile` and run the install script again
    * For more refer <https://github.com/nvm-sh/nvm#installation-and-update>
    * after installing nvm run `nvm install node && nvm use node`

<!-- 6. Follow <https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge> for changing 'peer' to 'md5' for postgresql. This step is necessary for phppgadmin -->

4. Run  `npm install`
5. Run `npm start -s` for development build

### visit <https://localhost:3000/>
