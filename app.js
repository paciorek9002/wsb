import { MDCRipple } from '@material/ripple/index';
import { MDCTextField } from '@material/textfield';
import { MDCFormField } from '@material/form-field';
import { MDCCheckbox } from '@material/checkbox';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCDrawer } from "@material/drawer";
import { MDCList } from '@material/list';
import {MDCMenu} from '@material/menu';

console.log('app.js loaded');

const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = false;

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      menu.open = !menu.open //here you draw your own menu
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("You've tried to open context menu");
      window.event.returnValue = false;
    });
  }

if (document.querySelector('.mdc-drawer')) {
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    console.log('drawer created');
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    const list = new MDCList(document.querySelector('.mdc-list'));
    const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });
    console.log('app bar created');
}

if (document.querySelector('.mdc-checkbox')) {
    const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
    const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
    formField.input = checkbox;
}

if (document.querySelector('.mdc-text-field')) {
    [].slice.call(document.querySelectorAll('.mdc-text-field')).forEach(
        (ele) => {
            MDCTextField.attachTo(ele);
        }
    );
}

[].slice.call(document.querySelectorAll('.mdc-button, .mdc-card__primary-action')).forEach(
    (ele) => {
        MDCRipple.attachTo(ele);
    });

if (document.querySelector('#login-button')) {
    document.querySelector('#login-button').addEventListener('mouseup', () => {
        window.location.replace('login.html');
    });
}

if (document.querySelector('#signup-button')) {
    document.querySelector('#signup-button').addEventListener('mouseup', () => {
        window.location.replace('sign-up.html');
    })
}
