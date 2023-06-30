<template>
    <main class="flex-grow-1">
        <div class="container">
            <h1>線上轉換 URL Encode and Decode - Online</h1>

            <p>只需輸入您需轉換內容，然後按下轉換按鈕即可。</p>

            <form class="row g-3" action="/action_page.php">
                <div class="col-12 mb-3 mt-3">

                    <label for="comment">需轉換內容：</label>
                    <textarea class="form-control" rows="5" id="comment" name="text" placeholder="文本內容"></textarea>
                </div>



                <div class="col-md-4">
                    <label for="inputState" class="form-label">轉換方式</label>
                    <select id="inputState" class="form-select">
                        <option>ENCODE</option>
                        <option>DECODE</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">轉換</button>
                </div>



                <div class="col-12 mb-3 mt-3">
                    <label for="comment">轉換完成內容:</label>
                    <textarea class="form-control" rows="5" id="comment" name="text" placeholder="文本內容"></textarea>
                </div>


            </form>
        </div>
    </main>
</template>

