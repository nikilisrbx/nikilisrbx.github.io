let app_launch = "roblox://placeId=142823291"
let web_launch = "https://www.roblox.com/games/start?placeId=142823291"
let home_page = "https://nikilisrbx.com"

function launch_app(){
    window.location.href = app_launch;
}

function launch_from_website(){
    window.location.href = web_launch;
}

function launch_game(){
    window.location.href = app_launch;
    setTimeout(launch_from_website,50);
}