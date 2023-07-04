<script>
export default {
    data() {
        return {
            beforeConvertContent : "",
            afterConvertContent : "",
            convertType : "encode"
        }
    },
    methods:{
        convert(){
            if(this.beforeConvertContent==="" || this.beforeConvertContent===null){
                alert('請輸入需轉換內容!!');
                return;
            }
            this.getConvertType();
            if(this.convertType=="encode"){
                this.afterConvertContent = encodeURIComponent(this.beforeConvertContent);
            }else{
                this.afterConvertContent = decodeURIComponent(this.beforeConvertContent);
            }
        },
        getConvertType(){
            let selectElement = document.querySelector('#convert-type');
            this.convertType = selectElement.value;
        }
    }
}
</script>

<template>
    <main class="flex-grow-1">
        <div class="container">
            <h1>線上轉換 URL Encode and Decode - Online</h1>

            <p>只需輸入您需轉換內容，然後按下轉換按鈕即可。</p>

            <form class="row g-3" action="/action_page.php">
                <div class="col-12 mb-3 mt-3">

                    <label for="before-content">需轉換內容：</label>
                    <textarea v-model="beforeConvertContent" id="before-content" class="form-control" rows="5"  name="text" placeholder="文本內容"></textarea>
                </div>



                <div class="col-md-4">
                    <label for="convert-type" class="form-label">轉換方式</label>
                    <select id="convert-type" class="form-select">
                        <option value="encode" selected>ENCODE</option>
                        <option value="decode">DECODE</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-primary" @click="convert()">轉換</button>
                </div>



                <div class="col-12 mb-3 mt-3">
                    <label for="after-content">轉換完成內容:</label>
                    <textarea v-model="afterConvertContent" id="after-content" class="form-control" rows="5"  name="text" placeholder="文本內容"></textarea>
                </div>


            </form>
        </div>
    </main>
</template>

