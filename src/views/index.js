/*
 * @Author: cc
 * @Date: 2022-03-24 19:33:37
 * @LastEditors: cc
 * @LastEditTime: 2022-03-30 16:16:49
 * @important: 重要提醒
 * @Description: 备注内容
 * @FilePath: \webpack\src\views\index.js
 */

import  '../../index.css'
import  '../../index.scss'
import  '../../index.less'
import  '../../index.styl'

import Icon from '../asset/images/develop.png'
import svg from '../asset/icon/aaa.svg'

function init (){
    console.log('初始化index');
    document.body.appendChild(creactComponent('div','less'));
    cosnole.log('I get called from index.js!');

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

init();
