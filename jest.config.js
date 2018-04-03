module.exports = {
    'roots': [
        '<rootDir>/app'
    ],
    'setupFiles': [
        '<rootDir>/test-shim.js',
        '<rootDir>/test-setup.js'
    ],
    'globals': {
        'ts-jest': {
            'useBabelrc': true,
            'enableTsDiagnostics': true
        }
    },
    'transform': {
        '\\.(ts|tsx)$': '<rootDir>/test-preprocessor.js'
    },
    'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx'
    ],
    'modulePathIgnorePatterns': [
        '<rootDir>/node_modules/'
    ],
    'collectCoverageFrom': [
        'app/**/*.test.{js*}'
    ]
}
