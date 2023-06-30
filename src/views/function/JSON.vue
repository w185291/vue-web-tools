<template>
    <main class="flex-grow-1">
        <div class="container">
            <h1>線上JSON，整理、縮小</h1>

            <p>只需輸入您需內容，然後按下整理按鈕即可。</p>

            <form class="row g-3" action="/action_page.php">
                <div class="col-12 mb-3 mt-3">

                    <label for="comment">需轉換內容：</label>
                    <textarea class="form-control" rows="5" id="comment" name="text" placeholder="文本內容"></textarea>
                </div>

                <div class="col-md-4">
                    <label for="inputState" class="form-label">選擇方式</label>
                    <select id="inputState" class="form-select">
                        <option>Beautify(整理)</option>
                        <option>Minify(縮小)</option>
                    </select>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">整理</button>
                </div>


                <div class="col-12 mb-3 mt-3">
                    <label for="comment">整理完成內容:</label>
                    <textarea class="form-control" rows="5" id="comment" name="text" placeholder="文本內容"></textarea>
                </div>


            </form>
        </div>
    </main>
</template>