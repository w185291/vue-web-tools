
<script>

export default {
    data() {
        return {
            beforeConvertContent: "",
            afterConvertContent: "",
            secret: "",
            convertType: "aes-encrypt",
            encorypt: this.quickEncrypt,
            pk: "",
            sk: "",
            showPk: false
        }
    },
    methods: {
        convert() {
            if (this.beforeConvertContent === "" || this.beforeConvertContent === null) {
                alert('請輸入需轉換內容!!');
                return;
            }

            if (this.convertType.includes('rsa')) {
                if (this.pk === "" || this.pk === null) {
                    alert('請輸入加密使用公鑰');
                    return;
                }

                if (this.sk === "" || this.sk === null) {
                    alert('請輸入加密使用私鑰');
                    return;
                }
            } else {
                if (this.secret === "" || this.secret === null) {
                    alert('請輸入加密使用金鑰');
                    return;
                }
            }
            this.getConvertType();
            let option = {
                'secret': this.secret,
                'pk': this.pk,
                'sk': this.sk
            };

            this.afterConvertContent = this.encorypt(this.convertType, this.beforeConvertContent, option);
        },
        getConvertType() {
            let selectElement = document.querySelector('#convert-type');
            this.convertType = selectElement.value;
        },
        selectChange() {
            this.getConvertType();
            console.log(this.convertType);
            if (this.convertType.includes('rsa')) {
                this.showPk = true;
            } else {
                this.showPk = false;
            }
        },
        isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
    }
}
</script>
<template>
    <main class="flex-grow-1">
        <div class="container">
            <h1>線上可逆加密，AES、DESC、3DES、RSA</h1>

            <p>只需輸入您需加密內容，然後按下加密按紐即可。</p>

            <form class="row g-3" action="/action_page.php">
                <div class="col-12 mb-3 mt-3">

                    <label for="before-content">需加解密內容：</label>
                    <textarea class="form-control" rows="5" v-model="beforeConvertContent" id="before-content" name="text"
                        placeholder="文本內容"></textarea>
                </div>

                <div class="col-12 mb-3 mt-3" v-if="!showPk">
                    <label for="secret">加解密金鑰：</label>
                    <textarea class="form-control" rows="5" v-model="secret" id="secret" name="text"
                        placeholder="金鑰"></textarea>
                </div>

                <div class="col-12 mb-3 mt-3" v-if="showPk">
                    <label for="pk">加密公鑰：</label>
                    <textarea class="form-control" rows="5" v-model="pk" id="pk" name="text" placeholder="公鑰"></textarea>
                </div>

                <div class="col-12 mb-3 mt-3" v-if="showPk">
                    <label for="sk">解密私鑰：</label>
                    <textarea class="form-control" rows="5" v-model="sk" id="sk" name="text" placeholder="私鑰"></textarea>
                </div>

                <div class="col-md-4">
                    <label for="convert-type" class="form-label">選擇方式</label>
                    <select id="convert-type" class="form-select" v-on:change="selectChange()">
                        <option value="aes-encrypt">AES加密</option>
                        <option value="aes-decrypt">AES解密</option>
                        <option value="des-encrypt">DESC加密</option>
                        <option value="des-decrypt">DESC解密</option>
                        <option value="3des-encrypt">3DES加密</option>
                        <option value="3des-decrypt">3DES解密</option>
                        <option value="rsa-encrypt">RSA加密</option>
                        <option value="rsa-decrypt">RSA解密</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-primary" @click="convert()">加解密</button>
                </div>

                <div class="col-12 mb-3 mt-3">
                    <label for="after-content">加解密完成內容:</label>
                    <textarea class="form-control" rows="5" v-model="afterConvertContent" id="after-content" name="text"
                        placeholder="文本內容"></textarea>
                </div>

            </form>
        </div>
</main></template>