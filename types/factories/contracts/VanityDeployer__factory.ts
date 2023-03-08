/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  VanityDeployer,
  VanityDeployerInterface,
} from "../../contracts/VanityDeployer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "proxy",
        type: "bool",
      },
    ],
    name: "DeployedContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "code",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "deployContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "code",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "initializer",
        type: "bytes",
      },
    ],
    name: "deployContractAndInitialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "code",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b506080516112e661004c600039600081816102eb015281816103860152818161048d01528181610523015261061e01526112e66000f3fe6080604052600436106100b15760003560e01c80638da5cb5b11610069578063c4d66de81161004e578063c4d66de81461021c578063d8dba1071461023c578063f2fde38b1461025c57600080fd5b80638da5cb5b1461014857806394ca2cb51461017a57600080fd5b80634f1ef2861161009a5780634f1ef286146100f857806352d1902d1461010b578063715018a61461013357600080fd5b80632bd7910b146100b65780633659cfe6146100d8575b600080fd5b3480156100c257600080fd5b506100d66100d13660046110c6565b61027c565b005b3480156100e457600080fd5b506100d66100f3366004611127565b6102e1565b6100d6610106366004611142565b610483565b34801561011757600080fd5b50610120610611565b6040519081526020015b60405180910390f35b34801561013f57600080fd5b506100d66106d6565b34801561015457600080fd5b506033546001600160a01b03165b6040516001600160a01b03909116815260200161012a565b34801561018657600080fd5b506101626101953660046110c6565b8151602092830120604080517fff00000000000000000000000000000000000000000000000000000000000000818601523060601b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660218201526035810193909352605580840192909252805180840390920182526075909201909152805191012090565b34801561022857600080fd5b506100d6610237366004611127565b6106ea565b34801561024857600080fd5b506100d6610257366004611190565b610831565b34801561026857600080fd5b506100d6610277366004611127565b61096b565b6102846109f8565b6000818351602085016000f59050803b61029d57600080fd5b604051600081526001600160a01b038216907f06890df1779f98131511f0bd2e8b6fd88979ac5b2532e1a3d526942d01f33c7a9060200160405180910390a2505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036103845760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166103df7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b03161461045b5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161037b565b61046481610a52565b6040805160008082526020820190925261048091839190610a5a565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036105215760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c0000000000000000000000000000000000000000606482015260840161037b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661057c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146105f85760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f78790000000000000000000000000000000000000000606482015260840161037b565b61060182610a52565b61060d82826001610a5a565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106b15760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000606482015260840161037b565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6106de6109f8565b6106e86000610bff565b565b600054610100900460ff161580801561070a5750600054600160ff909116105b806107245750303b158015610724575060005460ff166001145b6107965760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161037b565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580156107d7576000805461ff0019166101001790555b6107df610c69565b6107e88261096b565b801561060d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6108396109f8565b6000828451602086016000f59050803b61085257600080fd5b6000816001600160a01b03168360405161086c9190611221565b6000604051808303816000865af19150503d80600081146108a9576040519150601f19603f3d011682016040523d82523d6000602084013e6108ae565b606091505b50509050806109255760405162461bcd60e51b815260206004820152602960248201527f4465706c6f7965723a3a20436f6e747261637420696e697469616c697a61746960448201527f6f6e206661696c65640000000000000000000000000000000000000000000000606482015260840161037b565b604051600181526001600160a01b038316907f06890df1779f98131511f0bd2e8b6fd88979ac5b2532e1a3d526942d01f33c7a9060200160405180910390a25050505050565b6109736109f8565b6001600160a01b0381166109ef5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161037b565b61048081610bff565b6033546001600160a01b031633146106e85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161037b565b6104806109f8565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610a9257610a8d83610cee565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610aec575060408051601f3d908101601f19168201909252610ae99181019061123d565b60015b610b5e5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f742055555053000000000000000000000000000000000000606482015260840161037b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114610bf35760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c65555549440000000000000000000000000000000000000000000000606482015260840161037b565b50610a8d838383610dc4565b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610ce65760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161037b565b6106e8610def565b6001600160a01b0381163b610d6b5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161037b565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b610dcd83610e75565b600082511180610dda5750805b15610a8d57610de98383610eb5565b50505050565b600054610100900460ff16610e6c5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e67000000000000000000000000000000000000000000606482015260840161037b565b6106e833610bff565b610e7e81610cee565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b610f345760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e74726163740000000000000000000000000000000000000000000000000000606482015260840161037b565b600080846001600160a01b031684604051610f4f9190611221565b600060405180830381855af49150503d8060008114610f8a576040519150601f19603f3d011682016040523d82523d6000602084013e610f8f565b606091505b5091509150610fb7828260405180606001604052806027815260200161128a60279139610fc0565b95945050505050565b60608315610fcf575081610fd9565b610fd98383610fe0565b9392505050565b815115610ff05781518083602001fd5b8060405162461bcd60e51b815260040161037b9190611256565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261104a57600080fd5b813567ffffffffffffffff808211156110655761106561100a565b604051601f8301601f19908116603f0116810190828211818310171561108d5761108d61100a565b816040528381528660208588010111156110a657600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156110d957600080fd5b823567ffffffffffffffff8111156110f057600080fd5b6110fc85828601611039565b95602094909401359450505050565b80356001600160a01b038116811461112257600080fd5b919050565b60006020828403121561113957600080fd5b610fd98261110b565b6000806040838503121561115557600080fd5b61115e8361110b565b9150602083013567ffffffffffffffff81111561117a57600080fd5b61118685828601611039565b9150509250929050565b6000806000606084860312156111a557600080fd5b833567ffffffffffffffff808211156111bd57600080fd5b6111c987838801611039565b94506020860135935060408601359150808211156111e657600080fd5b506111f386828701611039565b9150509250925092565b60005b83811015611218578181015183820152602001611200565b50506000910152565b600082516112338184602087016111fd565b9190910192915050565b60006020828403121561124f57600080fd5b5051919050565b60208152600082518060208401526112758160408501602087016111fd565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220093a27198b1050a825847a0132d9ade354980bb31a12c746a78404850fa4268f64736f6c63430008120033";

type VanityDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VanityDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VanityDeployer__factory extends ContractFactory {
  constructor(...args: VanityDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VanityDeployer> {
    return super.deploy(overrides || {}) as Promise<VanityDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VanityDeployer {
    return super.attach(address) as VanityDeployer;
  }
  override connect(signer: Signer): VanityDeployer__factory {
    return super.connect(signer) as VanityDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VanityDeployerInterface {
    return new utils.Interface(_abi) as VanityDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VanityDeployer {
    return new Contract(address, _abi, signerOrProvider) as VanityDeployer;
  }
}
