## This is an experimental react project based off the clean architecture design pattern article written by **Alex Bespoyasov**, [https://dev.to/bespoyasov/clean-architecture-on-frontend-4311](Link).

Project by me. :) 
(Olumide Samuel Oluwole)

Authentication Credentials
* username: rashtell
* password: rashtell

### Base Setup
The project base structure is set up without create react app. So I had to configure webpack, babel, plugins, compatibility with typescript and a host of other stuff that took a while. 

### Routing
React Router 6 was used for the routing. I particularly like the config style to routing. It provides some sort of structure to the routing process. Incases where I have to manage sidebar style of navigation as in this project, it also comes in handy.


### Styling
Sass css was used for some global styling and navigation setup.
Also, I decided to use Chakra UI (as opposed to the usually favored MUI framework) as my component library. They have a good suite of components that's easily manageable.

### Network request
Axios was used to handle network request. I love the request interceptor feature provided. I particularly use it to slot in token into every request from a file.

### Redux 
I decided to use Redux toolkit for data store management (as opposed to the usual Redux thunk). My first time experimenting with the whole slice approach actually. Seeting up slices and type checking that in TS is quite a bit tedious to be honest. But it works. :smile

### Folder Structure (Clean Architecture)
Clean architectural pattern is mostly popular when developing backend applications. And even there, it can be a bit daunting to wrap one head around it. So when I saw the article written by Alex on Dev.to, I was shocked anyone had the guts to try it on the frontend.. at first I was even scared to read it, then after one or two nights that I couldn't shake it off, I became curious and decided to see what it's all about. 

Turned out, it isn't all that a bad idea. Given react is a flexible library instead of a rigid framework that dictates how something should be done, it makes it a good choice to experiment with stuff like this. So I decided to set this up. PS: You should read the article. There's a lot of information in there. (link above).

- Application: Contains every global resource needed to get our web app working. In this project, here, we setup the DataTable, the app Layout, the Router
- Asset / Assets: images and styles (sass)
- Domain: The typescript info folder. Everything that concerns the TS.
- Infrastructure: The core of our application. In here, the network request and redux store is implemented
- Presentation: Everything User Sees.