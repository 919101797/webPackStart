/*
 * @Author: cc
 * @Date: 2022-03-29 19:51:35
 * @LastEditors: cc
 * @LastEditTime: 2022-03-29 19:54:53
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \webpack\src\views\app.js
 */
function runapp (){
    console.log('初始化app');
    creactComponent('span')
}
const creactComponent = (eletype = 'div', clessname)=>{
    const ele = document.createElement(eletype);
    const diyIcon = new Image();
    diyIcon.src = Icon;
    ele.innerHTML = ['app-.-'].concat(clessname).join('');
    ele.classList = clessname;
    clessname === 'less' && ele.appendChild(diyIcon);
    clessname === 'styl' && (ele.style.background = `url(${svg})`);
    return ele
}
export default runapp;