import {firstName, lastName, year} from './profile'
import {area, circumference} from './circle'

function setName(element) {
    element.textContent = `${firstName} ${lastName}`
}

console.log('圆面积: ' + area(4));
console.log('圆周长: ' + circumference(14));
