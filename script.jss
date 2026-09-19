/* ============================================
   CUSTOMER SHOPPING PATTERN SEGMENTATION
   Frontend demonstration
   ============================================ */


/* ===============================
   GET HTML ELEMENTS
   =============================== */

const income = document.getElementById("income");

const frequency =
    document.getElementById("frequency");

const orderValue =
    document.getElementById("orderValue");

const loyalty =
    document.getElementById("loyalty");


const incomeValue =
    document.getElementById("incomeValue");

const frequencyValue =
    document.getElementById("frequencyValue");

const orderValueDisplay =
    document.getElementById("orderValueDisplay");

const loyaltyValue =
    document.getElementById("loyaltyValue");


const predictionBadge =
    document.getElementById("predictionBadge");

const predictionTitle =
    document.getElementById("predictionTitle");

const predictionDescription =
    document.getElementById("predictionDescription");

const confidence =
    document.getElementById("confidence");

const confidenceBar =
    document.getElementById("confidenceBar");


const summaryIncome =
    document.getElementById("summaryIncome");

const summaryFrequency =
    document.getElementById("summaryFrequency");

const summaryOrder =
    document.getElementById("summaryOrder");

const summaryLoyalty =
    document.getElementById("summaryLoyalty");



/* ===============================
   UPDATE SLIDER VALUES
   =============================== */

income.addEventListener("input", function () {

    incomeValue.textContent =
        "$" +
        Number(this.value).toLocaleString();

    analyzeCustomer();

});


frequency.addEventListener("input", function () {

    frequencyValue.textContent =
        this.value;

    analyzeCustomer();

});


orderValue.addEventListener("input", function () {

    orderValueDisplay.textContent =
        "$" +
        Number(this.value).toLocaleString();

    analyzeCustomer();

});


loyalty.addEventListener("input", function () {

    loyaltyValue.textContent =
        this.value + " yrs";

    analyzeCustomer();

});



/* ===============================
   CUSTOMER ANALYSIS
   =============================== */

function analyzeCustomer() {

    const incomeAmount =
        Number(income.value);

    const purchaseFrequency =
        Number(frequency.value);

    const averageOrder =
        Number(orderValue.value);

    const loyaltyYears =
        Number(loyalty.value);



    /*
        Frontend demonstration score.

        IMPORTANT:
        This is not the actual K-Means
        Scikit-learn model.

        When you connect your Python
        backend, replace this logic with
        an API request to your trained
        K-Means model.
    */

    const incomeScore =
        (incomeAmount / 150000) * 30;


    const frequencyScore =
        (purchaseFrequency / 30) * 25;


    const orderScore =
        (averageOrder / 1000) * 30;


    const loyaltyScore =
        (loyaltyYears / 15) * 15;


    const totalScore =
        incomeScore +
        frequencyScore +
        orderScore +
        loyaltyScore;



    let segment;

    let description;

    let cssClass;



    /* ===============================
       SEGMENT LOGIC
       =============================== */

    if (totalScore >= 68) {

        segment =
            "Premium Shopper";

        description =
            "This customer profile shows strong spending power, frequent purchases and high customer value.";

        cssClass =
            "premium";

    }

    else if (totalScore >= 48) {

        segment =
            "Regular Buyer";

        description =
            "This customer profile indicates consistent shopping activity with moderate customer value.";

        cssClass =
            "regular";

    }

    else if (totalScore >= 28) {

        segment =
            "Occasional Buyer";

        description =
            "This customer profile indicates selective purchases and moderate shopping activity.";

        cssClass =
            "occasional";

    }

    else {

        segment =
            "Low Activity";

        description =
            "This customer profile shows relatively limited shopping activity and lower spending.";

        cssClass =
            "low";

    }



    /* ===============================
       CONFIDENCE DEMONSTRATION
       =============================== */

    let strength =
        Math.round(

            Math.min(

                94,

                Math.max(

                    55,

                    totalScore + 22

                )

            )

        );



    /* ===============================
       UPDATE PREDICTION
       =============================== */

    predictionBadge.textContent =
        segment;


    predictionBadge.className =
        "prediction-badge " +
        cssClass;


    predictionTitle.textContent =
        segment;


    predictionDescription.textContent =
        description;


    confidence.textContent =
        strength + "%";


    confidenceBar.style.width =
        strength + "%";



    /* ===============================
       UPDATE SUMMARY
       =============================== */

    summaryIncome.textContent =
        "$" +
        Math.round(
            incomeAmount / 1000
        ) +
        "k";


    summaryFrequency.textContent =
        purchaseFrequency +
        "/mo";


    summaryOrder.textContent =
        "$" +
        averageOrder;


    summaryLoyalty.textContent =
        loyaltyYears +
        " yrs";

}



/* ===============================
   SMOOTH SCROLL
   =============================== */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);


    if (section) {

        section.scrollIntoView({

            behavior: "smooth"

        });

    }

}



/* ===============================
   INITIAL PREDICTION
   =============================== */

analyzeCustomer();
