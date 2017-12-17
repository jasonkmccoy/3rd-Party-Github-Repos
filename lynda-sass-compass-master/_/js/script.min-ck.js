var pixGrid = function() {
    function e(e) {
        var t = (window.innerWidth - e.width) / 2, n = (window.innerHeight - e.height) / 2;
        return e.style.top = n + "px", e.style.left = t + "px", e;
    }
    var t = document.querySelector(".pixgrid");
    t.addEventListener("click", function(t) {
        if ("IMG" === t.target.tagName) {
            var n = document.createElement("div");
            n.id = "overlay", document.body.appendChild(n), n.style.position = "absolute", n.style.top = 0, n.style.backgroundColor = "rgba(0,0,0,0.7)", n.style.cursor = "pointer", n.style.width = window.innerWidth + "px", n.style.height = window.innerHeight + "px", n.style.top = window.pageYOffset + "px", n.style.left = window.pageXOffset + "px";
            var r = t.target.src, i = document.createElement("img");
            i.id = "largeImage", i.src = r.substr(0, r.length - 7) + ".jpg", i.style.display = "block", i.style.position = "absolute", i.addEventListener("load", function() {
                this.height > window.innerHeight && (this.ratio = window.innerHeight / this.height, this.height = this.height * this.ratio, this.width = this.width * this.ratio), this.width > window.innerWidth && (this.ratio = window.innerWidth / this.width, this.height = this.height * this.ratio, this.width = this.width * this.ratio), e(this), n.appendChild(i);
            }), i.addEventListener("click", function() {
                n && (window.removeEventListener("resize", window, !1), window.removeEventListener("scroll", window, !1), n.parentNode.removeChild(n));
            }, !1), window.addEventListener("scroll", function() {
                n && (n.style.top = window.pageYOffset + "px", n.style.left = window.pageXOffset + "px");
            }, !1), window.addEventListener("resize", function() {
                n && (n.style.width = window.innerWidth + "px", n.style.height = window.innerHeight + "px", n.style.top = window.pageYOffset + "px", n.style.left = window.pageXOffset + "px", e(i));
            }, !1);
        }
    }, !1);
}();