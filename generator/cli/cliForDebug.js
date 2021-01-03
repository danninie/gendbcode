const program = require('commander');
const chalk = require('chalk');

const packageJson = require('../package.json');
const { CLI_NAME, initHelp, logger, createYeomanEnv, toString, getCommand, getCommandOptions, getArgs, done } = require('./utils');
const initAutoCompletion = require('./completion').init;
const SUB_GENERATORS = require('./commands');

const version = packageJson.version;
const JHIPSTER_NS = CLI_NAME;
const env = createYeomanEnv();

/* setup debugging */
logger.init(program);

process.argv=[  '',
                '',
                'import-jdl',
                //'d:/jhipster-jdl-cassandra-temp1.jh',
                'd:/jhipster-jdl-cassandra-temp2.jh'
             ]    

const options = getCommandOptions(packageJson, process.argv.slice(2));

const program_args=[ [ 'd:/jhipster-jdl-cassandra-temp2.jh'] ]
//const program_args=[ [ 'd:/jhipster-jdl-cassandra-temp1.jh','d:/jhipster-jdl-cassandra-temp2.jh' ] ]

require(`./import-jdl`)(program_args, options, env);

