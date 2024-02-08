export const modInfo = await fetch('https://api.modrinth.com/v2/project/midnightlib/version').then((response) => response.json())
export const loaderList = ['fabric', 'quilt', 'forge', 'neoforge'];
var finishedArray = modInfo.reduce(function(map, value) {
  value.game_versions.forEach(version => {
    value.loaders.forEach(loader => {
      const loaderAndVersion = loader + "+" +version;
      if (Object.values(map).includes(loaderAndVersion)) {
        console.log("return")
        return;
      }
      if (value.featured) map[loaderAndVersion] = value.id;
    });
  });
  return map;
}, {});
console.log(finishedArray);
export var selectedLoader = "fabric";
export var selectedVersion = "1.20.4";
var resultingVersionID = await finishedArray[selectedLoader + "+" + selectedVersion];
export var resultingVersion = "Could not find the latest version!";
resultingVersion = modInfo.find((info) => info.id == resultingVersionID).version_number;
{console.log(resultingVersion)}