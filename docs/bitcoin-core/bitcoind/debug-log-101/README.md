# Debug Log 101

## Log Format

## UpdateTip

```log
2020-08-14T22:07:12Z UpdateTip: new best=000000000000000000072bf2a9af1800ce6f40757e0d8297b4c7760df905e31a height=596624 version=0x20800000 log2_work=91.134654 tx=458945132 date='2019-09-26T04:02:33Z' progress=0.825751 cache=140.4MiB(1033026txo)
```

## Leaving block file

```log
2020-08-14T22:07:13Z Leaving block file 1807: CBlockFileInfo(blocks=141, size=133455104, heights=596273...596809, time=2019-09-23...2019-09-27)
```

##  Pre-allocating block

```log
2020-08-14T22:07:14Z Pre-allocating up to position 0x2000000 in blk01808.dat
```

## Ping Timeout

```log
2020-08-14T22:06:45Z ping timeout: 1200.000778s
```

## Synchronizing blockheaders

```log
2020-08-14T21:46:26Z Synchronizing blockheaders, height: 643740 (~100.00%)
```

## New outbound peer

```log
2020-08-14T21:46:49Z New outbound peer connected: version: 70015, blocks=643740, peer=28 (full-relay)
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