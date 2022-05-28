import { typesBundleForPolkadot } from "@acala-network/type-definitions";

export const astar_type_definitions = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        Keys: "AccountId",
        Address: "MultiAddress",
        LookupSource: "MultiAddress",
        AmountOf: "Amount",
        Amount: "i128",
        SmartContract: {
          _enum: {
            Evm: "H160",
            Wasm: "AccountId",
          },
        },
        EraStakingPoints: {
          total: "Balance",
          stakers: "BTreeMap<AccountId, Balance>",
          formerStakedEra: "EraIndex",
          claimedRewards: "Balance",
        },
        EraRewardAndStake: {
          rewards: "Balance",
          staked: "Balance",
        },
        EraIndex: "u32",
      },
    },
  ],
};
export const contextfree_type_definitions = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        ResourceId: "[u8; 32]",
        DepositNonce: "u64",
        ProposalStatus: {
          _enum: ["Initiated", "Approved", "Rejected"],
        },
        ProposalVotes: {
          votes_for: "Vec<AccountId>",
          votes_against: "Vec<AccountId>",
          status: "ProposalStatus",
        },
        BridgeTokenId: "U256",
        BridgeChainId: "u8",
        VestingPlan: {
          start_time: "u64",
          cliff_duration: "u64",
          total_duration: "u64",
          interval: "u64",
          initial_amount: "Balance",
          total_amount: "Balance",
          vesting_during_cliff: "bool",
        },
        ProposalId: "u32",
        ProjectId: "u32",
        ChainIndex: "u32",
        Protocol: {
          _enum: ["Solidity", "Substrate"],
        },
        Chain: {
          _protocol: "Protocol",
        },
        CrossChainAccount: {
          _enum: {
            Solidity: "H160",
            Substrate: "AccountId",
          },
        },
        IpfsHash: "Text",
        SolidityStrategy: {
          _enum: {
            ERC20Balance: "H160",
          },
        },
        SubstrateStrategy: {
          _enum: ["NativeBalance"],
        },
        Strategy: {
          _enum: {
            Solidity: "SolidityStrategy",
            Substrate: "SubstrateStrategy",
          },
        },
        Workspace: {
          _chain: "ChainIndex",
          strategies: "Vec<Strategy>",
        },
        UserGroup: {
          owner: "CrossChainAccount",
          admins: "Vec<CrossChainAccount>",
          maintainers: "Vec<CrossChainAccount>",
          proposers: "Option<Vec<CrossChainAccount>>",
        },
        Project: {
          usergroup: "UserGroup",
          data: "IpfsHash",
          workspaces: "Vec<Workspace>",
        },
        VotingFormat: {
          _enum: ["SingleChoice", "SplitVote"],
        },
        OptionIndex: "u8",
        PrivacyLevel: {
          _enum: {
            Opaque: "u8",
            Rank: "Null",
            Private: "Null",
            Public: "Null",
            Mixed: "Null",
          },
        },
        VotingPower: "U256",
        DAOProposalState: {
          finalized: "bool",
          snapshots: "Vec<Option<U256>>",
          blacklisted: "bool",
          votes: "Vec<VotingPower>",
          pub_voters: "Option<IpfsHash>",
          updates: "u32",
        },
        DAOProposal: {
          _author: "CrossChainAccount",
          _voting_format: "VotingFormat",
          _option_count: "OptionIndex",
          _data: "IpfsHash",
          _privacy: "PrivacyLevel",
          _start: "u64",
          _end: "u64",
          _frequency: "Option<u64>",
          _workspaces: "Vec<Workspace>",
          state: "DAOProposalState",
        },
        VoteUpdate: {
          project: "ProjectId",
          proposal: "ProposalId",
          votes: "Vec<VotingPower>",
          pub_voters: "Option<IpfsHash>",
        },
      },
    },
  ],
};
export const shiden_type_definitions = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        Keys: "AccountId",
        Address: "MultiAddress",
        LookupSource: "MultiAddress",
        AmountOf: "Amount",
        Amount: "i128",
        SmartContract: {
          _enum: {
            Evm: "H160",
            Wasm: "AccountId",
          },
        },
        EraStakingPoints: {
          total: "Balance",
          stakers: "BTreeMap<AccountId, Balance>",
          formerStakedEra: "EraIndex",
          claimedRewards: "Balance",
        },
        PalletDappsStakingEraStakingPoints: {
          total: "Balance",
          stakers: "BTreeMap<AccountId, Balance>",
          formerStakedEra: "EraIndex",
          claimedRewards: "Balance",
        },
        EraRewardAndStake: {
          rewards: "Balance",
          staked: "Balance",
        },
        PalletDappsStakingEraRewardAndStake: {
          rewards: "Balance",
          staked: "Balance",
        },
        EraIndex: "u32",
      },
    },
  ],
};
export const bifrost_types_definitions = {
  types: {
    CallOf: "Call",
    DispatchTime: {
      _enum: {
        At: "BlockNumber",
        After: "BlockNumber",
      },
    },
    ScheduleTaskIndex: "u32",
    DelayedOrigin: {
      delay: "BlockNumber",
      origin: "PalletsOrigin",
    },
    AuthorityOrigin: "DelayedOrigin",
    StorageValue: "Vec<u8>",
    GraduallyUpdate: {
      key: "StorageKey",
      targetValue: "StorageValue",
      perBlock: "StorageValue",
    },
    StorageKeyBytes: "Vec<u8>",
    StorageValueBytes: "Vec<u8>",
    RpcDataProviderId: "Text",
    DataProviderId: "u8",
    TimestampedValue: {
      value: "OracleValue",
      timestamp: "Moment",
    },
    TimestampedValueOf: "TimestampedValue",
    OrderedSet: "Vec<AccountId>",
    OrmlAccountData: {
      free: "Balance",
      reserved: "Balance",
      frozen: "Balance",
    },
    OrmlBalanceLock: {
      amount: "Balance",
      id: "LockIdentifier",
    },
    AuctionInfo: {
      bid: "Option<(AccountId, Balance)>",
      start: "BlockNumber",
      end: "Option<BlockNumber>",
    },
    DelayedDispatchTime: {
      _enum: {
        At: "BlockNumber",
        After: "BlockNumber",
      },
    },
    DispatchId: "u32",
    Price: "FixedU128",
    OrmlVestingSchedule: {
      start: "BlockNumber",
      period: "BlockNumber",
      periodCount: "u32",
      perPeriod: "Compact<Balance>",
    },
    VestingScheduleOf: "OrmlVestingSchedule",
    PoolInfo: {
      pool_id: "PoolId",
      keeper: "AccountId",
      investor: "Option<AccountId>",
      trading_pair: "(CurrencyId, CurrencyId)",
      duration: "BlockNumber",
      type: "PoolType",
      min_deposit_to_start: "Balance",
      after_block_to_start: "BlockNumber",
      deposit: "Balance",
      rewards: "BTreeMap<CurrencyId, RewardData>",
      update_b: "BlockNumber",
      state: "PoolState",
      block_startup: "Option<BlockNumber>",
      block_retired: "Option<BlockNumber>",
    },
    Share: "u128",
    OracleValue: "Price",
    BiddingOrderId: "u64",
    EraId: "u32",
    BiddingOrderUnit: {
      bidder_id: "AccountId",
      token_id: "AssetId",
      block_num: "BlockNumber",
      votes: "Balance",
      annual_roi: "Permill",
      validator: "AccountId",
    },
    BiddingOrderUnitOf: "BiddingOrderUnit",
    VersionId: "u32",
    PermissionName: "u64",
    PermissionLevel: {
      actor: "AccountName",
      permission: "PermissionName",
    },
    Action: {
      account: "AccountName",
      name: "ActionName",
      authorization: "Vec<PermissionLevel>",
      data: "Vec<u8>",
    },
    AccountName: "u64",
    Checksum256: "([u8;32])",
    ActionName: "u64",
    FlatMap: {
      map: "Vec<(ActionName, u64)>",
    },
    UnsignedInt: "u32",
    ActionReceipt: {
      receiver: "AccountName",
      act_digest: "Checksum256",
      global_sequence: "u64",
      recv_sequence: "u64",
      auth_sequence: "FlatMap<AccountName, u64>",
      code_sequence: "UnsignedInt",
      abi_sequence: "UnsignedInt",
    },
    BlockchainType: {
      _enum: ["BIFROST", "EOS", "IOST"],
    },
    Precision: "u32",
    BridgeAssetSymbol: {
      blockchain: "BlockchainType",
      symbol: "Vec<u8>",
      precision: "Precision",
    },
    PublicKey: {
      type_: "UnsignedInt",
      data: "[u8;33]",
    },
    ProducerKey: {
      producer_name: "AccountName",
      block_signing_key: "PublicKey",
    },
    ProducerSchedule: {
      version: "u32",
      producers: "Vec<ProducerKey>",
    },
    bridgeEosSignature: {
      type_: "UnsignedInt",
      data: "[u8;65]",
    },
    BlockTimestamp: "(u32)",
    Extension: "(u16, Vec<u8>)",
    BlockHeader: {
      timestamp: "BlockTimestamp",
      producer: "AccountName",
      confirmed: "u16",
      previous: "Checksum256",
      transaction_mroot: "Checksum256",
      action_mroot: "Checksum256",
      schedule_version: "u32",
      new_producers: "Option<ProducerSchedule>",
      header_extensions: "Vec<Extension>",
    },
    SignedBlockHeader: {
      block_header: "BlockHeader",
      producer_signature: "bridgeEosSignature",
    },
    Checksum256Array: "Vec<Checksum256>",
    IncrementalMerkle: {
      _node_count: "u64",
      _active_nodes: "Checksum256Array",
    },
    TxSig: {
      signature: "Vec<u8>",
      author: "AccountId",
    },
    MultiSig: {
      signatures: "Vec<TxSig>",
      threshold: "u8",
    },
    MultiSigTx: {
      chain_id: "Vec<u8>",
      raw_tx: "Vec<u8>",
      multi_sig: "MultiSig",
      action: "Action",
      from: "AccountId",
      asset_id: "AssetId",
    },
    Sent: {
      tx_id: "Vec<u8>",
      from: "AccountId",
      asset_id: "AssetId",
    },
    Succeeded: {
      tx_id: "Vec<u8>",
    },
    Failed: {
      tx_id: "Vec<u8>",
      reason: "Vec<u8>",
    },
    TxOut: {
      _enum: {
        Initialized: "MultiSigTx",
        Created: "MultiSigTx",
        SignComplete: "MultiSigTx",
        Sent: "Sent",
        Succeeded: "Succeeded",
        Failed: "Failed",
      },
    },
    TransactionStatus: {
      _enum: ["Initialized", "Created", "SignComplete", "Sent", "Succeeded", "Failed"],
    },
    ProducerAuthoritySchedule: {
      version: "u32",
      producers: "Vec<ProducerAuthority>",
    },
    ProducerAuthority: {
      producer_name: "ActionName",
      authority: "BlockSigningAuthority",
    },
    BlockSigningAuthority: "(UnsignedInt, BlockSigningAuthorityV0)",
    BlockSigningAuthorityV0: {
      threshold: "u32",
      keyWeights: "Vec<KeyWeight>",
    },
    KeyWeight: {
      key: "PublicKey",
      weight: "u16",
    },
    BancorPool: {
      currency_id: "CurrencyId",
      token_pool: "Balance",
      vstoken_pool: "Balance",
      token_ceiling: "Balance",
      token_base_supply: "Balance",
      vstoken_base_supply: "Balance",
    },
    IostAction: {
      contract: "Vec<u8>",
      action_name: "Vec<u8>",
      data: "Vec<u8>",
    },
    IostMultiSigTx: {
      chain_id: "i32",
      raw_tx: "Vec<u8>",
      multi_sig: "MultiSig",
      action: "IostAction",
      from: "AccountId",
      asset_id: "AssetId",
    },
    Processing: {
      tx_id: "Vec<u8>",
      multi_sig_tx: "IostMultiSigTx",
    },
    IostTxOut: {
      _enum: {
        Initial: "IostMultiSigTx",
        Generated: "IostMultiSigTx",
        Signed: "IostMultiSigTx",
        Processing: "Processing",
        Success: "Vec<u8>",
        Fail: "Failed",
      },
    },
    PalletBalanceOf: "Balance",
    NumberOrHex: {
      _enum: {
        Number: "u64",
        Hex: "U256",
      },
    },
    ExtraFeeName: {
      _enum: ["SalpContribute", "NoExtraFee"],
    },
    IsExtended: "bool",
    SystemPalletId: "PalletId",
    TrieIndex: "u32",
    FundInfo: {
      raised: "Balance",
      cap: "Balance",
      first_slot: "LeasePeriod",
      last_slot: "LeasePeriod",
      trie_index: "TrieIndex",
      status: "FundStatus",
    },
    RedeemStatus: "BalanceOf",
    FundStatus: {
      _enum: {
        Ongoing: 0,
        Retired: 1,
        Success: 2,
        Failed: 3,
        RefundWithdrew: 4,
        RedeemWithdrew: 5,
        End: 6,
      },
    },
    ContributionStatus: {
      _enum: ["Idle", "Refunded", "Unlocked", "Refunding", "Contributing"],
    },
    CrowdloanContributeCall: {
      _enum: {
        CrowdloanContribute: "ContributeCall",
      },
    },
    ContributeCall: {
      _enum: {
        Contribute: "Contribution",
      },
    },
    Contribution: {
      index: "ParaId",
      value: "BalanceOf",
      signature: "Option<MultiSignature>",
    },
    Withdraw: {
      who: "AccountIdOf",
      index: "ParaId",
    },
    WithdrawCall: {
      _enum: {
        Withdraw: "Withdraw",
      },
    },
    ParachainTransactProxyType: {
      _enum: {
        Primary: 0,
        Derived: 1,
      },
    },
    ParachainDerivedProxyAccountType: {
      _enum: {
        Salp: 0,
        Staking: 1,
      },
    },
    Keys: "SessionKeys1",
    ParachainTransactType: {
      _enum: {
        Xcm: 0,
        Proxy: 1,
      },
    },
    RpcContributionStatus: {
      _enum: {
        Idle: 0,
        Contributing: 1,
        Refunded: 2,
        Unlocked: 3,
        Redeemed: 4,
      },
    },
    RewardRecord: {
      account_id: "AccountId",
      record_amount: "Balance",
    },
    PoolId: "u32",
    SwapFee: "u128",
    PoolDetails: {
      owner: "AccountId",
      swap_fee_rate: "SwapFee",
      active: "bool",
    },
    PoolWeight: "Balance",
    PoolToken: "u128",
    PoolCreateTokenDetails: {
      token_id: "AssetId",
      token_balance: "Balance",
      token_weight: "PoolWeight",
    },
    MaxLocksOf: "u32",
    BifrostVestingInfo: {
      locked: "Balance",
      per_block: "Balance",
      starting_block: "BlockNumber",
    },
    OracleKey: "CurrencyId",
    BlockNumberFor: "BlockNumber",
    OrderId: "u64",
    OrderInfo: {
      owner: "AccountIdOf",
      vsbond: "CurrencyId",
      supply: "u128",
      remain: "u128",
      unit_price: "U64F64",
      order_id: "OrderId",
      order_state: "OrderState",
    },
    OrderState: {
      _enum: ["InTrade", "Revoked", "Clinchd"],
    },
    U64F64: "u128",
    ZenlinkAssetId: {
      chain_id: "u32",
      asset_type: "u8",
      asset_index: "u64",
    },
    ZenlinkAssetBalance: "u128",
    PairInfo: {
      asset0: "ZenlinkAssetId",
      asset1: "ZenlinkAssetId",
      account: "AccountId",
      totalLiquidity: "ZenlinkAssetBalance",
      holdingLiquidity: "ZenlinkAssetBalance",
      reserve0: "ZenlinkAssetBalance",
      reserve1: "ZenlinkAssetBalance",
      lpAssetId: "ZenlinkAssetId",
    },
    PairMetadata: {
      pair_account: "AccountId",
      target_supply: "ZenlinkAssetBalance",
    },
    BootstrapParamter: {
      min_contribution: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
      target_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
      accumulated_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
      end_block_number: "BlockNumber",
      pair_account: "AccountId",
    },
    PairStatus: {
      _enum: {
        Trading: "PairMetadata",
        Bootstrap: "BootstrapParamter",
        Disable: null,
      },
    },
    TokenSymbol: {
      _enum: {
        ASG: 0,
        BNC: 1,
        KUSD: 2,
        DOT: 3,
        KSM: 4,
        ETH: 5,
        KAR: 6,
        ZLK: 7,
      },
    },
    CurrencyId: {
      _enum: {
        Native: "TokenSymbol",
        VToken: "TokenSymbol",
        Token: "TokenSymbol",
        Stable: "TokenSymbol",
        VSToken: "TokenSymbol",
        VSBond: "(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)",
        LPToken: "(TokenSymbol, u8, TokenSymbol, u8)",
      },
    },
    CurrencyIdOf: "CurrencyId",
    TAssetBalance: "Balance",
    AmountOf: "Balance",
    StorageVersion: "Releases",
    ShareWeight: "Balance",
    Currency: "CurrencyIdOf",
    Amount: "AmountOf",
    TransferOriginType: {
      _enum: {
        FromSelf: 0,
        FromRelayChain: 1,
        FromSiblingParaChain: 2,
      },
    },
    PoolType: {
      _enum: {
        Mining: 0,
        Farming: 1,
        EBFarming: 2,
      },
    },
    PoolState: {
      _enum: {
        UnCharged: 0,
        Charged: 1,
        Ongoing: 2,
        Retired: 3,
        Dead: 4,
      },
    },
    DepositData: {
      deposit: "Balance",
      gain_avgs: "BTreeMap<CurrencyId, FixedU128>",
      update_b: "BlockNumber",
    },
    RewardData: {
      total: "Balance",
      per_block: "Balance",
      claimed: "Balance",
      gain_avg: "FixedU128",
    },
    AssetInstance: "AssetInstanceV1",
  },
  typesBundle: {
    spec: {
      bifrost: {
        rpc: {
          oracle: {
            getValue: {
              description: "Retrieves the oracle value for a given key.",
              params: [
                {
                  name: "providerId",
                  type: "RpcDataProviderId",
                },
                {
                  name: "key",
                  type: "OracleKey",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "Option<TimestampedValue>",
              isSubscription: false,
              jsonrpc: "oracle_getValue",
              method: "getValue",
              section: "oracle",
            },
            getAllValues: {
              description: "Retrieves all oracle values.",
              params: [
                {
                  name: "providerId",
                  type: "RpcDataProviderId",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "Vec<(OracleKey, Option<TimestampedValue>)>",
              isSubscription: false,
              jsonrpc: "oracle_getAllValues",
              method: "getAllValues",
              section: "oracle",
            },
          },
          flexibleFee: {
            getFeeTokenAndAmount: {
              description:
                "Get charging token type and amount in terms of flexible transaction fee.",
              params: [
                {
                  name: "who",
                  type: "AccountId",
                },
                {
                  name: "extrinsic",
                  type: "Bytes",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "(CurrencyId, NumberOrHex)",
              isSubscription: false,
              jsonrpc: "flexibleFee_getFeeTokenAndAmount",
              method: "getFeeTokenAndAmount",
              section: "flexibleFee",
            },
          },
          salp: {
            getContribution: {
              description: "salp getContribution",
              params: [
                {
                  name: "index",
                  type: "ParaId",
                },
                {
                  name: "who",
                  type: "AccountIdOf",
                },
              ],
              type: "(Balance, ContributionStatus)",
              isSubscription: false,
              jsonrpc: "salp_getContribution",
              method: "getContribution",
              section: "salp",
            },
          },
          vtokenMint: {
            getVtokenMintRate: {
              description: "Get current vtoken mint rate.",
              params: [
                {
                  name: "asset_id",
                  type: "CurrencyId",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "String",
              isSubscription: false,
              jsonrpc: "vtokenMint_getVtokenMintRate",
              method: "getVtokenMintRate",
              section: "vtokenMint",
            },
          },
          zenlinkProtocol: {
            getAllAssets: {
              description: "zenlinkProtocol getAllAssets",
              params: [
                {
                  name: "at",
                  type: "Hash",
                  isOptional: true,
                },
              ],
              type: "Vec<ZenlinkAssetId>",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getAllAssets",
              method: "getAllAssets",
              section: "zenlinkProtocol",
            },
            getBalance: {
              description: "zenlinkProtocol getBalance",
              params: [
                {
                  name: "asset_id",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "account",
                  type: "AccountId",
                },
                {
                  name: "at",
                  type: "Hash",
                  isOptional: true,
                },
              ],
              type: "String",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getBalance",
              method: "getBalance",
              section: "zenlinkProtocol",
            },
            getSovereignsInfo: {
              description: "Get the ownership of a certain currency for each parachain.",
              params: [
                {
                  name: "asset_id",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "(u32, AccountId, String)",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getSovereignsInfo",
              method: "getSovereignsInfo",
              section: "zenlinkProtocol",
            },
            getPairByAssetId: {
              description: "Get the detailed information of a particular exchange pair.",
              params: [
                {
                  name: "asset_0",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "asset_1",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "PairInfo",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getPairByAssetId",
              method: "getPairByAssetId",
              section: "zenlinkProtocol",
            },
            getAmountInPrice: {
              description: "Get the output token amount for an exact input token amount.",
              params: [
                {
                  name: "supply",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "path",
                  type: "Vec<ZenlinkAssetId>",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "u128",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getAmountInPrice",
              method: "getAmountInPrice",
              section: "zenlinkProtocol",
            },
            getAmountOutPrice: {
              description: "Get the input token amount for an exact output token amount.",
              params: [
                {
                  name: "supply",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "path",
                  type: "Vec<ZenlinkAssetId>",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "u128",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getAmountOutPrice",
              method: "getAmountOutPrice",
              section: "zenlinkProtocol",
            },
            getEstimateLptoken: {
              description:
                "Get the estimated number of LP token acquired given the desired and minimum amount for both in-token and out-token.",
              params: [
                {
                  name: "asset_0",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "asset_1",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "amount_0_desired",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "amount_1_desired",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "amount_0_min",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "amount_1_min",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "u128",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getEstimateLptoken",
              method: "getEstimateLptoken",
              section: "zenlinkProtocol",
            },
          },
          liquidityMining: {
            getRewards: {
              description: "Get the rewards users deserve",
              params: [
                {
                  name: "who",
                  type: "AccountId",
                },
                {
                  name: "pid",
                  type: "PoolId",
                },
                {
                  name: "at",
                  type: "Hash",
                  isOptional: true,
                },
              ],
              type: "Vec<(CurrencyId, Balance)>",
              isSubscription: false,
              jsonrpc: "liquidityMining_getRewards",
              method: "getRewards",
              section: "liquidityMining",
            },
          },
        },
        types: [
          {
            minmax: [0, 901],
            types: {
              CallOf: "Call",
              DispatchTime: {
                _enum: {
                  At: "BlockNumber",
                  After: "BlockNumber",
                },
              },
              ScheduleTaskIndex: "u32",
              DelayedOrigin: {
                delay: "BlockNumber",
                origin: "PalletsOrigin",
              },
              AuthorityOrigin: "DelayedOrigin",
              StorageValue: "Vec<u8>",
              GraduallyUpdate: {
                key: "StorageKey",
                targetValue: "StorageValue",
                perBlock: "StorageValue",
              },
              StorageKeyBytes: "Vec<u8>",
              StorageValueBytes: "Vec<u8>",
              RpcDataProviderId: "Text",
              DataProviderId: "u8",
              TimestampedValue: {
                value: "OracleValue",
                timestamp: "Moment",
              },
              TimestampedValueOf: "TimestampedValue",
              OrderedSet: "Vec<AccountId>",
              OrmlAccountData: {
                free: "Balance",
                reserved: "Balance",
                frozen: "Balance",
              },
              OrmlBalanceLock: {
                amount: "Balance",
                id: "LockIdentifier",
              },
              AuctionInfo: {
                bid: "Option<(AccountId, Balance)>",
                start: "BlockNumber",
                end: "Option<BlockNumber>",
              },
              DelayedDispatchTime: {
                _enum: {
                  At: "BlockNumber",
                  After: "BlockNumber",
                },
              },
              DispatchId: "u32",
              Price: "FixedU128",
              OrmlVestingSchedule: {
                start: "BlockNumber",
                period: "BlockNumber",
                periodCount: "u32",
                perPeriod: "Compact<Balance>",
              },
              VestingScheduleOf: "OrmlVestingSchedule",
              PoolInfo: {
                pool_id: "PoolId",
                keeper: "AccountId",
                investor: "Option<AccountId>",
                trading_pair: "(CurrencyId, CurrencyId)",
                duration: "BlockNumber",
                type: "PoolType",
                min_deposit_to_start: "Balance",
                after_block_to_start: "BlockNumber",
                deposit: "Balance",
                rewards: "BTreeMap<CurrencyId, RewardData>",
                update_b: "BlockNumber",
                state: "PoolState",
                block_startup: "Option<BlockNumber>",
                block_retired: "Option<BlockNumber>",
              },
              Share: "u128",
              OracleValue: "Price",
              BiddingOrderId: "u64",
              EraId: "u32",
              BiddingOrderUnit: {
                bidder_id: "AccountId",
                token_id: "AssetId",
                block_num: "BlockNumber",
                votes: "Balance",
                annual_roi: "Permill",
                validator: "AccountId",
              },
              BiddingOrderUnitOf: "BiddingOrderUnit",
              VersionId: "u32",
              PermissionName: "u64",
              PermissionLevel: {
                actor: "AccountName",
                permission: "PermissionName",
              },
              Action: {
                account: "AccountName",
                name: "ActionName",
                authorization: "Vec<PermissionLevel>",
                data: "Vec<u8>",
              },
              AccountName: "u64",
              Checksum256: "([u8;32])",
              ActionName: "u64",
              FlatMap: {
                map: "Vec<(ActionName, u64)>",
              },
              UnsignedInt: "u32",
              ActionReceipt: {
                receiver: "AccountName",
                act_digest: "Checksum256",
                global_sequence: "u64",
                recv_sequence: "u64",
                auth_sequence: "FlatMap<AccountName, u64>",
                code_sequence: "UnsignedInt",
                abi_sequence: "UnsignedInt",
              },
              BlockchainType: {
                _enum: ["BIFROST", "EOS", "IOST"],
              },
              Precision: "u32",
              BridgeAssetSymbol: {
                blockchain: "BlockchainType",
                symbol: "Vec<u8>",
                precision: "Precision",
              },
              PublicKey: {
                type_: "UnsignedInt",
                data: "[u8;33]",
              },
              ProducerKey: {
                producer_name: "AccountName",
                block_signing_key: "PublicKey",
              },
              ProducerSchedule: {
                version: "u32",
                producers: "Vec<ProducerKey>",
              },
              bridgeEosSignature: {
                type_: "UnsignedInt",
                data: "[u8;65]",
              },
              BlockTimestamp: "(u32)",
              Extension: "(u16, Vec<u8>)",
              BlockHeader: {
                timestamp: "BlockTimestamp",
                producer: "AccountName",
                confirmed: "u16",
                previous: "Checksum256",
                transaction_mroot: "Checksum256",
                action_mroot: "Checksum256",
                schedule_version: "u32",
                new_producers: "Option<ProducerSchedule>",
                header_extensions: "Vec<Extension>",
              },
              SignedBlockHeader: {
                block_header: "BlockHeader",
                producer_signature: "bridgeEosSignature",
              },
              Checksum256Array: "Vec<Checksum256>",
              IncrementalMerkle: {
                _node_count: "u64",
                _active_nodes: "Checksum256Array",
              },
              TxSig: {
                signature: "Vec<u8>",
                author: "AccountId",
              },
              MultiSig: {
                signatures: "Vec<TxSig>",
                threshold: "u8",
              },
              MultiSigTx: {
                chain_id: "Vec<u8>",
                raw_tx: "Vec<u8>",
                multi_sig: "MultiSig",
                action: "Action",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Sent: {
                tx_id: "Vec<u8>",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Succeeded: {
                tx_id: "Vec<u8>",
              },
              Failed: {
                tx_id: "Vec<u8>",
                reason: "Vec<u8>",
              },
              TxOut: {
                _enum: {
                  Initialized: "MultiSigTx",
                  Created: "MultiSigTx",
                  SignComplete: "MultiSigTx",
                  Sent: "Sent",
                  Succeeded: "Succeeded",
                  Failed: "Failed",
                },
              },
              TransactionStatus: {
                _enum: ["Initialized", "Created", "SignComplete", "Sent", "Succeeded", "Failed"],
              },
              ProducerAuthoritySchedule: {
                version: "u32",
                producers: "Vec<ProducerAuthority>",
              },
              ProducerAuthority: {
                producer_name: "ActionName",
                authority: "BlockSigningAuthority",
              },
              BlockSigningAuthority: "(UnsignedInt, BlockSigningAuthorityV0)",
              BlockSigningAuthorityV0: {
                threshold: "u32",
                keyWeights: "Vec<KeyWeight>",
              },
              KeyWeight: {
                key: "PublicKey",
                weight: "u16",
              },
              BancorPool: {
                currency_id: "CurrencyId",
                token_pool: "Balance",
                vstoken_pool: "Balance",
                token_ceiling: "Balance",
                token_base_supply: "Balance",
                vstoken_base_supply: "Balance",
              },
              IostAction: {
                contract: "Vec<u8>",
                action_name: "Vec<u8>",
                data: "Vec<u8>",
              },
              IostMultiSigTx: {
                chain_id: "i32",
                raw_tx: "Vec<u8>",
                multi_sig: "MultiSig",
                action: "IostAction",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Processing: {
                tx_id: "Vec<u8>",
                multi_sig_tx: "IostMultiSigTx",
              },
              IostTxOut: {
                _enum: {
                  Initial: "IostMultiSigTx",
                  Generated: "IostMultiSigTx",
                  Signed: "IostMultiSigTx",
                  Processing: "Processing",
                  Success: "Vec<u8>",
                  Fail: "Failed",
                },
              },
              PalletBalanceOf: "Balance",
              NumberOrHex: {
                _enum: {
                  Number: "u64",
                  Hex: "U256",
                },
              },
              ExtraFeeName: {
                _enum: ["SalpContribute", "NoExtraFee"],
              },
              IsExtended: "bool",
              SystemPalletId: "PalletId",
              TrieIndex: "u32",
              FundInfo: {
                raised: "Balance",
                cap: "Balance",
                first_slot: "LeasePeriod",
                last_slot: "LeasePeriod",
                trie_index: "TrieIndex",
                status: "FundStatus",
              },
              RedeemStatus: "BalanceOf",
              FundStatus: {
                _enum: {
                  Ongoing: 0,
                  Retired: 1,
                  Success: 2,
                  Failed: 3,
                  RefundWithdrew: 4,
                  RedeemWithdrew: 5,
                  End: 6,
                },
              },
              ContributionStatus: {
                _enum: ["Idle", "Refunded", "Unlocked", "Refunding", "Contributing"],
              },
              CrowdloanContributeCall: {
                _enum: {
                  CrowdloanContribute: "ContributeCall",
                },
              },
              ContributeCall: {
                _enum: {
                  Contribute: "Contribution",
                },
              },
              Contribution: {
                index: "ParaId",
                value: "BalanceOf",
                signature: "Option<MultiSignature>",
              },
              Withdraw: {
                who: "AccountIdOf",
                index: "ParaId",
              },
              WithdrawCall: {
                _enum: {
                  Withdraw: "Withdraw",
                },
              },
              ParachainTransactProxyType: {
                _enum: {
                  Primary: 0,
                  Derived: 1,
                },
              },
              ParachainDerivedProxyAccountType: {
                _enum: {
                  Salp: 0,
                  Staking: 1,
                },
              },
              Keys: "SessionKeys1",
              ParachainTransactType: {
                _enum: {
                  Xcm: 0,
                  Proxy: 1,
                },
              },
              RpcContributionStatus: {
                _enum: {
                  Idle: 0,
                  Contributing: 1,
                  Refunded: 2,
                  Unlocked: 3,
                  Redeemed: 4,
                },
              },
              RewardRecord: {
                account_id: "AccountId",
                record_amount: "Balance",
              },
              PoolId: "u32",
              SwapFee: "u128",
              PoolDetails: {
                owner: "AccountId",
                swap_fee_rate: "SwapFee",
                active: "bool",
              },
              PoolWeight: "Balance",
              PoolToken: "u128",
              PoolCreateTokenDetails: {
                token_id: "AssetId",
                token_balance: "Balance",
                token_weight: "PoolWeight",
              },
              MaxLocksOf: "u32",
              BifrostVestingInfo: {
                locked: "Balance",
                per_block: "Balance",
                starting_block: "BlockNumber",
              },
              OracleKey: "CurrencyId",
              BlockNumberFor: "BlockNumber",
              OrderId: "u64",
              OrderInfo: {
                owner: "AccountIdOf",
                vsbond: "CurrencyId",
                supply: "u128",
                remain: "u128",
                unit_price: "U64F64",
                order_id: "OrderId",
                order_state: "OrderState",
              },
              OrderState: {
                _enum: ["InTrade", "Revoked", "Clinchd"],
              },
              U64F64: "u128",
              ZenlinkAssetId: {
                chain_id: "u32",
                asset_type: "u8",
                asset_index: "u64",
              },
              ZenlinkAssetBalance: "u128",
              PairInfo: {
                asset0: "ZenlinkAssetId",
                asset1: "ZenlinkAssetId",
                account: "AccountId",
                totalLiquidity: "ZenlinkAssetBalance",
                holdingLiquidity: "ZenlinkAssetBalance",
                reserve0: "ZenlinkAssetBalance",
                reserve1: "ZenlinkAssetBalance",
                lpAssetId: "ZenlinkAssetId",
              },
              PairMetadata: {
                pair_account: "AccountId",
                target_supply: "ZenlinkAssetBalance",
              },
              BootstrapParamter: {
                min_contribution: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                target_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                accumulated_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                end_block_number: "BlockNumber",
                pair_account: "AccountId",
              },
              PairStatus: {
                _enum: {
                  Trading: "PairMetadata",
                  Bootstrap: "BootstrapParamter",
                  Disable: null,
                },
              },
              TokenSymbol: {
                _enum: {
                  BNC: 1,
                  KUSD: 2,
                  DOT: 3,
                  KSM: 4,
                  KAR: 6,
                },
              },
              CurrencyId: {
                _enum: {
                  Native: "TokenSymbol",
                  VToken: "TokenSymbol",
                  Token: "TokenSymbol",
                  Stable: "TokenSymbol",
                  VSToken: "TokenSymbol",
                  VSBond: "(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)",
                  LPToken: "(TokenSymbol, u8, TokenSymbol, u8)",
                },
              },
              CurrencyIdOf: "CurrencyId",
              TAssetBalance: "Balance",
              AmountOf: "Balance",
              StorageVersion: "Releases",
              ShareWeight: "Balance",
              Currency: "CurrencyIdOf",
              Amount: "AmountOf",
              TransferOriginType: {
                _enum: {
                  FromSelf: 0,
                  FromRelayChain: 1,
                  FromSiblingParaChain: 2,
                },
              },
              PoolType: {
                _enum: {
                  Mining: 0,
                  Farming: 1,
                  EBFarming: 2,
                },
              },
              PoolState: {
                _enum: {
                  UnCharged: 0,
                  Charged: 1,
                  Ongoing: 2,
                  Retired: 3,
                  Dead: 4,
                },
              },
              DepositData: {
                deposit: "Balance",
                gain_avgs: "BTreeMap<CurrencyId, FixedU128>",
                update_b: "BlockNumber",
              },
              RewardData: {
                total: "Balance",
                per_block: "Balance",
                claimed: "Balance",
                gain_avg: "FixedU128",
              },
              AssetInstance: "AssetInstanceV1",
              MultiAsset: "MultiAssetV0",
              Xcm: "XcmV0",
              XcmOrder: "XcmOrderV0",
              MultiLocation: "MultiLocationV0",
              XcmError: "XcmErrorV0",
              Response: "ResponseV0",
            },
          },
          {
            minmax: [902, null],
            types: {
              CallOf: "Call",
              DispatchTime: {
                _enum: {
                  At: "BlockNumber",
                  After: "BlockNumber",
                },
              },
              ScheduleTaskIndex: "u32",
              DelayedOrigin: {
                delay: "BlockNumber",
                origin: "PalletsOrigin",
              },
              AuthorityOrigin: "DelayedOrigin",
              StorageValue: "Vec<u8>",
              GraduallyUpdate: {
                key: "StorageKey",
                targetValue: "StorageValue",
                perBlock: "StorageValue",
              },
              StorageKeyBytes: "Vec<u8>",
              StorageValueBytes: "Vec<u8>",
              RpcDataProviderId: "Text",
              DataProviderId: "u8",
              TimestampedValue: {
                value: "OracleValue",
                timestamp: "Moment",
              },
              TimestampedValueOf: "TimestampedValue",
              OrderedSet: "Vec<AccountId>",
              OrmlAccountData: {
                free: "Balance",
                reserved: "Balance",
                frozen: "Balance",
              },
              OrmlBalanceLock: {
                amount: "Balance",
                id: "LockIdentifier",
              },
              AuctionInfo: {
                bid: "Option<(AccountId, Balance)>",
                start: "BlockNumber",
                end: "Option<BlockNumber>",
              },
              DelayedDispatchTime: {
                _enum: {
                  At: "BlockNumber",
                  After: "BlockNumber",
                },
              },
              DispatchId: "u32",
              Price: "FixedU128",
              OrmlVestingSchedule: {
                start: "BlockNumber",
                period: "BlockNumber",
                periodCount: "u32",
                perPeriod: "Compact<Balance>",
              },
              VestingScheduleOf: "OrmlVestingSchedule",
              PoolInfo: {
                pool_id: "PoolId",
                keeper: "AccountId",
                investor: "Option<AccountId>",
                trading_pair: "(CurrencyId, CurrencyId)",
                duration: "BlockNumber",
                type: "PoolType",
                min_deposit_to_start: "Balance",
                after_block_to_start: "BlockNumber",
                deposit: "Balance",
                rewards: "BTreeMap<CurrencyId, RewardData>",
                update_b: "BlockNumber",
                state: "PoolState",
                block_startup: "Option<BlockNumber>",
                block_retired: "Option<BlockNumber>",
              },
              Share: "u128",
              OracleValue: "Price",
              BiddingOrderId: "u64",
              EraId: "u32",
              BiddingOrderUnit: {
                bidder_id: "AccountId",
                token_id: "AssetId",
                block_num: "BlockNumber",
                votes: "Balance",
                annual_roi: "Permill",
                validator: "AccountId",
              },
              BiddingOrderUnitOf: "BiddingOrderUnit",
              VersionId: "u32",
              PermissionName: "u64",
              PermissionLevel: {
                actor: "AccountName",
                permission: "PermissionName",
              },
              Action: {
                account: "AccountName",
                name: "ActionName",
                authorization: "Vec<PermissionLevel>",
                data: "Vec<u8>",
              },
              AccountName: "u64",
              Checksum256: "([u8;32])",
              ActionName: "u64",
              FlatMap: {
                map: "Vec<(ActionName, u64)>",
              },
              UnsignedInt: "u32",
              ActionReceipt: {
                receiver: "AccountName",
                act_digest: "Checksum256",
                global_sequence: "u64",
                recv_sequence: "u64",
                auth_sequence: "FlatMap<AccountName, u64>",
                code_sequence: "UnsignedInt",
                abi_sequence: "UnsignedInt",
              },
              BlockchainType: {
                _enum: ["BIFROST", "EOS", "IOST"],
              },
              Precision: "u32",
              BridgeAssetSymbol: {
                blockchain: "BlockchainType",
                symbol: "Vec<u8>",
                precision: "Precision",
              },
              PublicKey: {
                type_: "UnsignedInt",
                data: "[u8;33]",
              },
              ProducerKey: {
                producer_name: "AccountName",
                block_signing_key: "PublicKey",
              },
              ProducerSchedule: {
                version: "u32",
                producers: "Vec<ProducerKey>",
              },
              bridgeEosSignature: {
                type_: "UnsignedInt",
                data: "[u8;65]",
              },
              BlockTimestamp: "(u32)",
              Extension: "(u16, Vec<u8>)",
              BlockHeader: {
                timestamp: "BlockTimestamp",
                producer: "AccountName",
                confirmed: "u16",
                previous: "Checksum256",
                transaction_mroot: "Checksum256",
                action_mroot: "Checksum256",
                schedule_version: "u32",
                new_producers: "Option<ProducerSchedule>",
                header_extensions: "Vec<Extension>",
              },
              SignedBlockHeader: {
                block_header: "BlockHeader",
                producer_signature: "bridgeEosSignature",
              },
              Checksum256Array: "Vec<Checksum256>",
              IncrementalMerkle: {
                _node_count: "u64",
                _active_nodes: "Checksum256Array",
              },
              TxSig: {
                signature: "Vec<u8>",
                author: "AccountId",
              },
              MultiSig: {
                signatures: "Vec<TxSig>",
                threshold: "u8",
              },
              MultiSigTx: {
                chain_id: "Vec<u8>",
                raw_tx: "Vec<u8>",
                multi_sig: "MultiSig",
                action: "Action",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Sent: {
                tx_id: "Vec<u8>",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Succeeded: {
                tx_id: "Vec<u8>",
              },
              Failed: {
                tx_id: "Vec<u8>",
                reason: "Vec<u8>",
              },
              TxOut: {
                _enum: {
                  Initialized: "MultiSigTx",
                  Created: "MultiSigTx",
                  SignComplete: "MultiSigTx",
                  Sent: "Sent",
                  Succeeded: "Succeeded",
                  Failed: "Failed",
                },
              },
              TransactionStatus: {
                _enum: ["Initialized", "Created", "SignComplete", "Sent", "Succeeded", "Failed"],
              },
              ProducerAuthoritySchedule: {
                version: "u32",
                producers: "Vec<ProducerAuthority>",
              },
              ProducerAuthority: {
                producer_name: "ActionName",
                authority: "BlockSigningAuthority",
              },
              BlockSigningAuthority: "(UnsignedInt, BlockSigningAuthorityV0)",
              BlockSigningAuthorityV0: {
                threshold: "u32",
                keyWeights: "Vec<KeyWeight>",
              },
              KeyWeight: {
                key: "PublicKey",
                weight: "u16",
              },
              BancorPool: {
                currency_id: "CurrencyId",
                token_pool: "Balance",
                vstoken_pool: "Balance",
                token_ceiling: "Balance",
                token_base_supply: "Balance",
                vstoken_base_supply: "Balance",
              },
              IostAction: {
                contract: "Vec<u8>",
                action_name: "Vec<u8>",
                data: "Vec<u8>",
              },
              IostMultiSigTx: {
                chain_id: "i32",
                raw_tx: "Vec<u8>",
                multi_sig: "MultiSig",
                action: "IostAction",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Processing: {
                tx_id: "Vec<u8>",
                multi_sig_tx: "IostMultiSigTx",
              },
              IostTxOut: {
                _enum: {
                  Initial: "IostMultiSigTx",
                  Generated: "IostMultiSigTx",
                  Signed: "IostMultiSigTx",
                  Processing: "Processing",
                  Success: "Vec<u8>",
                  Fail: "Failed",
                },
              },
              PalletBalanceOf: "Balance",
              NumberOrHex: {
                _enum: {
                  Number: "u64",
                  Hex: "U256",
                },
              },
              ExtraFeeName: {
                _enum: ["SalpContribute", "NoExtraFee"],
              },
              IsExtended: "bool",
              SystemPalletId: "PalletId",
              TrieIndex: "u32",
              FundInfo: {
                raised: "Balance",
                cap: "Balance",
                first_slot: "LeasePeriod",
                last_slot: "LeasePeriod",
                trie_index: "TrieIndex",
                status: "FundStatus",
              },
              RedeemStatus: "BalanceOf",
              FundStatus: {
                _enum: {
                  Ongoing: 0,
                  Retired: 1,
                  Success: 2,
                  Failed: 3,
                  RefundWithdrew: 4,
                  RedeemWithdrew: 5,
                  End: 6,
                },
              },
              ContributionStatus: {
                _enum: ["Idle", "Refunded", "Unlocked", "Refunding", "Contributing"],
              },
              CrowdloanContributeCall: {
                _enum: {
                  CrowdloanContribute: "ContributeCall",
                },
              },
              ContributeCall: {
                _enum: {
                  Contribute: "Contribution",
                },
              },
              Contribution: {
                index: "ParaId",
                value: "BalanceOf",
                signature: "Option<MultiSignature>",
              },
              Withdraw: {
                who: "AccountIdOf",
                index: "ParaId",
              },
              WithdrawCall: {
                _enum: {
                  Withdraw: "Withdraw",
                },
              },
              ParachainTransactProxyType: {
                _enum: {
                  Primary: 0,
                  Derived: 1,
                },
              },
              ParachainDerivedProxyAccountType: {
                _enum: {
                  Salp: 0,
                  Staking: 1,
                },
              },
              Keys: "SessionKeys1",
              ParachainTransactType: {
                _enum: {
                  Xcm: 0,
                  Proxy: 1,
                },
              },
              RpcContributionStatus: {
                _enum: {
                  Idle: 0,
                  Contributing: 1,
                  Refunded: 2,
                  Unlocked: 3,
                  Redeemed: 4,
                },
              },
              RewardRecord: {
                account_id: "AccountId",
                record_amount: "Balance",
              },
              PoolId: "u32",
              SwapFee: "u128",
              PoolDetails: {
                owner: "AccountId",
                swap_fee_rate: "SwapFee",
                active: "bool",
              },
              PoolWeight: "Balance",
              PoolToken: "u128",
              PoolCreateTokenDetails: {
                token_id: "AssetId",
                token_balance: "Balance",
                token_weight: "PoolWeight",
              },
              MaxLocksOf: "u32",
              BifrostVestingInfo: {
                locked: "Balance",
                per_block: "Balance",
                starting_block: "BlockNumber",
              },
              OracleKey: "CurrencyId",
              BlockNumberFor: "BlockNumber",
              OrderId: "u64",
              OrderInfo: {
                owner: "AccountIdOf",
                vsbond: "CurrencyId",
                supply: "u128",
                remain: "u128",
                unit_price: "U64F64",
                order_id: "OrderId",
                order_state: "OrderState",
              },
              OrderState: {
                _enum: ["InTrade", "Revoked", "Clinchd"],
              },
              U64F64: "u128",
              ZenlinkAssetId: {
                chain_id: "u32",
                asset_type: "u8",
                asset_index: "u64",
              },
              ZenlinkAssetBalance: "u128",
              PairInfo: {
                asset0: "ZenlinkAssetId",
                asset1: "ZenlinkAssetId",
                account: "AccountId",
                totalLiquidity: "ZenlinkAssetBalance",
                holdingLiquidity: "ZenlinkAssetBalance",
                reserve0: "ZenlinkAssetBalance",
                reserve1: "ZenlinkAssetBalance",
                lpAssetId: "ZenlinkAssetId",
              },
              PairMetadata: {
                pair_account: "AccountId",
                target_supply: "ZenlinkAssetBalance",
              },
              BootstrapParamter: {
                min_contribution: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                target_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                accumulated_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                end_block_number: "BlockNumber",
                pair_account: "AccountId",
              },
              PairStatus: {
                _enum: {
                  Trading: "PairMetadata",
                  Bootstrap: "BootstrapParamter",
                  Disable: null,
                },
              },
              TokenSymbol: {
                _enum: {
                  BNC: 1,
                  KUSD: 2,
                  DOT: 3,
                  KSM: 4,
                  KAR: 6,
                },
              },
              CurrencyId: {
                _enum: {
                  Native: "TokenSymbol",
                  VToken: "TokenSymbol",
                  Token: "TokenSymbol",
                  Stable: "TokenSymbol",
                  VSToken: "TokenSymbol",
                  VSBond: "(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)",
                  LPToken: "(TokenSymbol, u8, TokenSymbol, u8)",
                },
              },
              CurrencyIdOf: "CurrencyId",
              TAssetBalance: "Balance",
              AmountOf: "Balance",
              StorageVersion: "Releases",
              ShareWeight: "Balance",
              Currency: "CurrencyIdOf",
              Amount: "AmountOf",
              TransferOriginType: {
                _enum: {
                  FromSelf: 0,
                  FromRelayChain: 1,
                  FromSiblingParaChain: 2,
                },
              },
              PoolType: {
                _enum: {
                  Mining: 0,
                  Farming: 1,
                  EBFarming: 2,
                },
              },
              PoolState: {
                _enum: {
                  UnCharged: 0,
                  Charged: 1,
                  Ongoing: 2,
                  Retired: 3,
                  Dead: 4,
                },
              },
              DepositData: {
                deposit: "Balance",
                gain_avgs: "BTreeMap<CurrencyId, FixedU128>",
                update_b: "BlockNumber",
              },
              RewardData: {
                total: "Balance",
                per_block: "Balance",
                claimed: "Balance",
                gain_avg: "FixedU128",
              },
              AssetInstance: "AssetInstanceV1",
              MultiAsset: "MultiAssetV1",
              Xcm: "XcmV1",
              XcmOrder: "XcmOrderV1",
              MultiLocation: "MultiLocationV1",
              XcmError: "XcmErrorV1",
              Response: "ResponseV1",
            },
          },
        ],
        alias: {
          tokens: {
            AccountData: "OrmlAccountData",
            BalanceLock: "OrmlBalanceLock",
          },
        },
      },
      asgard: {
        rpc: {
          oracle: {
            getValue: {
              description: "Retrieves the oracle value for a given key.",
              params: [
                {
                  name: "providerId",
                  type: "RpcDataProviderId",
                },
                {
                  name: "key",
                  type: "OracleKey",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "Option<TimestampedValue>",
              isSubscription: false,
              jsonrpc: "oracle_getValue",
              method: "getValue",
              section: "oracle",
            },
            getAllValues: {
              description: "Retrieves all oracle values.",
              params: [
                {
                  name: "providerId",
                  type: "RpcDataProviderId",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "Vec<(OracleKey, Option<TimestampedValue>)>",
              isSubscription: false,
              jsonrpc: "oracle_getAllValues",
              method: "getAllValues",
              section: "oracle",
            },
          },
          flexibleFee: {
            getFeeTokenAndAmount: {
              description:
                "Get charging token type and amount in terms of flexible transaction fee.",
              params: [
                {
                  name: "who",
                  type: "AccountId",
                },
                {
                  name: "extrinsic",
                  type: "Bytes",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "(CurrencyId, NumberOrHex)",
              isSubscription: false,
              jsonrpc: "flexibleFee_getFeeTokenAndAmount",
              method: "getFeeTokenAndAmount",
              section: "flexibleFee",
            },
          },
          salp: {
            getContribution: {
              description: "salp getContribution",
              params: [
                {
                  name: "index",
                  type: "ParaId",
                },
                {
                  name: "who",
                  type: "AccountIdOf",
                },
              ],
              type: "(Balance, ContributionStatus)",
              isSubscription: false,
              jsonrpc: "salp_getContribution",
              method: "getContribution",
              section: "salp",
            },
          },
          vtokenMint: {
            getVtokenMintRate: {
              description: "Get current vtoken mint rate.",
              params: [
                {
                  name: "asset_id",
                  type: "CurrencyId",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "String",
              isSubscription: false,
              jsonrpc: "vtokenMint_getVtokenMintRate",
              method: "getVtokenMintRate",
              section: "vtokenMint",
            },
          },
          zenlinkProtocol: {
            getAllAssets: {
              description: "zenlinkProtocol getAllAssets",
              params: [
                {
                  name: "at",
                  type: "Hash",
                  isOptional: true,
                },
              ],
              type: "Vec<ZenlinkAssetId>",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getAllAssets",
              method: "getAllAssets",
              section: "zenlinkProtocol",
            },
            getBalance: {
              description: "zenlinkProtocol getBalance",
              params: [
                {
                  name: "asset_id",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "account",
                  type: "AccountId",
                },
                {
                  name: "at",
                  type: "Hash",
                  isOptional: true,
                },
              ],
              type: "String",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getBalance",
              method: "getBalance",
              section: "zenlinkProtocol",
            },
            getSovereignsInfo: {
              description: "Get the ownership of a certain currency for each parachain.",
              params: [
                {
                  name: "asset_id",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "(u32, AccountId, String)",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getSovereignsInfo",
              method: "getSovereignsInfo",
              section: "zenlinkProtocol",
            },
            getPairByAssetId: {
              description: "Get the detailed information of a particular exchange pair.",
              params: [
                {
                  name: "asset_0",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "asset_1",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "PairInfo",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getPairByAssetId",
              method: "getPairByAssetId",
              section: "zenlinkProtocol",
            },
            getAmountInPrice: {
              description: "Get the output token amount for an exact input token amount.",
              params: [
                {
                  name: "supply",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "path",
                  type: "Vec<ZenlinkAssetId>",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "u128",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getAmountInPrice",
              method: "getAmountInPrice",
              section: "zenlinkProtocol",
            },
            getAmountOutPrice: {
              description: "Get the input token amount for an exact output token amount.",
              params: [
                {
                  name: "supply",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "path",
                  type: "Vec<ZenlinkAssetId>",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "u128",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getAmountOutPrice",
              method: "getAmountOutPrice",
              section: "zenlinkProtocol",
            },
            getEstimateLptoken: {
              description:
                "Get the estimated number of LP token acquired given the desired and minimum amount for both in-token and out-token.",
              params: [
                {
                  name: "asset_0",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "asset_1",
                  type: "ZenlinkAssetId",
                },
                {
                  name: "amount_0_desired",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "amount_1_desired",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "amount_0_min",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "amount_1_min",
                  type: "ZenlinkAssetBalance",
                },
                {
                  name: "at",
                  type: "BlockHash",
                  isHistoric: true,
                  isOptional: true,
                },
              ],
              type: "u128",
              isSubscription: false,
              jsonrpc: "zenlinkProtocol_getEstimateLptoken",
              method: "getEstimateLptoken",
              section: "zenlinkProtocol",
            },
          },
          liquidityMining: {
            getRewards: {
              description: "Get the rewards users deserve",
              params: [
                {
                  name: "who",
                  type: "AccountId",
                },
                {
                  name: "pid",
                  type: "PoolId",
                },
                {
                  name: "at",
                  type: "Hash",
                  isOptional: true,
                },
              ],
              type: "Vec<(CurrencyId, Balance)>",
              isSubscription: false,
              jsonrpc: "liquidityMining_getRewards",
              method: "getRewards",
              section: "liquidityMining",
            },
          },
        },
        types: [
          {
            minmax: [0, 901],
            types: {
              CallOf: "Call",
              DispatchTime: {
                _enum: {
                  At: "BlockNumber",
                  After: "BlockNumber",
                },
              },
              ScheduleTaskIndex: "u32",
              DelayedOrigin: {
                delay: "BlockNumber",
                origin: "PalletsOrigin",
              },
              AuthorityOrigin: "DelayedOrigin",
              StorageValue: "Vec<u8>",
              GraduallyUpdate: {
                key: "StorageKey",
                targetValue: "StorageValue",
                perBlock: "StorageValue",
              },
              StorageKeyBytes: "Vec<u8>",
              StorageValueBytes: "Vec<u8>",
              RpcDataProviderId: "Text",
              DataProviderId: "u8",
              TimestampedValue: {
                value: "OracleValue",
                timestamp: "Moment",
              },
              TimestampedValueOf: "TimestampedValue",
              OrderedSet: "Vec<AccountId>",
              OrmlAccountData: {
                free: "Balance",
                reserved: "Balance",
                frozen: "Balance",
              },
              OrmlBalanceLock: {
                amount: "Balance",
                id: "LockIdentifier",
              },
              AuctionInfo: {
                bid: "Option<(AccountId, Balance)>",
                start: "BlockNumber",
                end: "Option<BlockNumber>",
              },
              DelayedDispatchTime: {
                _enum: {
                  At: "BlockNumber",
                  After: "BlockNumber",
                },
              },
              DispatchId: "u32",
              Price: "FixedU128",
              OrmlVestingSchedule: {
                start: "BlockNumber",
                period: "BlockNumber",
                periodCount: "u32",
                perPeriod: "Compact<Balance>",
              },
              VestingScheduleOf: "OrmlVestingSchedule",
              PoolInfo: {
                pool_id: "PoolId",
                keeper: "AccountId",
                investor: "Option<AccountId>",
                trading_pair: "(CurrencyId, CurrencyId)",
                duration: "BlockNumber",
                type: "PoolType",
                min_deposit_to_start: "Balance",
                after_block_to_start: "BlockNumber",
                deposit: "Balance",
                rewards: "BTreeMap<CurrencyId, RewardData>",
                update_b: "BlockNumber",
                state: "PoolState",
                block_startup: "Option<BlockNumber>",
                block_retired: "Option<BlockNumber>",
              },
              Share: "u128",
              OracleValue: "Price",
              BiddingOrderId: "u64",
              EraId: "u32",
              BiddingOrderUnit: {
                bidder_id: "AccountId",
                token_id: "AssetId",
                block_num: "BlockNumber",
                votes: "Balance",
                annual_roi: "Permill",
                validator: "AccountId",
              },
              BiddingOrderUnitOf: "BiddingOrderUnit",
              VersionId: "u32",
              PermissionName: "u64",
              PermissionLevel: {
                actor: "AccountName",
                permission: "PermissionName",
              },
              Action: {
                account: "AccountName",
                name: "ActionName",
                authorization: "Vec<PermissionLevel>",
                data: "Vec<u8>",
              },
              AccountName: "u64",
              Checksum256: "([u8;32])",
              ActionName: "u64",
              FlatMap: {
                map: "Vec<(ActionName, u64)>",
              },
              UnsignedInt: "u32",
              ActionReceipt: {
                receiver: "AccountName",
                act_digest: "Checksum256",
                global_sequence: "u64",
                recv_sequence: "u64",
                auth_sequence: "FlatMap<AccountName, u64>",
                code_sequence: "UnsignedInt",
                abi_sequence: "UnsignedInt",
              },
              BlockchainType: {
                _enum: ["BIFROST", "EOS", "IOST"],
              },
              Precision: "u32",
              BridgeAssetSymbol: {
                blockchain: "BlockchainType",
                symbol: "Vec<u8>",
                precision: "Precision",
              },
              PublicKey: {
                type_: "UnsignedInt",
                data: "[u8;33]",
              },
              ProducerKey: {
                producer_name: "AccountName",
                block_signing_key: "PublicKey",
              },
              ProducerSchedule: {
                version: "u32",
                producers: "Vec<ProducerKey>",
              },
              bridgeEosSignature: {
                type_: "UnsignedInt",
                data: "[u8;65]",
              },
              BlockTimestamp: "(u32)",
              Extension: "(u16, Vec<u8>)",
              BlockHeader: {
                timestamp: "BlockTimestamp",
                producer: "AccountName",
                confirmed: "u16",
                previous: "Checksum256",
                transaction_mroot: "Checksum256",
                action_mroot: "Checksum256",
                schedule_version: "u32",
                new_producers: "Option<ProducerSchedule>",
                header_extensions: "Vec<Extension>",
              },
              SignedBlockHeader: {
                block_header: "BlockHeader",
                producer_signature: "bridgeEosSignature",
              },
              Checksum256Array: "Vec<Checksum256>",
              IncrementalMerkle: {
                _node_count: "u64",
                _active_nodes: "Checksum256Array",
              },
              TxSig: {
                signature: "Vec<u8>",
                author: "AccountId",
              },
              MultiSig: {
                signatures: "Vec<TxSig>",
                threshold: "u8",
              },
              MultiSigTx: {
                chain_id: "Vec<u8>",
                raw_tx: "Vec<u8>",
                multi_sig: "MultiSig",
                action: "Action",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Sent: {
                tx_id: "Vec<u8>",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Succeeded: {
                tx_id: "Vec<u8>",
              },
              Failed: {
                tx_id: "Vec<u8>",
                reason: "Vec<u8>",
              },
              TxOut: {
                _enum: {
                  Initialized: "MultiSigTx",
                  Created: "MultiSigTx",
                  SignComplete: "MultiSigTx",
                  Sent: "Sent",
                  Succeeded: "Succeeded",
                  Failed: "Failed",
                },
              },
              TransactionStatus: {
                _enum: ["Initialized", "Created", "SignComplete", "Sent", "Succeeded", "Failed"],
              },
              ProducerAuthoritySchedule: {
                version: "u32",
                producers: "Vec<ProducerAuthority>",
              },
              ProducerAuthority: {
                producer_name: "ActionName",
                authority: "BlockSigningAuthority",
              },
              BlockSigningAuthority: "(UnsignedInt, BlockSigningAuthorityV0)",
              BlockSigningAuthorityV0: {
                threshold: "u32",
                keyWeights: "Vec<KeyWeight>",
              },
              KeyWeight: {
                key: "PublicKey",
                weight: "u16",
              },
              BancorPool: {
                currency_id: "CurrencyId",
                token_pool: "Balance",
                vstoken_pool: "Balance",
                token_ceiling: "Balance",
                token_base_supply: "Balance",
                vstoken_base_supply: "Balance",
              },
              IostAction: {
                contract: "Vec<u8>",
                action_name: "Vec<u8>",
                data: "Vec<u8>",
              },
              IostMultiSigTx: {
                chain_id: "i32",
                raw_tx: "Vec<u8>",
                multi_sig: "MultiSig",
                action: "IostAction",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Processing: {
                tx_id: "Vec<u8>",
                multi_sig_tx: "IostMultiSigTx",
              },
              IostTxOut: {
                _enum: {
                  Initial: "IostMultiSigTx",
                  Generated: "IostMultiSigTx",
                  Signed: "IostMultiSigTx",
                  Processing: "Processing",
                  Success: "Vec<u8>",
                  Fail: "Failed",
                },
              },
              PalletBalanceOf: "Balance",
              NumberOrHex: {
                _enum: {
                  Number: "u64",
                  Hex: "U256",
                },
              },
              ExtraFeeName: {
                _enum: ["SalpContribute", "NoExtraFee"],
              },
              IsExtended: "bool",
              SystemPalletId: "PalletId",
              TrieIndex: "u32",
              FundInfo: {
                raised: "Balance",
                cap: "Balance",
                first_slot: "LeasePeriod",
                last_slot: "LeasePeriod",
                trie_index: "TrieIndex",
                status: "FundStatus",
              },
              RedeemStatus: "BalanceOf",
              FundStatus: {
                _enum: {
                  Ongoing: 0,
                  Retired: 1,
                  Success: 2,
                  Failed: 3,
                  RefundWithdrew: 4,
                  RedeemWithdrew: 5,
                  End: 6,
                },
              },
              ContributionStatus: {
                _enum: ["Idle", "Refunded", "Unlocked", "Refunding", "Contributing"],
              },
              CrowdloanContributeCall: {
                _enum: {
                  CrowdloanContribute: "ContributeCall",
                },
              },
              ContributeCall: {
                _enum: {
                  Contribute: "Contribution",
                },
              },
              Contribution: {
                index: "ParaId",
                value: "BalanceOf",
                signature: "Option<MultiSignature>",
              },
              Withdraw: {
                who: "AccountIdOf",
                index: "ParaId",
              },
              WithdrawCall: {
                _enum: {
                  Withdraw: "Withdraw",
                },
              },
              ParachainTransactProxyType: {
                _enum: {
                  Primary: 0,
                  Derived: 1,
                },
              },
              ParachainDerivedProxyAccountType: {
                _enum: {
                  Salp: 0,
                  Staking: 1,
                },
              },
              Keys: "SessionKeys1",
              ParachainTransactType: {
                _enum: {
                  Xcm: 0,
                  Proxy: 1,
                },
              },
              RpcContributionStatus: {
                _enum: {
                  Idle: 0,
                  Contributing: 1,
                  Refunded: 2,
                  Unlocked: 3,
                  Redeemed: 4,
                },
              },
              RewardRecord: {
                account_id: "AccountId",
                record_amount: "Balance",
              },
              PoolId: "u32",
              SwapFee: "u128",
              PoolDetails: {
                owner: "AccountId",
                swap_fee_rate: "SwapFee",
                active: "bool",
              },
              PoolWeight: "Balance",
              PoolToken: "u128",
              PoolCreateTokenDetails: {
                token_id: "AssetId",
                token_balance: "Balance",
                token_weight: "PoolWeight",
              },
              MaxLocksOf: "u32",
              BifrostVestingInfo: {
                locked: "Balance",
                per_block: "Balance",
                starting_block: "BlockNumber",
              },
              OracleKey: "CurrencyId",
              BlockNumberFor: "BlockNumber",
              OrderId: "u64",
              OrderInfo: {
                owner: "AccountIdOf",
                vsbond: "CurrencyId",
                supply: "u128",
                remain: "u128",
                unit_price: "U64F64",
                order_id: "OrderId",
                order_state: "OrderState",
              },
              OrderState: {
                _enum: ["InTrade", "Revoked", "Clinchd"],
              },
              U64F64: "u128",
              ZenlinkAssetId: {
                chain_id: "u32",
                asset_type: "u8",
                asset_index: "u64",
              },
              ZenlinkAssetBalance: "u128",
              PairInfo: {
                asset0: "ZenlinkAssetId",
                asset1: "ZenlinkAssetId",
                account: "AccountId",
                totalLiquidity: "ZenlinkAssetBalance",
                holdingLiquidity: "ZenlinkAssetBalance",
                reserve0: "ZenlinkAssetBalance",
                reserve1: "ZenlinkAssetBalance",
                lpAssetId: "ZenlinkAssetId",
              },
              PairMetadata: {
                pair_account: "AccountId",
                target_supply: "ZenlinkAssetBalance",
              },
              BootstrapParamter: {
                min_contribution: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                target_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                accumulated_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                end_block_number: "BlockNumber",
                pair_account: "AccountId",
              },
              PairStatus: {
                _enum: {
                  Trading: "PairMetadata",
                  Bootstrap: "BootstrapParamter",
                  Disable: null,
                },
              },
              TokenSymbol: {
                _enum: {
                  ASG: 0,
                  BNC: 1,
                  KUSD: 2,
                  DOT: 3,
                  KSM: 4,
                  ETH: 5,
                  KAR: 6,
                  ZLK: 7,
                },
              },
              CurrencyId: {
                _enum: {
                  Native: "TokenSymbol",
                  VToken: "TokenSymbol",
                  Token: "TokenSymbol",
                  Stable: "TokenSymbol",
                  VSToken: "TokenSymbol",
                  VSBond: "(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)",
                  LPToken: "(TokenSymbol, u8, TokenSymbol, u8)",
                },
              },
              CurrencyIdOf: "CurrencyId",
              TAssetBalance: "Balance",
              AmountOf: "Balance",
              StorageVersion: "Releases",
              ShareWeight: "Balance",
              Currency: "CurrencyIdOf",
              Amount: "AmountOf",
              TransferOriginType: {
                _enum: {
                  FromSelf: 0,
                  FromRelayChain: 1,
                  FromSiblingParaChain: 2,
                },
              },
              PoolType: {
                _enum: {
                  Mining: 0,
                  Farming: 1,
                  EBFarming: 2,
                },
              },
              PoolState: {
                _enum: {
                  UnCharged: 0,
                  Charged: 1,
                  Ongoing: 2,
                  Retired: 3,
                  Dead: 4,
                },
              },
              DepositData: {
                deposit: "Balance",
                gain_avgs: "BTreeMap<CurrencyId, FixedU128>",
                update_b: "BlockNumber",
              },
              RewardData: {
                total: "Balance",
                per_block: "Balance",
                claimed: "Balance",
                gain_avg: "FixedU128",
              },
              AssetInstance: "AssetInstanceV1",
              MultiAsset: "MultiAssetV0",
              Xcm: "XcmV0",
              XcmOrder: "XcmOrderV0",
              MultiLocation: "MultiLocationV0",
              XcmError: "XcmErrorV0",
              Response: "ResponseV0",
            },
          },
          {
            minmax: [902, null],
            types: {
              CallOf: "Call",
              DispatchTime: {
                _enum: {
                  At: "BlockNumber",
                  After: "BlockNumber",
                },
              },
              ScheduleTaskIndex: "u32",
              DelayedOrigin: {
                delay: "BlockNumber",
                origin: "PalletsOrigin",
              },
              AuthorityOrigin: "DelayedOrigin",
              StorageValue: "Vec<u8>",
              GraduallyUpdate: {
                key: "StorageKey",
                targetValue: "StorageValue",
                perBlock: "StorageValue",
              },
              StorageKeyBytes: "Vec<u8>",
              StorageValueBytes: "Vec<u8>",
              RpcDataProviderId: "Text",
              DataProviderId: "u8",
              TimestampedValue: {
                value: "OracleValue",
                timestamp: "Moment",
              },
              TimestampedValueOf: "TimestampedValue",
              OrderedSet: "Vec<AccountId>",
              OrmlAccountData: {
                free: "Balance",
                reserved: "Balance",
                frozen: "Balance",
              },
              OrmlBalanceLock: {
                amount: "Balance",
                id: "LockIdentifier",
              },
              AuctionInfo: {
                bid: "Option<(AccountId, Balance)>",
                start: "BlockNumber",
                end: "Option<BlockNumber>",
              },
              DelayedDispatchTime: {
                _enum: {
                  At: "BlockNumber",
                  After: "BlockNumber",
                },
              },
              DispatchId: "u32",
              Price: "FixedU128",
              OrmlVestingSchedule: {
                start: "BlockNumber",
                period: "BlockNumber",
                periodCount: "u32",
                perPeriod: "Compact<Balance>",
              },
              VestingScheduleOf: "OrmlVestingSchedule",
              PoolInfo: {
                pool_id: "PoolId",
                keeper: "AccountId",
                investor: "Option<AccountId>",
                trading_pair: "(CurrencyId, CurrencyId)",
                duration: "BlockNumber",
                type: "PoolType",
                min_deposit_to_start: "Balance",
                after_block_to_start: "BlockNumber",
                deposit: "Balance",
                rewards: "BTreeMap<CurrencyId, RewardData>",
                update_b: "BlockNumber",
                state: "PoolState",
                block_startup: "Option<BlockNumber>",
                block_retired: "Option<BlockNumber>",
              },
              Share: "u128",
              OracleValue: "Price",
              BiddingOrderId: "u64",
              EraId: "u32",
              BiddingOrderUnit: {
                bidder_id: "AccountId",
                token_id: "AssetId",
                block_num: "BlockNumber",
                votes: "Balance",
                annual_roi: "Permill",
                validator: "AccountId",
              },
              BiddingOrderUnitOf: "BiddingOrderUnit",
              VersionId: "u32",
              PermissionName: "u64",
              PermissionLevel: {
                actor: "AccountName",
                permission: "PermissionName",
              },
              Action: {
                account: "AccountName",
                name: "ActionName",
                authorization: "Vec<PermissionLevel>",
                data: "Vec<u8>",
              },
              AccountName: "u64",
              Checksum256: "([u8;32])",
              ActionName: "u64",
              FlatMap: {
                map: "Vec<(ActionName, u64)>",
              },
              UnsignedInt: "u32",
              ActionReceipt: {
                receiver: "AccountName",
                act_digest: "Checksum256",
                global_sequence: "u64",
                recv_sequence: "u64",
                auth_sequence: "FlatMap<AccountName, u64>",
                code_sequence: "UnsignedInt",
                abi_sequence: "UnsignedInt",
              },
              BlockchainType: {
                _enum: ["BIFROST", "EOS", "IOST"],
              },
              Precision: "u32",
              BridgeAssetSymbol: {
                blockchain: "BlockchainType",
                symbol: "Vec<u8>",
                precision: "Precision",
              },
              PublicKey: {
                type_: "UnsignedInt",
                data: "[u8;33]",
              },
              ProducerKey: {
                producer_name: "AccountName",
                block_signing_key: "PublicKey",
              },
              ProducerSchedule: {
                version: "u32",
                producers: "Vec<ProducerKey>",
              },
              bridgeEosSignature: {
                type_: "UnsignedInt",
                data: "[u8;65]",
              },
              BlockTimestamp: "(u32)",
              Extension: "(u16, Vec<u8>)",
              BlockHeader: {
                timestamp: "BlockTimestamp",
                producer: "AccountName",
                confirmed: "u16",
                previous: "Checksum256",
                transaction_mroot: "Checksum256",
                action_mroot: "Checksum256",
                schedule_version: "u32",
                new_producers: "Option<ProducerSchedule>",
                header_extensions: "Vec<Extension>",
              },
              SignedBlockHeader: {
                block_header: "BlockHeader",
                producer_signature: "bridgeEosSignature",
              },
              Checksum256Array: "Vec<Checksum256>",
              IncrementalMerkle: {
                _node_count: "u64",
                _active_nodes: "Checksum256Array",
              },
              TxSig: {
                signature: "Vec<u8>",
                author: "AccountId",
              },
              MultiSig: {
                signatures: "Vec<TxSig>",
                threshold: "u8",
              },
              MultiSigTx: {
                chain_id: "Vec<u8>",
                raw_tx: "Vec<u8>",
                multi_sig: "MultiSig",
                action: "Action",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Sent: {
                tx_id: "Vec<u8>",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Succeeded: {
                tx_id: "Vec<u8>",
              },
              Failed: {
                tx_id: "Vec<u8>",
                reason: "Vec<u8>",
              },
              TxOut: {
                _enum: {
                  Initialized: "MultiSigTx",
                  Created: "MultiSigTx",
                  SignComplete: "MultiSigTx",
                  Sent: "Sent",
                  Succeeded: "Succeeded",
                  Failed: "Failed",
                },
              },
              TransactionStatus: {
                _enum: ["Initialized", "Created", "SignComplete", "Sent", "Succeeded", "Failed"],
              },
              ProducerAuthoritySchedule: {
                version: "u32",
                producers: "Vec<ProducerAuthority>",
              },
              ProducerAuthority: {
                producer_name: "ActionName",
                authority: "BlockSigningAuthority",
              },
              BlockSigningAuthority: "(UnsignedInt, BlockSigningAuthorityV0)",
              BlockSigningAuthorityV0: {
                threshold: "u32",
                keyWeights: "Vec<KeyWeight>",
              },
              KeyWeight: {
                key: "PublicKey",
                weight: "u16",
              },
              BancorPool: {
                currency_id: "CurrencyId",
                token_pool: "Balance",
                vstoken_pool: "Balance",
                token_ceiling: "Balance",
                token_base_supply: "Balance",
                vstoken_base_supply: "Balance",
              },
              IostAction: {
                contract: "Vec<u8>",
                action_name: "Vec<u8>",
                data: "Vec<u8>",
              },
              IostMultiSigTx: {
                chain_id: "i32",
                raw_tx: "Vec<u8>",
                multi_sig: "MultiSig",
                action: "IostAction",
                from: "AccountId",
                asset_id: "AssetId",
              },
              Processing: {
                tx_id: "Vec<u8>",
                multi_sig_tx: "IostMultiSigTx",
              },
              IostTxOut: {
                _enum: {
                  Initial: "IostMultiSigTx",
                  Generated: "IostMultiSigTx",
                  Signed: "IostMultiSigTx",
                  Processing: "Processing",
                  Success: "Vec<u8>",
                  Fail: "Failed",
                },
              },
              PalletBalanceOf: "Balance",
              NumberOrHex: {
                _enum: {
                  Number: "u64",
                  Hex: "U256",
                },
              },
              ExtraFeeName: {
                _enum: ["SalpContribute", "NoExtraFee"],
              },
              IsExtended: "bool",
              SystemPalletId: "PalletId",
              TrieIndex: "u32",
              FundInfo: {
                raised: "Balance",
                cap: "Balance",
                first_slot: "LeasePeriod",
                last_slot: "LeasePeriod",
                trie_index: "TrieIndex",
                status: "FundStatus",
              },
              RedeemStatus: "BalanceOf",
              FundStatus: {
                _enum: {
                  Ongoing: 0,
                  Retired: 1,
                  Success: 2,
                  Failed: 3,
                  RefundWithdrew: 4,
                  RedeemWithdrew: 5,
                  End: 6,
                },
              },
              ContributionStatus: {
                _enum: ["Idle", "Refunded", "Unlocked", "Refunding", "Contributing"],
              },
              CrowdloanContributeCall: {
                _enum: {
                  CrowdloanContribute: "ContributeCall",
                },
              },
              ContributeCall: {
                _enum: {
                  Contribute: "Contribution",
                },
              },
              Contribution: {
                index: "ParaId",
                value: "BalanceOf",
                signature: "Option<MultiSignature>",
              },
              Withdraw: {
                who: "AccountIdOf",
                index: "ParaId",
              },
              WithdrawCall: {
                _enum: {
                  Withdraw: "Withdraw",
                },
              },
              ParachainTransactProxyType: {
                _enum: {
                  Primary: 0,
                  Derived: 1,
                },
              },
              ParachainDerivedProxyAccountType: {
                _enum: {
                  Salp: 0,
                  Staking: 1,
                },
              },
              Keys: "SessionKeys1",
              ParachainTransactType: {
                _enum: {
                  Xcm: 0,
                  Proxy: 1,
                },
              },
              RpcContributionStatus: {
                _enum: {
                  Idle: 0,
                  Contributing: 1,
                  Refunded: 2,
                  Unlocked: 3,
                  Redeemed: 4,
                },
              },
              RewardRecord: {
                account_id: "AccountId",
                record_amount: "Balance",
              },
              PoolId: "u32",
              SwapFee: "u128",
              PoolDetails: {
                owner: "AccountId",
                swap_fee_rate: "SwapFee",
                active: "bool",
              },
              PoolWeight: "Balance",
              PoolToken: "u128",
              PoolCreateTokenDetails: {
                token_id: "AssetId",
                token_balance: "Balance",
                token_weight: "PoolWeight",
              },
              MaxLocksOf: "u32",
              BifrostVestingInfo: {
                locked: "Balance",
                per_block: "Balance",
                starting_block: "BlockNumber",
              },
              OracleKey: "CurrencyId",
              BlockNumberFor: "BlockNumber",
              OrderId: "u64",
              OrderInfo: {
                owner: "AccountIdOf",
                vsbond: "CurrencyId",
                supply: "u128",
                remain: "u128",
                unit_price: "U64F64",
                order_id: "OrderId",
                order_state: "OrderState",
              },
              OrderState: {
                _enum: ["InTrade", "Revoked", "Clinchd"],
              },
              U64F64: "u128",
              ZenlinkAssetId: {
                chain_id: "u32",
                asset_type: "u8",
                asset_index: "u64",
              },
              ZenlinkAssetBalance: "u128",
              PairInfo: {
                asset0: "ZenlinkAssetId",
                asset1: "ZenlinkAssetId",
                account: "AccountId",
                totalLiquidity: "ZenlinkAssetBalance",
                holdingLiquidity: "ZenlinkAssetBalance",
                reserve0: "ZenlinkAssetBalance",
                reserve1: "ZenlinkAssetBalance",
                lpAssetId: "ZenlinkAssetId",
              },
              PairMetadata: {
                pair_account: "AccountId",
                target_supply: "ZenlinkAssetBalance",
              },
              BootstrapParamter: {
                min_contribution: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                target_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                accumulated_supply: "(ZenlinkAssetBalance, ZenlinkAssetBalance)",
                end_block_number: "BlockNumber",
                pair_account: "AccountId",
              },
              PairStatus: {
                _enum: {
                  Trading: "PairMetadata",
                  Bootstrap: "BootstrapParamter",
                  Disable: null,
                },
              },
              TokenSymbol: {
                _enum: {
                  ASG: 0,
                  BNC: 1,
                  KUSD: 2,
                  DOT: 3,
                  KSM: 4,
                  ETH: 5,
                  KAR: 6,
                  ZLK: 7,
                },
              },
              CurrencyId: {
                _enum: {
                  Native: "TokenSymbol",
                  VToken: "TokenSymbol",
                  Token: "TokenSymbol",
                  Stable: "TokenSymbol",
                  VSToken: "TokenSymbol",
                  VSBond: "(TokenSymbol, ParaId, LeasePeriod, LeasePeriod)",
                  LPToken: "(TokenSymbol, u8, TokenSymbol, u8)",
                },
              },
              CurrencyIdOf: "CurrencyId",
              TAssetBalance: "Balance",
              AmountOf: "Balance",
              StorageVersion: "Releases",
              ShareWeight: "Balance",
              Currency: "CurrencyIdOf",
              Amount: "AmountOf",
              TransferOriginType: {
                _enum: {
                  FromSelf: 0,
                  FromRelayChain: 1,
                  FromSiblingParaChain: 2,
                },
              },
              PoolType: {
                _enum: {
                  Mining: 0,
                  Farming: 1,
                  EBFarming: 2,
                },
              },
              PoolState: {
                _enum: {
                  UnCharged: 0,
                  Charged: 1,
                  Ongoing: 2,
                  Retired: 3,
                  Dead: 4,
                },
              },
              DepositData: {
                deposit: "Balance",
                gain_avgs: "BTreeMap<CurrencyId, FixedU128>",
                update_b: "BlockNumber",
              },
              RewardData: {
                total: "Balance",
                per_block: "Balance",
                claimed: "Balance",
                gain_avg: "FixedU128",
              },
              AssetInstance: "AssetInstanceV1",
              MultiAsset: "MultiAssetV1",
              Xcm: "XcmV1",
              XcmOrder: "XcmOrderV1",
              MultiLocation: "MultiLocationV1",
              XcmError: "XcmErrorV1",
              Response: "ResponseV1",
            },
          },
        ],
        alias: {
          tokens: {
            AccountData: "OrmlAccountData",
            BalanceLock: "OrmlBalanceLock",
          },
        },
      },
    },
  },
};
export const acala_type_definition = typesBundleForPolkadot;
export const karura_type_defition = typesBundleForPolkadot;
