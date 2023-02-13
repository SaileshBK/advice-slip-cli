#!/usr/bin/env node

const axios = require('axios');
async function fetchData() {
    const options = {
        method: 'GET'
    };

    const response = await axios.get('https://api.adviceslip.com/advice', options)
    console.log('')
    console.log(response?.data.slip.advice);
}

fetchData();
