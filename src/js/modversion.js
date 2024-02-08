export const modInfo = await fetch('https://api.modrinth.com/v2/project/midnightlib/version').then((response) => response.json())
export const loaderList = ['fabric', 'quilt', 'forge', 'neoforge'];
var finishedArray = modInfo.reduce(function(map, value) {
  value.game_versions.forEach(version => {
    value.loaders.forEach(loader => {
      const loaderAndVersion = loader + "+" +version;
      if (!Object.values(map).includes(loaderAndVersion)) {
        if (value.featured) map[loaderAndVersion] = value.id;
      }
    });
  });
  return map;
}, {});
export var selectedLoader = "fabric";

export var versionList = [];
var versionMap = await Object.keys(finishedArray).reduce(function(map, value) { 
    if (value.startsWith(selectedLoader)) {
        const version = value.split("+")[1];
        if (!Object.values(map).includes(version)) {
            map[version] = "";
        }
    }
    return map;
}, {});
versionList = await Object.keys(versionMap).sort().reverse();

export var selectedVersion = "1.20.4";

var resultingVersionID = await finishedArray[selectedLoader + "+" + selectedVersion];
export var resultingVersion = "Could not find the latest version!";
resultingVersion = modInfo.find((info) => info.id == resultingVersionID).version_number;
{console.log(resultingVersion)}