import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
       history: createWebHistory(),
       routes:[  
              {path:'/', redirect:'/users'},//this line is how to redirect to anypage you want and the URL is shown
                //   {
                //     path:'/users',
                //      component:UsersList, alias:'/'}, // alias it takes you to the components but the URL isnt display
                 {  name:'teams',
                    path:'/teams', component:TeamsList,
                  children:[
                     { name:'team-members', path:':teamId', component:TeamMembers, props:true} ,
                 ]},
                 {path:'/users', component:UsersList},
              //    {path:'/teams/:teamId', component:TeamMembers, props:true} ,
              //    {path:'/:notFound(.*)', redirect:'/teams'} 
              {path:'/:notFound(.*)', component:NotFound},
             
              ],
              linkactiveClass:'active',
              scrollBehavior(to,from, savedPosition){
                 console.log(to,from, savedPosition)
                 return{left:0, top:0}
              }
})
const app = createApp(App)
app.use(router)
app.mount('#app');
