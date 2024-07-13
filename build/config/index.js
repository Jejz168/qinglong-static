"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const share_1 = require("./share");
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (!process.env.QL_DIR) {
    // 声明QL_DIR环境变量
    let qlHomePath = path_1.default.join(__dirname, '../../');
    // 生产环境
    if (qlHomePath.endsWith('/static/')) {
        qlHomePath = path_1.default.join(qlHomePath, '../');
    }
    process.env.QL_DIR = qlHomePath.replace(/\/$/g, '');
}
const lastVersionFile = `https://qn.whyour.cn/version.yaml`;
const rootPath = process.env.QL_DIR;
const envFound = dotenv_1.default.config({ path: path_1.default.join(rootPath, '.env') });
const dataPath = path_1.default.join(rootPath, 'data/');
const shellPath = path_1.default.join(rootPath, 'shell/');
const tmpPath = path_1.default.join(rootPath, '.tmp/');
const samplePath = path_1.default.join(rootPath, 'sample/');
const configPath = path_1.default.join(dataPath, 'config/');
const scriptPath = path_1.default.join(dataPath, 'scripts/');
const bakPath = path_1.default.join(dataPath, 'bak/');
const logPath = path_1.default.join(dataPath, 'log/');
const dbPath = path_1.default.join(dataPath, 'db/');
const uploadPath = path_1.default.join(dataPath, 'upload/');
const sshdPath = path_1.default.join(dataPath, 'ssh.d/');
const systemLogPath = path_1.default.join(dataPath, 'syslog/');
const envFile = path_1.default.join(configPath, 'env.sh');
const confFile = path_1.default.join(configPath, 'config.sh');
const crontabFile = path_1.default.join(configPath, 'crontab.list');
const authConfigFile = path_1.default.join(configPath, 'auth.json');
const extraFile = path_1.default.join(configPath, 'extra.sh');
const confBakDir = path_1.default.join(dataPath, 'config/bak/');
const sampleFile = path_1.default.join(samplePath, 'config.sample.sh');
const sqliteFile = path_1.default.join(samplePath, 'database.sqlite');
const authError = '错误的用户名密码，请重试';
const loginFaild = '请先登录!';
const configString = 'config sample crontab shareCode diy';
const versionFile = path_1.default.join(rootPath, 'version.yaml');
const dataTgzFile = path_1.default.join(tmpPath, 'data.tgz');
const shareShellFile = path_1.default.join(shellPath, 'share.sh');
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
exports.default = {
    port: parseInt(process.env.BACK_PORT, 10),
    cronPort: parseInt(process.env.CRON_PORT, 10),
    publicPort: parseInt(process.env.PUBLIC_PORT, 10),
    secret: process.env.SECRET || (0, share_1.createRandomString)(16, 32),
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        prefix: '/api',
    },
    rootPath,
    tmpPath,
    dataPath,
    dataTgzFile,
    shareShellFile,
    configString,
    loginFaild,
    authError,
    logPath,
    extraFile,
    authConfigFile,
    confBakDir,
    crontabFile,
    sampleFile,
    confFile,
    envFile,
    dbPath,
    uploadPath,
    configPath,
    scriptPath,
    samplePath,
    blackFileList: [
        'auth.json',
        'config.sh.sample',
        'cookie.sh',
        'crontab.list',
        'env.sh',
        'token.json',
    ],
    writePathList: [configPath, scriptPath],
    bakPath,
    apiWhiteList: [
        '/api/user/login',
        '/open/auth/token',
        '/api/user/two-factor/login',
        '/api/system',
        '/api/user/init',
        '/api/user/notification/init',
        '/open/user/login',
        '/open/user/two-factor/login',
        '/open/system',
        '/open/user/init',
        '/open/user/notification/init',
    ],
    versionFile,
    lastVersionFile,
    sqliteFile,
    sshdPath,
    systemLogPath,
};
//# sourceMappingURL=index.js.map