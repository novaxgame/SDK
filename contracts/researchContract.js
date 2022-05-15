var ResearchContractAddress = "0xDF08d07d7fe8591C4a221912DB393aa00c196CA3";
var ResearchContractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "researchId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "planetNo",
				"type": "uint256"
			}
		],
		"name": "makeResearch",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "researchId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "planetNo",
				"type": "uint256"
			}
		],
		"name": "isResearchDone",
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
				"name": "planetNo",
				"type": "uint256"
			}
		],
		"name": "listOfResearchesDone",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];