use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::{decode,encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;


#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String{
    log(&"Starting grayscale".into());
    
    let base64_to_vector=decode(&encoded_file).unwrap();
    log(&"Image decoded".into());
    
    let mut image=load_from_memory(&base64_to_vector).unwrap();
    log(&"Image loaded".into());

    image= image.grayscale();
    log(&"Grayscale applied".into());

    let mut buffer=vec![];
    image.write_to(&mut buffer, Png).unwrap();
    log(&"Image written".into());

    let encoded_string =encode(&buffer);
    let data_url=format!("data:image/png;base64,{}",encoded_string);

    return data_url;
}