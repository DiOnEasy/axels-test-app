const path = require('path');
const fs = require('fs');

const snapshotsDir = path.join(__dirname, '../__snapshots__');

function getAllSubdirectories(srcPath) {
    return fs
        .readdirSync(srcPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => path.join(srcPath, dirent.name));
}

module.exports = {
    resolveSnapshotPath: (testPath, snapshotExtension) => {
        const testFileName = path.basename(testPath);
        const snapshotPath = path.join(
            snapshotsDir,
            `${testFileName}${snapshotExtension}`
        );
        return snapshotPath;
    },
    resolveTestPath: (snapshotFilePath, snapshotExtension) => {
        const testFileName = path
            .basename(snapshotFilePath)
            .replace(snapshotExtension, '');
        const testDirectories = getAllSubdirectories(
            path.join(__dirname, '../')
        );

        for (const dir of testDirectories) {
            const fullPath = path.join(dir, testFileName);
            if (pathExists(fullPath)) {
                return fullPath;
            }
        }

        throw new Error(
            `Test file not found for snapshot: ${snapshotFilePath}`
        );
    },
    testPathForConsistencyCheck: path.join(
        __dirname,
        '../components/Footer.test.tsx'
    )
};

function pathExists(filePath) {
    try {
        fs.accessSync(filePath);
        return true;
    } catch (e) {
        return false;
    }
}
