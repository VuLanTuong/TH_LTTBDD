function convertToCamelCase() {
    const input = document.getElementById('variableNames').value;
    const names = input.split('\n');
    const convertedNames = [];

    for (const name of names) {
        const words = name.toLowerCase().split('_');
        let convertedName = words[0];

        for (let i = 1; i < words.length; i++) {
            const capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1);
            convertedName += capitalizedWord;
        }

        convertedNames.push(convertedName);
    }

    document.getElementById("result").innerHTML = convertedNames.join('\n');
    console.log(convertedNames);
}

document.getElementById('convertButton').addEventListener('click', convertToCamelCase);