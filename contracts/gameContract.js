var GameContractAddress = "0xB328717dD3A928d9c4aA0483d6226517A13e3dCF";
var GameContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "tResources",
				"type": "uint256[]"
			}
		],
		"name": "burnToken",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "troopIds",
				"type": "uint256[]"
			}
		],
		"name": "burnTroops",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "b",
				"type": "string"
			}
		],
		"name": "compareStrings",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "soldierIds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "spaceshipIds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "planetNo",
				"type": "uint256"
			}
		],
		"name": "completeBossFight",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "soldierIds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "spaceshipIds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "planetNo",
				"type": "uint256"
			}
		],
		"name": "completeMission",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "troopId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "planetNo",
				"type": "uint256"
			}
		],
		"name": "generateTroop",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPvPFlag",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "resourceIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "planetNo",
				"type": "uint256"
			}
		],
		"name": "getResourceAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStats",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "harvestAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "structureIds",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "planetIds",
				"type": "uint256[]"
			}
		],
		"name": "levelUpAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "resourceIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "mintToken",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "planetNo",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "soldierIds",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "spaceshipIds",
				"type": "uint256[]"
			}
		],
		"name": "placeTroop",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "resourceIndex",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "resourceKey",
				"type": "string"
			}
		],
		"name": "resourceInfoForKey",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "flag",
				"type": "bool"
			}
		],
		"name": "setPvPFlag",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "structureIds",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "planetIds",
				"type": "uint256[]"
			}
		],
		"name": "totalCostOfLevelup",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "totalResourceOfPlanets",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "resourceIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "planetNo",
				"type": "uint256"
			}
		],
		"name": "withdrawResource",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];