import TaskPages from "../pages/TasksPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import SumaryPage from "../pages/SumaryPage.vue";
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
    {
        path: "/tasks",
        component: TaskPages,
        name: 'tasks',
        meta: {
           auth: true 
        }
    },
    {
        path: "/login",
        component: LoginPage,
        name: 'login'
    },
    {
        path: "/register",
        component: RegisterPage,
        name: 'register'
    },
    {
        path: "/sumary",
        component: SumaryPage,
        name: 'sumary',
        meta:{
            auth:true
        }
    },
    {
        path: "/:notFound(.*)",  
        component: NotFoundErrorPage,      
        name: 'error.404'
    },
    {
        path: "/",  
        component: HomePage,      
        name: 'home'
    }

]

export default routes