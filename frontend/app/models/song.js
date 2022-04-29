import Model, { attr } from '@ember-data/model';

export default class SongModel extends Model {
  @attr('string') name;
  @attr('string') artist;
  @attr('number') duration;
  @attr('string') album;
}
