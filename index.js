// fetch
const getInfo = async () => {
    //fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object.
    //If the request fails due to some network problems, the promise is rejected.

    const request = new Request("/about.json");

    const response = await fetch(request);

    const cvObj = await response.json();
    // console.log(cvObj);

    return cvObj;

}

const populateCv = (cvObj) => {
let employmentHtml = "";

cvObj.employment.forEach(element => {
    const listItem = `
    <li> 
        <h4>${element.time}</h4> 
        <p>
        <span >${element.jobTitle}</span>
        <span>${element.location}</span><br>
        ${element.text}
        </p>
    </li>`;

    employmentHtml += listItem
    //console.log(cvObj.employment);

});
document.getElementById("employmentList").innerHTML = employmentHtml;

let edcuationHtml = "";
cvObj.education.forEach(element => {
    const listItem = ` <li>${element}</li>`;

    edcuationHtml += listItem
    //console.log(cvObj.education);

});
document.getElementById("educationList").innerHTML = edcuationHtml;

let internshipsHtml = "";
cvObj.internships.forEach(element => {
    let listItem = ` <li>${element.text}</li>`;
    listItem = listItem.replace("#companyName", `<span>${element.companyName}</span>`)

    internshipsHtml += listItem
    console.log(cvObj.education);

});
document.getElementById("internshipsList").innerHTML = internshipsHtml;

}

const cvObj = await getInfo();
populateCv(cvObj);

