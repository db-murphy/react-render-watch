# Logger for React Components Render

## Install
`npm i --save react-render-watch`

## Usage
```javascript
import reactRenderWatch from 'react-render-watch';

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
import reactRenderWatch from 'react-render-watch';

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
