let make_album = (name: string, title: string, tracks?:number) => {
    if(tracks){
        let obj = {
            name: name, title: title, tracks:tracks
        }
        return obj
    } else {
        let obj = {
            name: name, title: title,
        }
        return obj
    }
}

console.log(make_album("first", "No worries"));

console.log(make_album("second", "Judaa", 10));
