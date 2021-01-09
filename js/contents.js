/**
 * Yeah I know that this code is not the best way of doing it, but it works for now. That's what matters 
*/

var contents = [
    [
        "Getting Started with bla bla bla",
            "Introduction",
            "What is this?",
    ],
    
];

var contentsLinks = [
    [
        "https://reddit.com/u/Mago_Malvado",
        "#",
        "#"
    ]
]



for (let i = 0; i < contents.length; i++) {
    for (let content = 0; content < contents[i].length; content++) {
        
        if (content == 0 && contentsLinks[i][content]) {
            
            document.getElementById("contentsarray").innerHTML +=
                `<li><a href='${contentsLinks[i][content]}'> ${(i + 1)}.${content} ${(contents[i][content])}</a></li>`; 
            
        } else if (content != 0 && contentsLinks[i][content]) {
            document.getElementById("contentsarray").innerHTML +=
                `<ul><li><a href='${contentsLinks[i][content]}'> ${(i + 1)}.${content} ${contents[i][content]}</a></li></ul>`;
            
        }
        
    }
}

