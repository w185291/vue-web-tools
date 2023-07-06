import axios from "axios";

class MyIp {

    async queryFromCloudFlare() {
       const result = await axios.get('https://www.cloudflare.com/cdn-cgi/trace');

       result.data = result.data.trim().split('\n').reduce(function(obj, pair) {
            pair = pair.split('=');
            return obj[pair[0]] = pair[1], obj;
        }, {});

       return result.data;
    }
}

const MyIpQuery = new MyIp();

export default MyIpQuery;