const compose = require("lodash/fp/compose");
const yaml = require("yaml");
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const CHAIN_CONFIG = require("./chain-config.js");

const program = new Command();
program
  .version("0.0.1")
  .requiredOption(
    "-n, --network <name>",
    "input network name as written in chaintypes.js",
    "polkadot"
  )
  .option("-b, --blockNumber <blockNumber>", "start block to index from")
  .option("-g, --genesisHash <genesisHash>", "genesis hash of network")
  .option("-e, --endpoint <endpoint>", "endpoint of network")
  .option("-d, --dictionary <dictionary>", "dictionary of network");
program.parse(process.argv);

const NETWORK = program.network;
const BASE_MANIFEST_PATH = path.resolve(__dirname, "../base-project.yaml");
const MANIFEST_PATH = path.resolve(__dirname, "../project.yaml");

const startBlockNumber = program.blockNumber;

function readManifestFile() {
  const content = fs.readFileSync(BASE_MANIFEST_PATH, "utf-8");
  const parsedContent = yaml.parse(content);
  return parsedContent;
}

function patchManifest(manifest) {
  const _manifest = { ...manifest };
  const obj = CHAIN_CONFIG[NETWORK];

  if (!obj) throw Error("Network object doesnot exist in scripts/chain-config.js");

  // create chaintypes file
  fs.writeFileSync(
    path.resolve(__dirname, "../chaintypes.json"),
    JSON.stringify(obj.chaintypes, null, 2),
    {
      encoding: "utf-8",
    }
  );

  // update start block
  _manifest.dataSources[0].startBlock = startBlockNumber
    ? Number(startBlockNumber)
    : obj.startBlock;

  // update network details
  _manifest["network"] = {
    genesishash: obj.genesishash,
    endpoint: obj.endpoint,
    dictionary: obj.dictionary,
    chaintypes: {
      file: "./chaintypes.json",
    },
  };

  return _manifest;
}

function writeManifest(manifest) {
  const _manifest = yaml.stringify(manifest, undefined);

  fs.writeFileSync(MANIFEST_PATH, _manifest, { encoding: "utf-8" });
  console.log(`manifest file updated with network: ${NETWORK}`);
}

const run = compose(writeManifest, patchManifest, readManifestFile);
run();
