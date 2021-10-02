# Debug Log 101

Cars have check oil lights. Nodes have debug logs. This section aims to help you understand what your debug log is trying to tell you.

## UpdateTip

The `UpdateTip` log line is probably the most frequent log line one will see when running a node. It is emitted when your node validates a new block which increases the height of your copy of your validated blockchain.

The source code for this function can be [seen in the bitcoin repo](https://github.com/bitcoin/bitcoin/blob/b75f2ad72db6db93665c66279a4c9e8d5d89f027/src/validation.cpp#L2429-L2476).

```log
2020-08-14T22:07:12Z UpdateTip: new best=000000000000000000072bf2a9af1800ce6f40757e0d8297b4c7760df905e31a height=596624 version=0x20800000 log2_work=91.134654 tx=458945132 date='2019-09-26T04:02:33Z' progress=0.825751 cache=140.4MiB(1033026txo)
```


Below we elaborate on each variable you see in the `UpdateTip` log statement.

#### best

The hash of the block which your node has so far validated to be the tip of the longest chain of blocks with the most work done on it. The string is a sha256 hash of the merkle root and the leading zeros are what is targeted by the difficulty that blockchain was at the time the block got mined.

#### height

This is the height at which the validated block height is currently at. It correlates to the [best hash string](#best).

Can be seen in the [Bitcoin repo](https://github.com/bitcoin/bitcoin/blob/54f812d9d29893c690ae06b84aaeab128186aa36/src/chain.h#L149-L150).

#### version

The version is hexidecimal 4 byte value that miners can use to signal which consensus rules their are in support of. It forms a part of the block header and part of Bitcoins consensus protocol.

<!-- Mastering Bitcoin covers this will https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch10.asciidoc -->

#### log2_work

You know the saying the valid chain has the most work. The `log2_work` string in your debug log is actually the log<sub>2</sub> of the work done by the chain up until the corresponding block height. log<sub>2</sub>(nChainWork)

The definition of `nChainWork` can be seen in the [bitcoin repo](https://github.com/bitcoin/bitcoin/blob/54f812d9d29893c690ae06b84aaeab128186aa36/src/chain.h#L161-L162).

#### tx

This tells you the number of accumulated transactions from the tip of the current block till the genesis block. It is a currently defined as a 32-bit positive number.

Can be seen in [the bitcoin repo](https://github.com/bitcoin/bitcoin/blob/54f812d9d29893c690ae06b84aaeab128186aa36/src/chain.h#L168-L171).

#### date

Date that the block was mined. This string is a ISO 8601 format.

#### progress

Estimated progress that your node has made in syncing the chain. This value is calculated by dividing the number of transactions your node has validate and the number of transactions being reported at the tip of the best chain on the Bitcoin network.

Function can be seen on the [bitcoin repo](https://github.com/bitcoin/bitcoin/blob/b75f2ad72db6db93665c66279a4c9e8d5d89f027/src/validation.cpp#L5193-L5210).

#### cache

Ask the closest Bitcoiner you know what the `cache` item in the `UpdateTip` log line means.

---

## New outbound peer

```log
2020-08-14T21:46:49Z New outbound peer connected: version: 70015, blocks=643740, peer=28 (full-relay)
```

## Ping Timeout

Ping timeouts happen when a node lose a connection to a peer.

Your node is just one of many nodes that collaborate to keep consensus on the state of the Bitcoin blockchain. A healthy node is a well connected node which can send a receive messages with a diverse set of peers to verify the current state of the valid Bitcoin blockchain with the most work on it.

For a node to know whether it is still connected to a peer it will need to ping it's peer every once in a while. Think of pings as you checking in on a colleague at the office during a productive work day.

Ping timeouts happen when a certain amount of time goes by without a node getting a response back from it's peer after sending it a ping.

```log
2020-08-14T22:06:45Z ping timeout: 1200.000778s
```

The log shows you the amount of time that went by without getting a response back from a peer. The [`TIMEOUT_INTERVAL`](https://github.com/bitcoin/bitcoin/blob/bd00d3b1f2036893419d1e8c514a8af2c4e4b1fb/src/net.h#L50-L51) is set to 1200 seconds (20 minutes). You will notice that the ping timeout is long enough to fit prime time TV show episode. This allows a well connected node to not spend most of it's time responding to pings from it's peers and spend that time looking out for the next tip of the blockchain. 

The ping message is an unsigned 64-bit integer. When your node pings a peer it sends it a random nonce. The peer would respond with this nonce to acknowledge your ping. 

Your node [disconnects to the peer](https://github.com/bitcoin/bitcoin/blob/bd00d3b1f2036893419d1e8c514a8af2c4e4b1fb/src/net.cpp#L1168) that doesn't respond to it's ping in a timely fashion. Which is how you get the ping timeout log line.

##  Pre-allocating block

```log
2020-08-14T22:07:14Z Pre-allocating up to position 0x2000000 in blk01808.dat
```


## Leaving block file

While validating the blockchain your node stores the blocks in block files. Which can be found in the "blocks" data directory which your bitcoin daemon is running in.  

```log
2020-08-14T22:07:13Z Leaving block file 1807: CBlockFileInfo(blocks=141, size=133455104, heights=596273...596809, time=2019-09-23...2019-09-27)
```

## Synchronizing blockheaders

```log
2020-08-14T21:46:26Z Synchronizing blockheaders, height: 643740 (~100.00%)
```

## Imported mempool transactions from disk

```log
2020-08-14T21:46:26Z Imported mempool transactions from disk: 0 succeeded, 0 failed, 0 expired, 0 already there
```

## Loaded best chain

```log
2020-08-14T21:05:57Z Loaded best chain: hashBestChain=0000000000000000000f1210976cdf1960e131ab646189cfe98cb3ab7d7f592f height=596367 date=2019-09-24T1
5:06:45Z progress=0.824792
```

## Rolling Forward

```log
2020-08-14T21:05:13Z Rolling forward 0000000000000000000f1210976cdf1960e131ab646189cfe98cb3ab7d7f592f (596367)
```

## FlushStateToDisk

```log
2020-08-15T20:04:11Z FlushStateToDisk: write coins cache to disk (5409694 coins, 754134kB) started
2020-08-15T20:04:56Z FlushStateToDisk: write coins cache to disk (5409694 coins, 754134kB) completed (45.11s)
```

## ThreadRPCServer

```log
2020-08-14T20:46:18Z ThreadRPCServer incorrect password attempt from 127.0.0.1:40760
```
