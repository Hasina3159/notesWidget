let nw = document.getElementById("new");
let drags = document.getElementsByClassName("note");
let newNodes = drags[0].cloneNode(true);
let del = document.getElementById("del");
let n = [];
let t = 0;
let l = 0;
let last;
let lst = 8;

newNodes.style.top = "40px";
newNodes.style.left = "0px";
window.addEventListener("click", () => {
    for(let i = 0; i<drags.length; i++){
        let drag = drags[i];
        let id = "i" + i;
        drag.id = id;
        drag = document.getElementById(id) 
        let head = drags[i].childNodes[0];
        let plus = drags[i].childNodes[0].childNodes[3];
        let close = drags[i].childNodes[0].childNodes[5];
        let save = drags[i].childNodes[4].childNodes[1];
        let text = drags[i].childNodes[2].childNodes[1];
        n.push(false);
        if(!drag.style.top && !drag.style.left){
            drag.style.top = "100px";
            drag.style.left = "500px";
        }

        head.addEventListener("mousedown", (e)=>{
            n[i] = true;
            t = e.clientY - parseInt(drag.style.top.slice(0, drag.style.top.length-2));
            l = e.clientX - parseInt(drag.style.left.slice(0, drag.style.left.length-2));
            last = e.target.parentNode;
            lst++;
            last.style.zIndex = lst;
        })

        window.addEventListener("mouseup", ()=>{
            n[i] = false;
        })

        drag.addEventListener("click", (e) => {
            lst++;
            e.target.style.zIndex = lst;
        })

        window.addEventListener("mousemove", (e)=>{
            if(n[i]){
                drag.style.top = (e.clientY-t) +"px";
                drag.style.left = (e.clientX-l) +"px";
                last.style.zIndex = lst;

            }
            
        })

        close.addEventListener("mousedown", () => {
            drag.remove()
            n.pop()
        })

        del.addEventListener("click", () => {
            drag.remove()
        })
    }
})

nw.addEventListener("click", () => {
    let nn = newNodes.cloneNode(true);
    document.body.appendChild(nn);
})

