// bold-text button
let checkBold = true;
document.querySelector('.boldBtn').addEventListener('click', function(){
    if(checkBold){
        document.querySelector('.mainDown').style.fontWeight = 'bold';
        checkBold = false
    }
    else{
        document.querySelector('.mainDown').style.fontWeight = '';
        checkBold = true
    }
})


// italic-text button
let checkItalic = true;
document.querySelector('.italicBtn').addEventListener('click', function(){
    if(checkItalic){
        document.querySelector('.mainDown').style.fontStyle = 'italic';
        checkItalic = false
    }
    else{
        document.querySelector('.mainDown').style.fontStyle = '';
        checkItalic = true
    }
})


// underline-text button
let checkUnder = true;
document.querySelector('.underlineBtn').addEventListener('click', function(){
    if(checkUnder){
        document.querySelector('.mainDown').style.textDecoration = 'underline';
        checkUnder = false
    }
    else{
        document.querySelector('.mainDown').style.textDecoration = '';
        checkUnder = true
    }
})


// cross-over-text button
let checkCross = true;
document.querySelector('.crossOverBtn').addEventListener('click', function(){
    if(checkCross){
        document.querySelector('.mainDown').style.textDecoration = 'line-through';
        checkCross = false
    }
    else{
        document.querySelector('.mainDown').style.textDecoration = '';
        checkCross = true
    }
})


// text position buttons
document.querySelector('.textLeft').addEventListener('click', function(){
    document.querySelector('.textEdit').style.textAlign = 'left';
})
document.querySelector('.textRight').addEventListener('click', function(){
    document.querySelector('.textEdit').style.textAlign = 'right';
})
document.querySelector('.textCenter').addEventListener('click', function(){
    document.querySelector('.textEdit').style.textAlign = 'center';
})


// font-family drop-down menu
document.querySelector('.textArial').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontFamily = 'Arial, Helvetica, sans-serif';
})
document.querySelector('.textGeorgia').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontFamily = `Georgia, 'Times New Roman', Times, serif`;
})
document.querySelector('.textImpact').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontFamily = `Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif`;
})
document.querySelector('.textTahoma').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
})
document.querySelector('.textTimes').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontFamily = `'Times New Roman', Times, serif`;
})
document.querySelector('.textVerdana').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
})


// font-size drop-down menu
document.querySelector('.fsize12').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontSize = '12px';
})
document.querySelector('.fsize14').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontSize = '14px';
})
document.querySelector('.fsize16').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontSize = '16px';
})
document.querySelector('.fsize18').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontSize = '18px';
})
document.querySelector('.fsize20').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontSize = '20px';
})
document.querySelector('.fsize22').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontSize = '22px';
})
document.querySelector('.fsize25').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontSize = '25px';
})
document.querySelector('.fsize30').addEventListener('click', function(){
    document.querySelector('.mainDown').style.fontSize = '30px';
})


// text-color modal
for(let i = 0; i<document.querySelector('.colors').children.length; i++){
    document.querySelector('.colors').children[i].addEventListener('click', function(){
        document.querySelector('.mainDown').style.color = this.classList[1];
    })
}

// body background modal
for(let i = 0; i<document.querySelector('.colorsBg').children.length; i++){
    document.querySelector('.colorsBg').children[i].addEventListener('click', function(){
        document.body.style.background = this.classList[1];
    })
}
for(let i = 0; i<document.querySelector('.imagesBg').children.length; i++){
    document.querySelector('.imagesBg').children[i].addEventListener('click', function(){
        document.body.style.background = `url(./pictures/pic${i+1}.jpg)`;
    })
}
document.querySelector('#customFile').addEventListener('change', function(){
    let url = URL.createObjectURL(this.files[0]);
    document.body.style.background = "url(" + url + ") no-repeat";
})

// signIn button
let pass = document.querySelector('.passInp');
let login = document.querySelector('.loginInp');
let word = 'admin';
document.querySelector('.signBtn').addEventListener('click', function(){
    if(pass.value == word && login.value == word){
        document.querySelector('#regForm').style.display = 'none';
        document.querySelector('#regForm1').style.display = 'block';
        document.querySelector('#signHeader').innerText = 'Sign Out';
        document.querySelector('.addFuncBtn').disabled = false;
        document.querySelector('.lockBtn').innerHTML = '<i class="fas fa-unlock"></i>';
        document.querySelector('.signBtn').setAttribute('data-dismiss', 'modal')
    }
    else if(pass.value == '' && login.value == ''){
        document.querySelector('.signMassage').style.display = 'block';
    }
    else if(pass.value != word && login.value === ''){
        document.querySelector('.signMassage').style.display = 'block';
        document.querySelector('.signMassage').innerText = 'Please check your login or password';
    }
    else if(pass.value == '' && login.value != word){
        document.querySelector('.signMassage').style.display = 'block';
        document.querySelector('.signMassage').innerText = 'Please check your login or password';
    }
    else{
        document.querySelector('.signMassage').style.display = 'block';
        document.querySelector('.signMassage').innerText = 'Please check your login or password';
    }

})

