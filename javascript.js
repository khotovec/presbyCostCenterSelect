/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */
/*
    if (window.location.href.indexOf("OrderFinalStep.aspx") > -1) {
*/

$(document).ready(function getDucID() {
    "use strict";
    var getClass = $('.Duc')[1],
        dialidset = getClass.getAttribute("dialid"),
        dialdenotation = document.createElement('div'),
        divHide = document.getElementById('ctl00_cphMainContent_pnlPropertiesConfig');
    dialdenotation.innerHTML = (dialidset);
    dialdenotation.setAttribute("id", "iNeedThisDialNumber");
    dialdenotation.style.display = 'none';
    divHide.append(dialdenotation);
});

$(document).ready(function main2() {
    "use strict";
    var dialIDGet = document.getElementById('iNeedThisDialNumber'),
        dialIDGive = dialIDGet.innerHTML,
        lblspecialInstructions = document.getElementById('ctl00_cphMainContent_ctl11_Duc' + dialIDGive + '_LblDial'),
        txtspecialInstructions = document.getElementById('ctl00_cphMainContent_ctl11_Duc' + dialIDGive + '_ducTextBox'),
        mainDiv = document.getElementById('ctl00_cphMainContent_ctl11_Duc' + dialIDGive + '_ducWrapper'),
        addToCart = document.getElementById('ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonFinish'),
        newdiv1 = document.createElement('div'),
        newdiv2 = document.createElement('div'),
        tooltip = document.getElementById('ctl00_cphMainContent_ctl11_Duc' + dialIDGive + '_LblDescription');
    lblspecialInstructions.style.display = 'none';
    //txtspecialInstructions.style.display = 'none';
    //tooltip.style.display = 'none';
    newdiv2.setAttribute("display", "inline-block");
    addToCart.setAttribute("onclick", "f1();");
    newdiv1.innerHTML = 'Please select your cost center <span style=" color:red;">(Required)</span>: <select id="costCenterSelect" onchange="showCheckout();"><option></option><option>10-81-700745 (Westminster Place-ADMIN)</option><option>10-87-700745 (Westminster Place-MKTG)</option><option>12-84-700745 (Central Office-OFFICE OF  PRESIDENT)</option><option>12-85-700745 (Central Office-HR)</option><option>12-86-700745 (Central Office-FINANCE)</option><option>12-89-700745 (Central Office-COMMUNICATIONS)</option><option>12-90-700745 (Central Office-PURCHASING)</option><option>13-88-700745 (Foundation)</option><option>14-81-700745 (Woodside Place-ADMIN)</option><option>14-81-700745 (Woodwell)</option><option>15-87-700745 (Woodside Place-MKTG)</option><option>16-54-700745 (Dietary Department)</option><option>16-58-700745 (Willows)</option><option>16-81-700745 (Willows-ADMIN)</option><option>16-87-700745 (Willows-MKTG)</option><option>17-81-700745 (SeniorCare Network)</option><option>20-81-700745 (Southminster Place-ADMIN)</option><option>20-87-700745 (Southminster Place-MKTG)</option><option>23-32-700745 (Southmont-Rehab)</option><option>23-53-700745 (Southmont Social Services)</option><option>23-81-700745 (Southmont-ADMIN)</option><option>23-85-700745 (Southmont-HR)</option><option>23-86-700745 (Washington - FINANCE)</option><option>23-87-700745 (Southmont-MKTG)</option><option>24-81-700745 (Erie Corporate-ADMIN)</option><option>24-87-700745 (Erie Corporate-MKTG)</option><option>25-81-700745 (Erie Marketing & Fundraising-ADMIN)</option><option>25-87-700745 (Erie Marketing & Fundraising-MKTG)</option><option>25-88-700745 (Erie Marketing & Fundraising-DEVELOPMENT)</option><option>26-81-700745 (Erie/Elmwood Gardens-ADMIN)</option><option>26-87-700745 (Erie/Elmwood Gardens-MKTG)</option><option>27-81-700745 (Oil City/Oakwood Heights-ADMIN)</option><option>27-87-700745 (Oil City/Oakwood Heights-MKTG)</option><option>28-81-700745 (Erie/Manchester Commons-ADMIN)</option><option>28-87-700745 (Erie/Manchester Commons-MKTG)</option><option>41-81-700745 (Longwood at Home-ADMIN)</option><option>41-87-700745 (Longwood at Home-MKTG)</option><option>50-81-700745 (Longwood at Oakmont-ADMIN)</option><option>50-87-700745 (Longwood at Oakmont-MKTG)</option><option>52-17-700745 (SeniorCare at Home - Home Health)</option><option>52-81-700745 (SeniorCare at Home-ADMIN)</option><option>55-81-700745 (Shenango on the Green-ADMIN)</option><option>55-87-700745 (Shenango on the Green-MKTG)</option><option>55-88-700745 (Shenango on the Green-DEVELOPMENT)</option></select>';
    newdiv2.innerHTML = '<br>Special Instructions: <textarea id="specialInstructionsNew" class="formfield"  rows="7" cols="33" style="display:inline-block; float:right; margin-left:10px;">';
    mainDiv.append(newdiv1);
    mainDiv.append(newdiv2);
    addToCart.style.display = 'none';
});

function showCheckout() {
    "use strict";
    var checkoutButton = document.getElementById('ctl00_cphMainContentFooter_WizardStepsNextPrev1_ButtonFinish');
    checkoutButton.style.display = 'block';
}

function f1() {
    "use strict";
    var dialIDGet = document.getElementById('iNeedThisDialNumber'),
        dialIDGive = dialIDGet.innerHTML,
        ccResult = document.getElementById('costCenterSelect'),
        txtResult = document.getElementById('specialInstructionsNew');
    if (txtResult.value > -1) {
        $('#ctl00_cphMainContent_ctl11_Duc' + dialIDGive + '_StringLongTextBox').val($('#ctl00_cphMainContent_ctl11_Duc' + dialIDGive + '_StringLongTextBox')).val(ccResult.value);
    } else {
        $('#ctl00_cphMainContent_ctl11_Duc' + dialIDGive + '_StringLongTextBox').val($('#ctl00_cphMainContent_ctl11_Duc' + dialIDGive + '_StringLongTextBox')).val(ccResult.value + " | " + txtResult.value);
    }
}