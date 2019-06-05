describe('Mixer test', () => {
     const dappAddress = "3N3st6Cp9ZLz8kmT33EY41AVjwKqBVebvyq"

      const hash = "8N5gCoRKcCD4BxJNGn2kKUzMBieetEh4r7DUMHa1m2gq"

      it('Deposit funds', async function(){
         const tx = invokeScript({ fee: 900000, dApp: dappAddress, call:{function:"deposit",args:[{"type": "binary", "value": hash}]},
             payment: [{amount: 1000000, assetId: null}]})
         await broadcast(tx)
         await waitForTx(tx.id)
     })
 })