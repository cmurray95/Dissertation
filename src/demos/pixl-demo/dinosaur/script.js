function connect(){
    // Initialize connect and clear REPL
    UART.write("\x03");
}

function jump() {
    UART.write("jump();\n");
}