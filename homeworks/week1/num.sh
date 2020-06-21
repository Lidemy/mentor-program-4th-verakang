#!/bin/bash

i=1
j=$1

while [ $i -le $j ]

do

  touch "$i.js"

  i=`expr $i + 1`

done
