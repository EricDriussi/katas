package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSum(t *testing.T) {
	assert.Equal(t, sum(2, 3), 5)
}
