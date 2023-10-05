/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var proDBName = "COLLEGE - DB";
var proRelationName = "PROJECT-TABLE";
var connToken = "90931651|-31949326530431288|90961432";

$("#proId").focus();

function saveRecNo2LS(jsonObj)
{
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function getProIdAsJsonObj() {
    var proid = $('#proId').val();
    var jsonStr = {
        Id: proid
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var data = JSON.parse(jsonObj.data).record;
    $("#proName").val(data.Project_Name);
    $("#to").val(data.Assigned_To);
    $("#date").val(data.Assignment_date);
    $("#deadline").val(data.Deadline);
    
}

function resetForm() {
    $("#proId").val("");
    $("#proName").val("");
    $("#to").val("");
    $("#date").val("");
    $("#deadline").val("");
    $("#proId").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#proId").focus();
}

function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === "") {
        return "";
    }
    var putReqStr = createPUTRequest(connToken, jsonStrObj, proDBName, proRelationName);

    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putReqStr, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("#proId").focus();
}






function validateData() {
    var proid, proname, to, date, deadline;
    proid = $("#proId").val();
    proname = $("#proName").val();
    to = $("#to").val();
    date = $("#date").val();
    deadline = $("#deadline").val();
    
    if (proid === "") {
        alert("Employee id missing");
        $("#proId").focus();
        return "";
    }
    if (proname === "") {
        alert("Employee id missing");
        $("#proName").focus();
        return "";
    }
    if (to === "") {
        alert("Employee id missing");
        $("#to").focus();
        return "";
    }
    if (date === "") {
        alert("Employee id missing");
        $("#date").focus();
        return "";
    }
    if (deadline === "") {
        alert("Employee id missing");
        $("#deadline").focus();
        return "";
    }
   

    var jsonStrObj = {
        Id: proid,
        Project_Name: proname,
        Assigned_To: to,
        Assignment_date: date,
        Deadline: deadline
        
    };
    return JSON.stringify(jsonStrObj);
}

function getPro() {
    var proIdAsJsonObj = getProIdAsJsonObj();

    var getRequest = createGET_BY_KEYRequest(connToken, proDBName, proRelationName, proIdAsJsonObj);

    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 400)
    {
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#proName").focus();
    } else if (resJsonObj.status === 200)
    {
        $("#proId").prop("disabled", true);
        fillData(resJsonObj);
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#proName").focus();
    }
}

function saveData() {
    var jsonObj = validateData();
    if (jsonObj === "") {
        return "";
    }
    var putReqStr = createPUTRequest(connToken, jsonObj, proDBName, proRelationName);

    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putReqStr, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("#proId").focus();
}

function changeData() {
    $("#change").prop("disabled", true);
    jsonChg = validateData();
    var updateReqStr = createUPDATERecordRequest(connToken, jsonChg, proDBName, proRelationName, localStorage.getItem("recno"));

    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateReqStr, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();
    $("#proId").focus();
}
