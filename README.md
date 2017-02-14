# Simple Carousel with ReactJs + BaconJs

This is a very simple Carousel demo, using ReactJs + basic BaconJs to manage the stream to demonstrate how [ReactJs](https://facebook.github.io/react) and [BaconJs](https://baconjs.github.io) can work together.

Note:
I'm reusing a bit of foundation from my previous projects like eslintrc + sass-lint + editorconfig as a habit. So please feel free to use different setting. There might be some redundant ddependencies I haven't got time to clean up.

## Preview
The build is accessible here:
[https://cdn.rawgit.com/singuyen/simpleCarousel/219ba3d6/dist/docs/index.html](https://cdn.rawgit.com/singuyen/simpleCarousel/219ba3d6/dist/docs/index.html)

### Clone the repo

    git clone git@github.com:singuyen/simpleCarousel.git

### Install dependencies

    npm install
    npm install serve -g

## Development

    grunt && grunt watcher
    serve -p 3000
    Open browser with address: http://localhost:3000/dist/docs/

### Build Commands

| Command | Result |
| ------- | ------ |
| `grunt` | Builds the application. Assets can be found in `./dist`. |
| `grunt watcher` | Builds the application and watches for changes. |
| `grunt clean` | Destroys the `./dist` and `./tmp` directory. |

TO-DO: Missing a `grunt serve`

### Running Tests

N/A

## License

   MS Reference
