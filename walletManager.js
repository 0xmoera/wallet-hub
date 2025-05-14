// walletManager.js

class WalletManager {
    constructor() {
        this.wallets = []; // Array to store wallet objects
    }

    // Add a new wallet
    addWallet(wallet) {
        this.wallets.push(wallet);
        console.log(`Wallet ${wallet.address} added successfully.`);
    }

    // Remove a wallet by address
    removeWallet(address) {
        this.wallets = this.wallets.filter(wallet => wallet.address !== address);
        console.log(`Wallet ${address} removed successfully.`);
    }

    // List all wallets
    listWallets() {
        console.log("Current wallets:");
        this.wallets.forEach(wallet => {
            console.log(`Address: ${wallet.address}`);
        });
    }
}

// Example of using WalletManager class
const walletManager = new WalletManager();
walletManager.addWallet({ address: '0x123abc...', balance: 100 });
walletManager.addWallet({ address: '0x456def...', balance: 200 });
walletManager.listWallets();
walletManager.removeWallet('0x123abc...');
walletManager.listWallets();

