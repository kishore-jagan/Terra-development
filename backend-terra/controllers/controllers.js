const { json } = require('stream/consumers');
const { sql } = require('../db');
const bcrypt = require('bcrypt');
const axios = require('axios');
 
 
 
//get all sensor data
const getSensors = async (req, res) => {
    const { fromDate, toDate } = req.query;
 
    // Validate the presence of both parameters
    if (!fromDate || !toDate) {
        return res.status(400).json({ message: 'fromDate and toDate are required.' });
    }
 
    try {
        console.log('Received fromDate:', fromDate);
        console.log('Received toDate:', toDate);
 
        // Define your queries for both tables
        const querySensorsData = `
            SELECT *
            FROM sensorsData
            WHERE Date >= @fromDate AND Date <= @toDate
        `;
 
        const queryCWPRSData = `
            SELECT *
            FROM cwprs2
            WHERE Date >= @fromDate AND Date <= @toDate
        `;
 
        const request = new sql.Request();
        request.input('fromDate', sql.DateTime, new Date(fromDate));
        request.input('toDate', sql.DateTime, new Date(toDate));
 
        // Log the parsed dates
        console.log('Parsed fromDate:', new Date(fromDate));
        console.log('Parsed toDate:', new Date(toDate));
 
        // Execute the first query for sensorsData
        const resultSensorsData = await request.query(querySensorsData);
        const data1 = resultSensorsData.recordset.reverse(); // Fetching and reversing order
 
        // Execute the second query for cwprs2
        const resultCWPRSData = await request.query(queryCWPRSData);
        const data2 = resultCWPRSData.recordset.reverse(); // Fetching and reversing order
 
        // Structure the response as required
        const response = {
            buoy1: data1,
            buoy2: data2
        };
 
        // Return the structured response
        res.json(response);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send(err);
    }
};
 
 
module.exports = {
    // addRole,
    // getUsers,
    // registerUser,    
    // loginUser,
    // saveSensorData,
    getSensors,
    // getRoles,
    // getdesignation,
    // adddesignation,
    // deleteRole,
    // DeleteDesignation,
    // test,
    // saveSensorData2,
    // updateConfigs,
    // getconfigs,
    // updateStationConfig,
    // getStationconfigs
};