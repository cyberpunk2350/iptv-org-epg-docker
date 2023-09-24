const { execSync } = require("child_process");
var cron = require("node-cron");

const execute = () => {
  console.log("Grabbing epg...");
  try {
    execSync("SITE=plex.tv npm run grab", {
      stdio: "inherit",
      cwd: "/usr/src/app",
    });
  } catch (error) {
    console.error(
      "something went wrong while grabbing epg from plex.tv",
      error
    );
  }
  
  try {
    execSync("SITE=i.mjh.nz npm run grab", {
      stdio: "inherit",
      cwd: "/usr/src/app",
    });
  } catch (error) {
    console.error(
      "something went wrong while grabbing epg from i.mjh.nz",
      error
    );
  }
  
    try {
    execSync("SITE=i.mjh.nz_pluto npm run grab", {
      stdio: "inherit",
      cwd: "/usr/src/app",
    });
  } catch (error) {
    console.error(
      "something went wrong while grabbing epg from i.mjh.nz_pluto",
      error
    );
  }
  
  try {
    execSync("SITE=tvguide.com npm run grab", {
      stdio: "inherit",
      cwd: "/usr/src/app",
    });
  } catch (error) {
    console.error(
      "something went wrong while grabbing epg from tvguide.com",
      error
    );
  }
};

cron.schedule("0 0 * * *", execute);

execute();
