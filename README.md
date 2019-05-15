# Logger for React Components Render

## Install
`npm i --save react-render-logger`

## Usage
```javascript
import reactRenderWatch from 'react-render-logger';

class App extends Component {
    render () {
        return (
            <div>app</div>
        );
    }
};
reactRenderWatch(App);
export default App;

```

or:

```javascript
import reactRenderWatch from 'react-render-logger';

@reactRenderWatch
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
