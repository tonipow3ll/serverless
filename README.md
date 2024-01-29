# Serverless
a small application that queries a relational database and returns location data based on the parameter passed into the query. Data is sorted by 'Estimated Population' in Descending order. 

Accepted parameters are 'Zipcode' or 'City'. 

# Examples

`https://awsGeneratedEndpoint/search/<your search query here. ex: charlotte, char, 2822, 030>`

searching:
`https://awsGeneratedEndpoint/search/bro`

returns:
``` 
[
    {
        "Zipcode": 18016,
        "ZipCodeType": "STANDARD",
        "City": "BROWNS MILLS",
        "State": "NJ",
        "LocationType": "PRIMARY",
        "Lat": null,
        "Long": null,
        "Location": "NA-US-NJ-BROWNSMILLS",
        "Decommisioned": null,
        "TaxReturnsFiled": null,
        "EstimatedPopulation": "6000",
        "TotalWages": null
    },
    {
        "Zipcode": 18015,
        "ZipCodeType": "STANDARD",
        "City": "BROWNS MILLS",
        "State": "NJ",
        "LocationType": "PRIMARY",
        "Lat": null,
        "Long": null,
        "Location": "NA-US-NJ-BROWNSMILLS",
        "Decommisioned": null,
        "TaxReturnsFiled": null,
        "EstimatedPopulation": "5000",
        "TotalWages": null
    }
]
```

*The location data provided is not intended to be accurate and is solely for testing purposes. Please be aware that the information generated may not reflect actual locations*

# Technologies Used
[AWS Lambda](https://docs.aws.amazon.com/lambda/)

[AWS RDS](https://aws.amazon.com/rds/)

[Serverless](https://www.serverless.com/)

[nodejs](https://nodejs.org/en)

[Express](https://expressjs.com/)





