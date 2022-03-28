/*
 * @Author: cc
 * @Date: 2022-03-24 19:16:00
 * @LastEditors: cc
 * @LastEditTime: 2022-03-28 16:23:14
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \webpack\index.js
 */
import  './index.css'
import  './index.scss'
import  './index.less'
import  './index.styl'

import Icon from './src/asset/images/develop.png'



const Info = ['hello', 'webpack',]
const creactComponent = (eletype = 'div', clessname)=>{
    const ele = document.createElement(eletype);
    const diyIcon = new Image();
    diyIcon.src = Icon;
    ele.innerHTML = Info.concat(clessname).join('');
    ele.classList = clessname;
    clessname === 'less' && ele.appendChild(diyIcon);
    return ele
}



document.body.appendChild(creactComponent('div','css'));
document.body.appendChild(creactComponent('div','sass'));
document.body.appendChild(creactComponent('div','less'));
document.body.appendChild(creactComponent('div','styl'));