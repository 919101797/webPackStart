/*
 * @Author: cc
 * @Date: 2022-03-29 19:51:35
 * @LastEditors: cc
 * @LastEditTime: 2022-03-30 17:47:59
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \webpack\src\views\app.js
 */
import  '../../index.css'
import  '../../index.scss'
import  '../../index.less'
import  '../../index.styl'

import Icon from '../asset/images/develop.png'
import svg from '../asset/icon/aaa.svg'


function runapp (){
    console.log('初始化appaaaaa');
    document.body.appendChild(creactComponent('div','styl'));
    console.log('I get called from app.js!');

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
runapp ();