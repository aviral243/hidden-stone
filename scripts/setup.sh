#!/bin/bash

##################
## Setup Script ##
#################

sudo cp ../schema/test.sql /tmp/test.sql
#creates a psql user
sudo -u postgres -i psql -c "create user hiddenstone with password '__ENTER YOUR PASSWORD HERE__';"  &> /dev/null #chcnage the password
if [ $? -eq 0 ]; then
    echo "User 'hiddenstone' created"
else
    echo "Error"
fi

sudo -u postgres psql -c "create database ufound;"
if [ $? -eq 0 ]; then
    echo "Database 'ufound' created"
else
    echo "Error : Database could not be created"
fi

sudo -u postgres psql -c "grant all privileges on database ufound to hiddenstone"

if [ $? -eq 0 ]; then
    echo "Permissions granted successfully"
else
    echo "Error : Permissions not granted on the database"
fi

sudo -u postgres -i pg_dump ufound < /tmp/test.sql &> /dev/null

if [ $? -eq 0 ]; then
    echo "Database imported successfully"
else
    echo "Error : Database not imported"
fi


