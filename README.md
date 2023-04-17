# Mail & Guardian Jobs

## Install Node.js via NVM

1. Install NVM by running the following command in your terminal:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

2. Once NVM is installed, close and reopen your terminal.

3. Use NVM to install the latest LTS (long-term support) version of Node.js by running the following command:

```sh
nvm install --lts
```

&nbsp;
## To run

1. Clone the repository to your computer.

2. Open terminal and cd to project folder.

3. Rename ".env.example" to ".env"

4. Install the dependencies required by the application by running the following command:

```sh
npm install
```

5. Start the development server by running the following command:

```sh
npm run dev
```

&nbsp;
## To build

1. Build the application by running the following command:

```sh
npm run build
```

2. You can now deploy the application by copying the contents of the "dist" directory to a web server or hosting service.
