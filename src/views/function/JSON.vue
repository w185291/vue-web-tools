<script>
export default {
    data() {
        return {
            beforeConvertContent: "",
            afterConvertContent: "",
            convertType: "Beautify"
        }
    },
    methods: {
        convert() {
            if (this.beforeConvertContent === "" || this.beforeConvertContent === null) {
                alert('請輸入需轉換內容!!');
                return;
            }

            if(!this.isJson(this.beforeConvertContent)){
                alert('請使用JSON 格式!!');
                return;
            }

            this.getConvertType();
            if (this.convertType == "Beautify") {
                var parseJSON = JSON.parse(this.beforeConvertContent);
                this.afterConvertContent = JSON.stringify(parseJSON, undefined, 4);
            } else {
                var parseJSON = JSON.parse(this.beforeConvertContent);
                this.afterConvertContent = JSON.stringify(parseJSON);
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
            <h1>線上JSON，整理、縮小</h1>

            <p>只需輸入您需內容，然後按下整理按鈕即可。</p>

            <form class="row g-3" action="/action_page.php">
                <div class="col-12 mb-3 mt-3">

                    <label for="before-content">需轉換內容：</label>
                    <textarea v-model="beforeConvertContent" id="before-content" class="form-control" rows="15" name="text"
                        placeholder="文本內容"></textarea>
                </div>

                <div class="col-md-4">
                    <label for="convert-type" class="form-label">整理方式</label>
                    <select id="convert-type" class="form-select">
                        <option value="Beautify">Beautify(整理)</option>
                        <option value="Minify">Minify(縮小)</option>
                    </select>
                </div>


                <div class="col-12">
                    <button type="button" class="btn btn-primary" @click="convert()">整理</button>
                </div>


                <div class="col-12 mb-3 mt-3">
                    <label for="after-content">轉換完成內容:</label>
                    <textarea v-model="afterConvertContent" id="after-content" class="form-control" rows="15" name="text"
                        placeholder="文本內容"></textarea>
                </div>

            </form>
        </div>
    </main>
</template>