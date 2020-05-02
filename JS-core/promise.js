/**
 * Promise
 */


function Promise(executer) {
    let status = 'pending';
    let successCallback = null;
    let failureCallback = null;
    executer(resolve, reject);

    function resolve(data) {
        status = 'success';
        if(typeof successCallback === 'function') {
            successCallback(data);
        }
    }

    function reject(err) {
        status = 'failure';
        if(typeof failureCallback === 'function') {
            failureCallback(err);
        }
    }

    function then(success) {
        successCallback = success;
    }

    function catch1(failure) {
        failureCallback = failure;
    }

    return {
        status,
        then,
        catch: catch1,    
    }

}