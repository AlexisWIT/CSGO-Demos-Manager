import { exec } from 'node:child_process';
import { isWindows } from 'csdm/node/os/is-windows';

// TODO Remove log parameter once https://github.com/akiver/cs-demo-manager/issues/950 is resolved.
export async function areProcessesRunning(processNames: string[], log = false): Promise<boolean> {
  if (isWindows) {
    return new Promise<boolean>((resolve) => {
      return exec('tasklist', { windowsHide: true }, (err, stdout) => {
        if (err) {
          if (log) {
            logger.log('tasklist error');
            logger.log(err);
          }
          return resolve(false);
        }

        for (const name of processNames) {
          if (stdout.includes(name)) {
            return resolve(true);
          }
        }

        if (log) {
          logger.log('tasklist process not found');
          logger.log(stdout);
        }

        return resolve(false);
      });
    });
  }

  const areRunning = await Promise.all(
    processNames.map((processName) => {
      return new Promise<boolean>((resolve) => {
        return exec(`pgrep ${processName}`, { windowsHide: true }, (error) => {
          // pgrep throws an error if the process has not been found, otherwise it means the process is running.
          if (error) {
            return resolve(false);
          }

          return resolve(true);
        });
      });
    }),
  );

  return areRunning.some((isRunning) => isRunning);
}
