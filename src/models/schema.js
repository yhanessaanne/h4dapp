export const schema = {
    "models": {
        "Serviceman": {
            "name": "Serviceman",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "rank": {
                    "name": "rank",
                    "isArray": false,
                    "type": {
                        "enum": "RankEum"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "last": {
                    "name": "last",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "first": {
                    "name": "first",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "position": {
                    "name": "position",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "afsc": {
                    "name": "afsc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Servicemen",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "RankEum": {
            "name": "RankEum",
            "values": [
                "AB",
                "AMN",
                "A1C",
                "SRA",
                "SSGT",
                "TSGT",
                "MSGT",
                "SMSGT",
                "CMSGT",
                "CCM",
                "CMSAF",
                "SNDLT",
                "FSTLT",
                "MAJ",
                "LTCO",
                "COL",
                "BRIG",
                "MAJG",
                "LTGE",
                "GEN",
                "GAF"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.2.0",
    "version": "4e2318e6d9258b1b8e488cd4460154ba"
};