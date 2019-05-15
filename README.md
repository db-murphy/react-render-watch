# Logger for React Components Render

## Install
`npm i --save react-watch-render`

## Usage
```javascript
import { renderLogger } from 'react-watch-render';

class App extends Component {
    render () {
        return (
            <div>app</div>
        );
    }
};
renderLogger(App);
export default App;

```

or:

```javascript
import { renderLogger } from 'react-watch-render';

@renderLogger
class App extends Component {
    render () {
        return (
            <div>app</div>
        );
    }
};
export default App;
```

## License
MIT
