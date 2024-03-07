import TaskPages from "../pages/TasksPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import SumaryPage from "../pages/SumaryPage.vue";
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue";

const routes = [
    {
        path: "/tasks",
        component: TaskPages,
        name: 'tasks'
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
        name: 'sumary'
    },
    {
        path: "/:notFound(.*)",  
        component: NotFoundErrorPage,      
        name: 'error.404'
    }

]

export default routes