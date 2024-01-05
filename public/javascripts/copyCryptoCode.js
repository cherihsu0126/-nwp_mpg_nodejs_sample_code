// 複製程式碼
function copyCodeBtn(){
    const content = document.getElementById('cryptoCode')
    if (content) {
        const range = document.createRange();
        window.getSelection().removeAllRanges();
        range.selectNode(content);
        window.getSelection().addRange(range);
        try {
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            console.log('内容已複製');
        } catch (err) {
            console.error('無法複製内容', err);
        }
    }
}