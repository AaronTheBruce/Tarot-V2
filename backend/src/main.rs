#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

use rocket_contrib::json::Json;
use serde::{Serialize};


#[derive(Serialize)]
struct Message {
    message: String
}

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/message")]
fn get_message() -> Json<Message> {
    Json(Message { message: "Hello from the microservice!".to_string() })
}

fn main() {
    rocket::ignite()
        .mount("/", routes![index, get_message])
        .launch();
}
