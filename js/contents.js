/**
 * Yeah I know that this code is not the best way of doing it, but it works for now. That's what matters 
 * very simple js
*/

var contents = [
    // chapter 1
    // if you want to create another chaper, create another array after the comma
    [
        "Getting Started",
        "Introduction",
        "Creating new pages",
    ],
    [
        "Example chapter",
        "Example subcontent 1",
        "Example subcontent 2",
        "Example subcontent 3",
    ]
    
];

var contentsLinks = [
    [
        "articles/getting-started.html",
        "articles/getting-started.html#introduction",
        "articles/getting-started.html#creating-pages",
    ],
    [
        "articles/example-page.html",
        "#",
        "#",
        "#",
    ]

];


for (let i = 0; i < contents.length; i++) {
    for (let content = 0; content < contents[i].length; content++) {

        if (!contentsLinks[i][content])
            contentsLinks[i][content] = "#";
        
        if (content == 0) {
            document.getElementById("contentsarray").innerHTML +=
                `<li><a href='${contentsLinks[i][content]}'> ${(i + 1)}.${content} ${(contents[i][content])}</a></li>`;
            
        } else if (content != 0) {
            document.getElementById("contentsarray").innerHTML +=
                `<ul><li><a href='${contentsLinks[i][content]}'> ${(i + 1)}.${content} ${contents[i][content]}</a></li></ul>`;
        }
        
        
    }
}

