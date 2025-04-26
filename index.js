function main() {
    greet('Hello')
}

function greet(greeting, name='World', version='rcm-v4') {
    console.log(`${greeting} ${name} for ${version}`);
}

main();
