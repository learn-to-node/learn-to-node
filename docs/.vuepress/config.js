module.exports = {
    dest: 'dist',
    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/UWKaLgmda/learn-to-node',
        searchPlaceholder: 'run which numbers?',
        editLinks: true,
        docsDir: 'docs',
        nav: [
            { 
                text: 'Home', 
                link: '/' 
            },
            { 
                text: 'Bitcoin Core', 
                link: '/bitcoin-core/' 
            },
            { 
                text: 'LND', 
                link: '/lnd/' 
            }
        ],
        sidebar: {
            '/bitcoin-core/': [
                '/',
                '',
                '/bitcoin-core/getting-started/',
                {
                    title: "Bitcoin Daemon",
                    path: '/bitcoin-core/bitcoind/',
                    collapsable: false,
                    children: [
                        '/bitcoin-core/bitcoind/debug-log-101/'
                    ]
                },
                '/bitcoin-core/bitcoin-cli/'
            ],
            '/lnd/': [
                '/',
                ''
            ],
            '/': [
                {
                    title: "Select Your Fighter",
                    collapsable: false,
                    children: [
                        '/bitcoin-core/',
                        '/lnd/',
                        '/c-lightning/'
                    ]
                }
            ]
        }
    }
}
