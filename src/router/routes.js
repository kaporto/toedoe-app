import TaskPages from "../pages/TasksPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import SumaryPage from "../pages/SumaryPage.vue";

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
    }

]

export default routes