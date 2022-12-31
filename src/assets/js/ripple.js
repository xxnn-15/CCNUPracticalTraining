function ripple(e) {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    let ripple = document.createElement("span")
    ripple.className = "js_ripple"
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    // e.target 返回触发此事件的元素（事件的目标节点）
    e.target.appendChild(ripple)

    setTimeout(()=> {
        ripple.remove();
    }, 1000)
}

export default ripple