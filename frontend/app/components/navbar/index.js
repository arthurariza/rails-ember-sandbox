import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class NavbarComponent extends Component {
  @service router;

  get activeRoute() {
    return this.router.currentRouteName;
  }

  @action
  logRoute() {
    console.log(this.router);
  }
}
