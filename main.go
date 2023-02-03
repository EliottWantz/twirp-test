package main

import (
	"fmt"
	"net/http"

	"test/rpc/user"

	"github.com/rs/cors"
)

func main() {
	helloWorldServer := user.NewUserServiceServer(user.NewService())

	mux := http.NewServeMux()
	mux.Handle(helloWorldServer.PathPrefix(), helloWorldServer)

	corsHandler := cors.Default().Handler(mux)
	fmt.Println("Listening on :8080, prefix:", helloWorldServer.PathPrefix())
	http.ListenAndServe(":8080", corsHandler)
}
