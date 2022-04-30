import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SongsComponent extends Component {
  @service store;

  @tracked query = '';
  @tracked currentSong = { name: '', artist: '', duration: '', album: '' };

  @action
  createSong() {
    console.log(this.currentSong);
    let song = this.store.createRecord('song', {
      params: { ...this.currentSong },
    });
    song.save();
  }

  @action
  deleteSong(id) {
    let song = this.store.peekRecord('song', id);
    song.destroyRecord();
  }
}
