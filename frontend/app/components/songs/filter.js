import Component from '@glimmer/component';

export default class SongsFilterComponent extends Component {
  get results() {
    let { songs, query } = this.args;

    if (query) {
      const regex = new RegExp(query, 'gi');
      songs = songs.filter(
        (song) =>
          song.name.match(regex) ||
          song.artist.match(regex) ||
          song.album.match(regex)
      );
    }

    return songs;
  }
}
