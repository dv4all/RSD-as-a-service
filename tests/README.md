# Research Software Directory (RSD) - PostgREST tests

This service can automatically be build and started with `docker-compose`. It does not work in conjunction with the `data-migration` service. It also assumes that the database is empty at the start.

The service runs its tests using the `newman` npm package. Postman can be used as a GUI for running and editing tests by importing the json file from this directory.

In order to use the collection on Postman, you need to set two (global) variables first:
* `jwt_secret` should have the same value as `PGRST_JWT_SECRET` (as is used by PostgREST)
* `backend_url` should have the value of the PostgREST url, currently `http://localhost:3500`