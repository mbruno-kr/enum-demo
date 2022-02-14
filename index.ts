enum Status {
    Success = 'success',
    Failure = 'failure'
}

console.log('Check this out: \n', Status.Success);

console.log('Now with just a [key]\n', Status["Success"])