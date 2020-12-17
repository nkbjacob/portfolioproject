// form.js
//

const init = function(){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){
    ev.preventDefault();
    document.getElementById('form-user').reset();

}

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    let fails = validate();
    if(fails.length === 0){
        document.getElementById('form-user').submit();
    }else{

        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}

const validate = function(ev){
    let failures = [];
    let chk = document.getElementById('input-alive');
    if(!chk.checked){
        failures.push({input: 'input-alive', msg: 'Must be a human to submit.'})
    }

    let select = document.getElementById('input-how');
    if( select.selectedIndex === 0 ){
        failures.push({input:'input-how', msg:'Aliens do not exist.'})
    }

    let first = document.getElementById('input-first');
    let last = document.getElementById('input-last');
    let email = document.getElementById('input-email');
    if( first.value === ""){
        failures.push({input:'input-first', msg:'Required Field'})
    }
    if( last.value === "" || last.value.length < 2){
        failures.push({input:'input-last', msg:'Must be at least 2 Characters'})
    }
    if( email.value === ""){
        failures.push({input:'input-email', msg:'Required Field'})
    }

    return failures;
}


document.addEventListener('DOMContentLoaded', init);
