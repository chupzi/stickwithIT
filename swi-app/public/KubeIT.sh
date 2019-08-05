#USAGE: Build MiniKube Cluster with Front End React App
#Reference: https://kubernetes.io/docs/tutorials/stateless-application/guestbook/#set-up-and-expose-the-guestbook-frontend

#!/bin/bash


#Build Cluster
minikube start

#Cluser Information 
kubectl cluster-info

#Dashboarding
minikube dashboard

#Create Deployment

kubectl create -f /Users/pwalters/VMWARE/swi/stickwithIT/swi-app/frontend-deployment.yml
#Create Service
kubectl create -f /Users/pwalters/VMWARE/swi/stickwithIT/swi-app/frontend-service.yml

#Gather IP Address
minikube service frontend --url

