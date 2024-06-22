function registerSettingsMenu() {
  game.settings.register("tailwind-injector", "disablePreflight", {
    name: "Disable Preflight",
    hint: "Whether Preflight should be Disabled(True) or Enabled(False)",
    scope: "world", // "world" = sync to db, "client" = local storage
    config: true, // false if you don't want it to show in module config
    type: Boolean, // Use the Boolean constructor for type definition
    default: true,
    onChange: (value) => {
      // value is the new value of the setting
      console.log(value);
    },
    requiresReload: true, // true if you want to prompt the user to reload
  });
}

function injectTailwindCSS() {
  let tailwind = document.createElement("script");
  tailwind.src = "https://cdn.tailwindcss.com";

  document.head.appendChild(tailwind);
}

Hooks.once("init", async function () {
  registerSettingsMenu();
  injectTailwindCSS();
});

Hooks.once("ready", async function () {
  const disablePreflight = game.settings.get(
    "tailwind-injector",
    "disablePreflight"
  );

  if (disablePreflight) {
    tailwind.config = { corePlugins: { preflight: false } };
  } else {
    tailwind.config = { corePlugins: { preflight: true } };
  }
});
