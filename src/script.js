import './style.css'
import cameras, { move } from './cameras';
import { canvas } from './canvas';
import { render } from './utils';
import { configMove } from './config';
import cube from './objects';

render(canvas.top, cameras.top);
render(canvas.front, cameras.front);
render(canvas.perspective, cameras.perspective);

window.addEventListener('click', (e) => {
    e.preventDefault();
    const { name, id } = e.target;
    switch(id) {
        case `${name}__btn-up`:
            move(cameras[name], configMove[name].up)
            render(canvas[name], cameras[name]);
            break;
        case `${name}__btn-down`:
            move(cameras[name], configMove[name].down)
            render(canvas[name], cameras[name]);
            break;
        case `${name}__btn-right`:
            move(cameras[name], configMove[name].right)
            render(canvas[name], cameras[name]);
            break;
        case `${name}__btn-left`:
            move(cameras[name], configMove[name].left)
            render(canvas[name], cameras[name]);
            break;
        default:
        console.log('Nothing happened');
        break;
    }
});
