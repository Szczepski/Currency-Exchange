$(() => {

    const tab = $('#table');

    const tabBody = $('.table-body');
    const tabHead = $('.table-name');
    // let el2Ask;
    // let el1Bid;

    function preloadTableC() {


        const tabCUrl = 'http://api.nbp.pl/api/exchangerates/tables/c/'

        $.ajax({
            url: tabCUrl,
            type: 'GET',
            dataType: 'json'
        }).done(function(response) {

            let newTabNr = response[0].no;
            let newTabDate = response[0].effectiveDate;


        })


    }

    preloadTableC()














});
