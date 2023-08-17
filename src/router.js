import {createRouter, createWebHashHistory} from 'vue-router';
import leaderBoard from './components/leaderBoard.vue';
import TheGame from "./components/TheGame.vue"
import TheMain from "./components/TheMain.vue"
export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/leaderBoard', component: leaderBoard },
        {path: '/game', component: TheGame },
        {path: '/', component: TheMain },
    ]
})