// signOut button
document.querySelector('.signOutBtn').addEventListener('click', function(){
    document.querySelector('#regForm').style.display = 'block';
    document.querySelector('#regForm1').style.display = 'none';
    document.querySelector('#signHeader').innerText = 'Sign In';
    document.querySelector('.addFuncBtn').disabled = true;
    document.querySelector('.signMassage').innerText = 'Value is empty';
    document.querySelector('.lockBtn').innerHTML = '<i class="fas fa-lock"></i>';
    document.querySelector('.signBtn').removeAttribute('data-dismiss', 'modal');
    document.querySelector('.signMassage').style.display = 'none';
    document.forms['regForm'].reset()
})

// add functional button

document.querySelector('.addFuncBtn').addEventListener('click', function(){
    document.querySelector('.btnGroup2').style.display = 'block';
    document.querySelector('.btnGroup1').style.display = 'none';
    document.querySelector('.textEdit').style.display = 'none';
    document.querySelector('.editArea').style.display = 'block';
    document.querySelector('#editArea').value = document.querySelector('.textEdit').innerHTML;
})


// create table button
document.querySelector('.createTableBtn').addEventListener('click', function(){
    let countTd = document.querySelector('#countTd').value;
    let countTr = document.querySelector('#countTr').value;
    let widthTd = document.querySelector('#widthTd').value;
    let heightTd = document.querySelector('#heightTd').value;
    let bdWidth = document.querySelector('#borderWidth').value;
    let bdStyle = document.querySelector('.tdBorderStyle').value;
    let bdColor = document.querySelector('.tdBorderColor').value;
    let bdStyleSel =  document.querySelector('.tdBorderStyle');
    let bdColorSel = document.querySelector('.tdBorderColor');
    if(countTd == '' || countTr == '' || widthTd == '' || heightTd == '' || bdWidth == '' || bdStyleSel[0].selected == true || bdColorSel[0].selected == true){
        document.querySelector('.signTableMassage').style.display = 'block'
    }
    else if(isNaN(countTd) || isNaN(countTr) || isNaN(widthTd) || isNaN(heightTd) || isNaN(bdWidth)){
        document.querySelector('.signTableMassage').style.display = 'block'
    }
    else{
        document.querySelector('#editArea').value += `<table>`;
        for(let i = 0; i < countTr; i++){
            document.querySelector('#editArea').value += `<tr>`;
            for(let i = 0; i < countTd; i++){
                document.querySelector('#editArea').value += `<td style = "width: ${widthTd}px; height: ${heightTd}px; border: ${bdWidth}px ${bdStyle} ${bdColor}">TD</td>`;
            }
            document.querySelector('#editArea').value += `</tr>`; 
        }
        document.querySelector('#editArea').value += `<table>`;
        document.querySelector('.signTableMassage').style.display = 'none'
    }
})

// reset table data button
document.querySelector('.resetTableData').addEventListener('click', function(){
    document.querySelector('.signTableMassage').style.display = 'none';
    let tableData = document.forms['tableForm'];
    tableData.reset()
})

// create Ol button
document.querySelector('.createOlBtn').addEventListener('click', function(){
    let olCount = document.querySelector('.olCount').value;
    let olMark = document.querySelector('.olMarkStyle');
    let olMarkStyle = document.querySelector('.olMarkStyle').value;
    if( isNaN(olCount) || olMark[0].selected == true){
        document.querySelector('.signOlMassage').style.display = 'block'
    }
    else{
        document.querySelector('#editArea').value += `<ol>`;
        for(let i = 0; i < olCount; i++){
                document.querySelector('#editArea').value += `<li style = "list-style-type: ${olMarkStyle}">Item ${i+1}</li>`;
        }
        document.querySelector('#editArea').value += `</ol>`;
        document.querySelector('.signOlMassage').style.display = 'none';
    }
})
// reset ol form button
document.querySelector('.resetOlData').addEventListener('click', function(){
    document.querySelector('.signOlMassage').style.display = 'none';
    let olForm = document.forms['olForm'];
    olForm.reset()
})


// create ul button
document.querySelector('.createUlBtn').addEventListener('click', function(){
    let ulCount = document.querySelector('.ulCount').value;
    let ulMark = document.querySelector('.ulMarkStyle');
    let ulMarkStyle = document.querySelector('.ulMarkStyle').value;
    if( isNaN(ulCount) || ulMark[0].selected == true){
        document.querySelector('.signUlMassage').style.display = 'block'
    }
    else{
        document.querySelector('#editArea').value += `<ul>`;
        for(let i = 0; i < ulCount; i++){
                document.querySelector('#editArea').value += `<li style = "list-style-type: ${ulMarkStyle}">Item ${i+1}</li>`;
        }
        document.querySelector('#editArea').value += `</ul>`;
        document.querySelector('.signUlMassage').style.display = 'none'
    }
})
// reset ul form button
document.querySelector('.resetUlData').addEventListener('click', function(){
    document.querySelector('.signUlMassage').style.display = 'none';
    let ulForm = document.forms['ulForm'];
    ulForm.reset()
})


// save edit button
document.querySelector('.saveBtn').addEventListener('click', function(){
    document.querySelector('.textEdit').innerHTML = document.querySelector('#editArea').value;
    document.querySelector('.btnGroup2').style.display = 'none';
    document.querySelector('.btnGroup1').style.display = 'block';
    document.querySelector('.textEdit').style.display = 'block';
    document.querySelector('.editArea').style.display = 'none';
})