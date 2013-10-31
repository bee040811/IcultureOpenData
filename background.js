var xhr = new XMLHttpRequest();
xhr.open("GET", "http://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=1&keyword=2013", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        var resp = JSON.parse(xhr.responseText);
        console.log(resp);
        for(var i in resp) {
            $("body").append(
                $("<div/>").append(
                    $("<a/>",{"href":resp[i].sourceWebPromote}).append(
                        i +". " + resp[i].title
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
