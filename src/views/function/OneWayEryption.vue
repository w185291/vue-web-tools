<script>


export default {
    data() {
        return {
            beforeConvertContent: "",
            afterConvertContent: "",
            convertType: "md5",
            encorypt : this.CryptoJS
        }
    },
    methods: {
        convert() {
            if (this.beforeConvertContent === "" || this.beforeConvertContent === null) {
                alert('請輸入需轉換內容!!');
                return;
            }

            this.getConvertType();
            if (this.convertType == "md5") {
                this.afterConvertContent = this.encorypt.MD5(this.beforeConvertContent);
            }
        },
        getConvertType() {
            let selectElement = document.querySelector('#convert-type');
            this.convertType = selectElement.value;
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
            <h1>線上不可逆加密，MD5、HMAC、SHA1、SHA-224、SHA-256、SHA-384、SHA-512</h1>

            <p>只需輸入您需加密內容，然後按下加密按紐即可。</p>

            <form class="row g-3" >
                <div class="col-12 mb-3 mt-3">

                    <label for="before-content">需加密內容：</label>
                    <textarea class="form-control" rows="5"  v-model="beforeConvertContent" id="before-content" name="text" placeholder="文本內容"></textarea>
                </div>

                <div class="col-md-4">
                    <label for="convert-type" class="form-label">選擇方式</label>
                    <select id="convert-type" class="form-select">
                        <option value="md5">MD5</option>
                        <option value="hmac">HMAC</option>
                        <option value="sha1">SHA1</option>
                        <option value="sha224">SHA-224</option>
                        <option value="sha256">SHA-256</option>
                        <option value="sha384">SHA-384</option>
                        <option value="sha512">SHA-512</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-primary" @click="convert()">加密</button>
                </div>

                <div class="col-12 mb-3 mt-3">
                    <label for="afterConvertContent">加密完成內容:</label>
                    <textarea class="form-control" rows="5" v-model="afterConvertContent" id="after-content" name="text" placeholder="文本內容"></textarea>
                </div>

            </form>
        </div>
    </main>
</template>