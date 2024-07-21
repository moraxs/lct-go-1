package main

import (
    "embed"
    "net/http"
    "github.com/webview/webview"
)

//go:embed dist/*
var content embed.FS

func main() {
    go func() {
        http.Handle("/", http.FileServer(http.FS(content)))
        http.ListenAndServe(":8080", nil)
    }()

    debug := true
    w := webview.New(debug)
    defer w.Destroy()
    w.SetTitle("My Vue App")
    w.SetSize(800, 600, webview.HintNone)
    w.Navigate("http://localhost:8080")
    w.Run()
}
