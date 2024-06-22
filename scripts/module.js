function injectTailwindCSS() {
    let Tailwind = document.createElement('script');
    Tailwind.src = "https://cdn.tailwindcss.com"

    document.head.appendChild(Tailwind);
}

Hooks.once('init', async function() {
    console.log("Injecting Tailwind CSS");
    injectTailwindCSS()
    alert("Injected Tailwind CSS")
});

Hooks.once('ready', async function() {
    tailwind.config = {corePlugins: {preflight: false}};
});
