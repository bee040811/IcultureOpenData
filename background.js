var xhr = new XMLHttpRequest();
xhr.open("GET", "http://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1&keyword=2013", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
        console.log(resp);
        $("body").append(
            $("<table/>",{"class":"table table-hover"})
        );
        $("body table").append(
            $("<tr/>").append(
                $("<th/>").append(
                    "URL"
                ),
                $("<th/>").append(
                    "StartDate"
                ),
                $("<th/>").append(
                    "EndDate"
                )
            )
        );
        for(var i in resp) {
            $("body table").append(
                $("<tr/>").append(
                    $("<td/>").append(
                        $("<a/>",{"href":resp[i].sourceWebPromote}).append(
                            resp[i].title
                        )
                    ),
                    $("<td/>").append(
                        $("<p/>").append(
                            resp[i].startDate
                        )
                    ),
                    $("<td/>").append(
                        $("<p/>").append(
                            resp[i].endDate
                        )
                    )
                )
            );
        }
        $("a").click(function(e){
                var href = $(this).attr("href");
                chrome.tabs.create({url: href}, function(tab) {
                    })
                window.close(); // To close the popup.
            });
    }

}
xhr.send();
