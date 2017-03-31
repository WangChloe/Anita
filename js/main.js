;(function() {
    var doc = document.documentElement;

    function resize() {
        doc.style.fontSize = doc.clientWidth / 1436 * 100 + 'px';
    }

    doc.style.fontSize = doc.clientWidth / 1436 * 100 + 'px';
    window.addEventListener('resize', resize, false);

    resize();
})();

// $( function(){
//     // 在这里编写我们希望在DOM准备就绪后执行的代码
// } );