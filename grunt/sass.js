module.exports = {
    all: {
        'options': {
            'outputStyle' : 'expanded',
            'sourceMap'   : false
        },
        'files': [
            {
                'expand' : true,
                'cwd'    : 'src',
                'src'    : 'styles/*.scss',
                'dest'   : 'dist',
                'ext'    : '.min.css'
            }
        ]
    },
    dev: {
        'options': {
            'sourceMap': true
        },
        'files': [{
            'expand' : true,
            'cwd'    : 'src',
            'src'    : 'styles/*.scss',
            'dest'   : 'dist',
            'ext'    : '.min.css'
        }]
    }
};
