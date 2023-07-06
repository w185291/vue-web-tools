<script>

export default {
    data() {
        return {
            userIpInfo: {}
        }
    },
    async created() {
        let ipInfo = await this.MyIp.queryFromCloudFlare();
        this.userIpInfo = ipInfo;
    }
}
</script>

<template>
    <main class="flex-grow-1">
        <div class="container">
            <h1>IP位址</h1>
            <h2>{{ userIpInfo.ip }}<sub>{{userIpInfo.loc}}</sub></h2>
           
            <p>User Agent : {{ userIpInfo.uag }}</p>
        </div>
    </main>
</template>

