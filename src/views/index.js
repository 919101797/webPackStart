/*
 * @Author: cc
 * @Date: 2022-03-24 19:33:37
 * @LastEditors: cc
 * @LastEditTime: 2022-03-29 19:54:30
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \webpack\src\views\index.js
 */
function init (){
    console.log('初始化index');
    document.body.appendChild(creactComponent('div','css'));

}

const creactComponent = (eletype = 'div', clessname)=>{
    const ele = document.createElement(eletype);
    const diyIcon = new Image();
    diyIcon.src = Icon;
    ele.innerHTML = ['index-.-'].concat(clessname).join('');
    ele.classList = clessname;
    clessname === 'less' && ele.appendChild(diyIcon);
    clessname === 'styl' && (ele.style.background = `url(${svg})`);
    return ele
}




export default init;