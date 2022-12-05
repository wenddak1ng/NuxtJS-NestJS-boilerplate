# NuxtJS-NestJS-template
Monorepo with NuxtJS on client-side and NestJS on server-side

# How to use
Just clone this repo with:
`git clone https://github.com/wenddak1ng/NuxtJS-NestJS-template <new folder name>`

And then run inside:
`npm install`

# Structure

 - ./src
	 - server - **Contains NestJS instance** with default structure w/o **tests**
	 - client - **Contains NuxtJS instance** with default structure w/o **layouts**

# Helps

 - On server-side in **app.module.ts** your NuxtController must be always at the end for handling client-side routes from NuxtJS instance
