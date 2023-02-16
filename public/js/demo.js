const stateContainer = document.querySelector('.current-state');
const requestContainer = document.querySelector('.request-container');
const responseContainer = document.querySelector('.response-container');

// Demo - Update current component state container
function updateStateContainer(newState) {
    stateContainer.innerHTML = library.json.prettyPrint(newState);
}

// Demo - Update request container
function updateRequestContainer(response) {
    const defaultResponseParams = { merchantAccount: 'DanielSchofield_Ecomm' };
    requestContainer.querySelector('pre').innerHTML = library.json.prettyPrint( {...defaultResponseParams, ...response});
    requestContainer.classList.add('request-container--visible');
}

// Demo - Update server response container
function updateResponseContainer(response) {
    responseContainer.querySelector('pre').innerHTML = library.json.prettyPrint(response);// JSON.stringify(response, null, 2);
    responseContainer.classList.add('response-container--visible');
}

// Demo - Copy Source Code Examples
document.querySelectorAll('.copy-sample-code').forEach(c => {
    c.addEventListener('click', () => {
        const code = document.querySelector('.source-code');
        const range = document.createRange();
        range.selectNode(code);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        c.classList.add('copy-sample-code--active');

        setTimeout(() => {
            c.classList.remove('copy-sample-code--active');
        }, 1000);
    });
});
