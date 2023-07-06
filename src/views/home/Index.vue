<script>
import { useRouter } from 'vue-router';
import language from '../../i18n/zh-tw'

export default {
    data() {
        return {
            menuList: useRouter().options.routes
        }
    }
}
</script>

<template>
    <main class="flex-grow-1">
        <div class="container">

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">功能</th>
                        <th scope="col">URL</th>

                    </tr>
                </thead>
                <tbody>
                    <template v-for="(routeItem, index) in menuList">
                        <tr>
                            <th scope="row">{{ index }}</th>
                            <td>{{ routeItem.name }}</td>
                            <td>
                                <router-link :to="routeItem.path">
                                    {{ routeItem.path }}
                                </router-link>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </main>
</template>

