new Vue({
    el: '#app',
    data: {
        isConnect: false,
        data: {
            User: [
                {
                    name: "PG-LPS3",
                    victory: "32 victoires",
                    messages: [
                        "Motivé pour une partie",
                        "OK",
                        "Pas tout de suite, je taffe mon code",
                    ]
                },
                {
                    name: "JP-LPS3",
                    victory: "52 victoires",
                    messages: [
                        "On fait une partie",
                        "Yes",
                        "Pas tout de suite, je taffe mon code",
                    ]
                },
                {
                    name: "CT-LPS3",
                    victory: "25 victoires",
                    messages: [
                        "On joue",
                        "En avant",
                        "Pas tout de suite,Je mange un chocolatine ",
                    ]
                },
                {
                    name: "LP-LPS3",
                    victory: "18 victoires",
                    messages: [
                        "Une partie ?",
                        "C'est parti",
                        "Pas tout de suite, je taffe mon code",
                    ]
                },
                {
                    name: "DS-LPS3",
                    victory: "47 victoires",
                    messages: [
                        "Motivé pour une partie",
                        "Allez 5 mins je viens de battre Cedric",
                        "Pas tout de suite, je taffe mon code",
                    ]
                },

            ]
        }
    },
})

// async function getHomePage() {
//     const fetchedData = fetch('http://private-bbfc8-nosqldemo.apiary-mock.com/home')
//     const data = await fetchedData
//     const clonedData = data.clone()
//     const jsonData = await clonedData.json()
//     return jsonData
// }
// const title = document.getElementById('title')
// const content = document.getElementById('content')

// getHomePage()
//     .then(json => {
//         var newTitle = document.createTextNode(json.home.title);
//         console.log(json.home)
//         var newContent = document.createTextNode(json.home.content);
//         title.appendChild(newTitle);
//         content.appendChild(newContent);
//     })