package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.LoadHTMLGlob("templates/*")
	router.Static("/assets", "./assets")


	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "main.tmpl", map[string]interface{}{
		})
	})
	router.Run(":8080")
}
