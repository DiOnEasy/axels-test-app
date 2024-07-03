module.exports = {
    moduleDirectories: ['node_modules', 'src', __dirname],
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // Используем jsdom в качестве среды тестирования
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    snapshotResolver: './jest.snapshot-resolver.js',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.tsx',
        '!src/serviceWorker.ts'
    ],
    transformIgnorePatterns: ['node_modules/(?!axios)/']
};
