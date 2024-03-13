import TaskPages from "../pages/TasksPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import summaryPage from "../pages/SummaryPage.vue";
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
        name: 'login',
        meta: {
            guest: true
        }
    },
    {
        path: "/register",
        component: RegisterPage,
        name: 'register',
        meta: {
            guest: true
        }
    },
    {
        path: "/summary",
        component: summaryPage,
        name: 'summary',
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