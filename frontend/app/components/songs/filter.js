import Component from '@glimmer/component';

export default class SongsFilterComponent extends Component {
  get results() {
    let { songs, query } = this.args;

    if (query) {
      songs = songs.filter((song) =>
        song.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return songs;
  }
}
