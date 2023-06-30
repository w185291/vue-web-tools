<template>
    <main class="flex-grow-1">
        <div class="container">
            <h1>線上不可逆加密，MD5、HMAC、SHA1、SHA-224、SHA-256、SHA-384、SHA-512</h1>

            <p>只需輸入您需加密內容，然後按下加密按紐即可。</p>

            <form class="row g-3" action="/action_page.php">
                <div class="col-12 mb-3 mt-3">

                    <label for="comment">需加密內容：</label>
                    <textarea class="form-control" rows="5" id="comment" name="text" placeholder="文本內容"></textarea>
                </div>

                <div class="col-md-4">
                    <label for="inputState" class="form-label">選擇方式</label>
                    <select id="inputState" class="form-select">
                        <option>MD5</option>
                        <option>HMAC</option>
                        <option>SHA1</option>
                        <option>SHA-224</option>
                        <option>SHA-256</option>
                        <option>SHA-384</option>
                        <option>SHA-512</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">加密</button>
                </div>

                <div class="col-12 mb-3 mt-3">
                    <label for="comment">加密完成內容:</label>
                    <textarea class="form-control" rows="5" id="comment" name="text" placeholder="文本內容"></textarea>
                </div>

            </form>
        </div>
    </main>
</template>