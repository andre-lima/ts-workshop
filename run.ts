import FS from 'fs';
import PATH from 'path';
import CHALK from 'chalk';
import UTIL from 'util';

const readdir = UTIL.promisify(FS.readdir);
const getTime = () => new Date().getTime();

const { stdin } = process;
stdin.setEncoding('utf8');

const isDebugingMode = process.stdin.isTTY !== true;

let input: string = '';

if (stdin.isTTY) {
    stdin.setRawMode(true);
    stdin.resume();
}

stdin.on('data', (buf) => {
    input = String(buf);
    const lastKey = input.slice(-2).charCodeAt(0);
    if (lastKey === 3) {
        process.stdout.write('\n\n' + CHALK.yellow(`Terminated`) + '\n');
        process.exit(0);
    }
});


const question = (s: string): Promise<number> => new Promise((resolve) => {
    input = '';
    const check = () => {
        setTimeout(() => {
            if (input != '') {
                resolve(input.slice(-2).charCodeAt(0));
            } else {
                check();
            }
        }, 100);
    }
    console.log(s);
    check();
});

const rootPath = PATH.resolve('.');
const srcPath = PATH.join(rootPath, 'src');
const sepRE = /[\\/]/g
const rootPathRE = new RegExp(rootPath.concat(PATH.sep + '?').replace(sepRE, '[\\/]'), 'ig');

const exerciseRE = /exercise-(\d+)/i;
const findExercise = async (num: string) => {
    const files = await readdir(srcPath);
    const found = files.map(i => exerciseRE.exec(i)).filter(v => v != null && v[1] === num).shift();

    if (found != null) {
        return PATH.join(srcPath, found.input);
    }

    return false;
}

const parseExercise = () => {
    const args = process.argv;
    const exerciseNumber = Number((args.slice().pop() ?? '').replace(/\D/, '') || '1');

    if (Number.isNaN(exerciseNumber)) {
        return 1;
    }

    return exerciseNumber;
}

const executeExercise = async (path: string) => {
    try {
        await import(path);
        delete require.cache[path]
    } catch (e) {
        const stack = e.stack as string;
        return stack.replace(rootPathRE, '');
    }
    return '';
}

const runExercise = async (num: number) => {
    const exercisePath = await findExercise(String(num));

    if (exercisePath === false) {
        console.log(CHALK.bgGreenBright.black(` Seems you're done :) `) + '\n');
        process.exit(0);
    }

    const program: () => Promise<void> = async () => {
        console.log('\x1Bc' + CHALK.green(`Running exercise (${exercisePath.replace(srcPath + PATH.sep, '').replace(/\.\w+$/, '')})`) + CHALK.gray(` [${new Date().toLocaleTimeString()}]`) + '\n');
        const errors = await executeExercise(exercisePath);

        if (errors) {
            console.log(CHALK.bgRedBright.black(' Fix following issues: ') + '\n\n', errors);
        } else {
            console.log('\n\n' + CHALK.bgGreenBright.black(` Awesome, you're a TypeScript ninja!! `))
        }

        const key = await question('\n\n\n' + CHALK.yellow(`Press enter to continue to next exercise or any key to exit`));
        const shouldContinue = key === (isDebugingMode ? 10 : 13);

        if (shouldContinue) {
            watcher.close();
            await runExercise(num + 1);
        } else {
            watcher.close();
            console.log('\n' + CHALK.bgMagentaBright.black(` See ya! `) + '\n\n');
            process.exit(0);
        }
    }

    let timerId: NodeJS.Timeout;
    const watcher = FS.watch(exercisePath, (event) => {
        if (event === 'change' || event === 'rename') {
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(program, 500);
        } else {
            console.log('Invalid file change event!');
            process.exit(0);
        }
    });

    program().catch(e => {
        console.log('\n\n\n\n\n\n' + `Something terrible has gone wrong!` + '\n', e);
        process.exit(1);
    });
}

setImmediate(() => runExercise(parseExercise()));
