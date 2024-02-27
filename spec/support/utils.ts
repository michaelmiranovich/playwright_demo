import pino from 'pino';
import { env } from 'node:process';

/**
 * Logger
 *
 * Options:
 * colorize (-c): Adds terminal color escape sequences to the output.
 * crlf (-f): Appends carriage return and line feed, instead of just a line feed, to the formatted log line.
 * errorProps (-e): When formatting an error object, display this list of properties. The list should be a comma-separated list of properties Default: ''.
 * levelFirst (-l): Display the log level name before the logged date and time.
 * errorLikeObjectKeys (-k): Define the log keys that are associated with error like objects. Default: err,error.
 * messageKey (-m): Define the key that contains the main log message. Default: msg.
 * levelKey (--levelKey): Define the key that contains the level of the log. Default: level.
 * levelLabel (-b): Output the log level using the specified label. Default: levelLabel.
 * messageFormat (-o): Format output of message, e.g. {levelLabel} - {pid} - url:{request.url} will output message: INFO - 1123 - url:localhost:3000/test Default: false
 * timestampKey (-a): Define the key that contains the log timestamp. Default: time.
 * translateTime (-t): Translate the epoch time value into a human-readable date and time string. This flag also can set the format string to apply when translating the date to a human-readable format. For a list of available pattern letters, see the dateformat documentation.
 *    - The default format is yyyy-mm-dd HH:MM:ss.l o in UTC.
 *    - Require a SYS: prefix to translate time to the local system's time zone. A shortcut SYS:standard to translate time to yyyy-mm-dd HH:MM:ss.l o in system time zone.
 * search (-s): Specify a search pattern according to jmespath.
 * ignore (-i): Ignore one or several keys, nested keys are supported with each property delimited by a dot character (.), keys may be escaped to target property names that contains the delimiter itself: (-i time,hostname,req.headers,log\\.domain\\.corp/foo)
 * hideObject (-H): Hide objects from output (but not error object)
 * singleLine (-S): Print each log message on a single line (errors will still be multi-line)
 * config: Specify a path to a config file containing the pino-pretty options. pino-pretty will attempt to read from a .pino-prettyrc in your current directory (process.cwd) if not specified
 */
const transport = pino.transport({
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname'
    },
  })
  
  const logger = pino({
    level: env.LOG_LEVEL || 'debug'
  }, transport);

  export { logger };