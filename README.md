# Logger for React Components Render

## Install
`npm i --save react-watch-render`

## Usage
```javascript
import reactWatchRender from 'react-watch-render';

class App extends Component {
    render () {
        return (
            <div>app</div>
        );
    }
};
reactWatchRender(App);
export default App;

```

or:

```javascript
import reactWatchRender from 'react-watch-render';

@reactWatchRender
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
