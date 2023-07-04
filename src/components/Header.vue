<script>
import { useRouter } from 'vue-router';
import  language  from '../i18n/zh-tw'

export default {
    data() {
        return {
            menuLanguage : language,
            allRoute:useRouter(),
            menuList:[]
        }
    },
    created(){
        let temp = [];
        let menuLanguage = this.menuLanguage;
        this.menuList = this.allRoute.options.routes;

        this.allRoute.options.routes.forEach(function(items){
            if(menuLanguage[items.name]!==undefined && items.name!='home'){
                items.name = menuLanguage[items.name];
                temp.push(items);
            }
        });
        this.menuList = temp;
    }
}
</script>
<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Web Tool 整理工具</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09"
                    aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample09">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <template v-for="(routeItem, index) in menuList">
                                <li class="nav-item" >
                                    <router-link :to="routeItem.path">
                                        {{ routeItem.name }}
                                    </router-link>
                                </li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>

</style>