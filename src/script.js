import './style.css'
import cameras, { move } from './cameras';
import { canvas } from './canvas';
import { initRender, render } from './renders';
import { configMove } from './config';

Object.keys(canvas).forEach(canva => {
    initRender(canvas[canva], cameras[canva])
});

window.addEventListener('click', (e) => {
    e.preventDefault();
    const { name, id } = e.target;
    switch(id) {
        case `${name}__btn-up`:
            move(cameras[name], configMove[name].up)
            render(name);
            break;
        case `${name}__btn-down`:
            move(cameras[name], configMove[name].down)
            render(name);
            break;
        case `${name}__btn-right`:
            move(cameras[name], configMove[name].right)
            render(name);
            break;
        case `${name}__btn-left`:
            move(cameras[name], configMove[name].left)
            render(name);
            break;
        default:
        break;
    }
});
