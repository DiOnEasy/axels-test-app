// jest.snapshot-resolver.js
const path = require('path');

module.exports = {
    testPathForConsistencyCheck: path.join(
        __dirname,
        'src',
        'tests',
        'components',
        'Footer.test.tsx' // Это может быть любой файл снепшота
    ),
    resolveSnapshotPath: (testPath, snapshotExtension) =>
        path.join(
            __dirname,
            'src',
            'tests',
            'snapshots',
            path.basename(testPath) + snapshotExtension
        ),
    resolveTestPath: (snapshotFilePath, snapshotExtension) =>
        path.join(
            __dirname,
            'src',
            'tests',
            'components',
            path.basename(snapshotFilePath, snapshotExtension)
        )
};
