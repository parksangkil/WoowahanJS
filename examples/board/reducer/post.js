import Woowahan from '../../../index';
import { FETCH_POST } from '../action';

export default Woowahan.Reducer.create(FETCH_POST, function(options) {
  this.onSuccess = function(response) {
    this.finish(response);
  };

  this.getData(`https://jsonplaceholder.typicode.com/posts/`+options.id);
});