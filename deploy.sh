#!/bin/sh  
sudo git pull origin master
cd /sbin
sudo nginx -s reload   
