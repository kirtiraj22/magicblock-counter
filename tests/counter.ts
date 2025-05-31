import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Counter } from "../target/types/counter";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { GetCommitmentSignature } from "@magicblock-labs/ephemeral-rollups-sdk";

const SEED_TEST_PDA = "test-pda";

describe("counter", () => {
	const provider = anchor.AnchorProvider.env();
	anchor.setProvider(provider);

	const providerEphemeralRollup = new anchor.AnchorProvider(
		new anchor.web3.Connection(
			process.env.PROVIDER_ENDPOINT || "https://devnet.magicblock.app/",
			{
				wsEndpoint:
					process.env.WS_ENDPOINT || "wss://devnet.magicblock.app/",
			}
		),
		anchor.Wallet.local()
	);

	console.log("Base layer connection: ", provider.connection.rpcEndpoint);
	console.log(
		"Ephemeral rollup connection: ",
		providerEphemeralRollup.connection.rpcEndpoint
	);

	console.log(`Current SOL public key : ${anchor.Wallet.local().publicKey}`);

	before(async function() {
		const balance = await provider.connection.getBalance(anchor.Wallet.local().publicKey)
		console.log('Current balance is ', balance / LAMPORTS_PER_SOL, 'SOL', '\n')
	})

	const program = anchor.workspace.Counter as Program<Counter>
	const [pda] = anchor.web3.PublicKey.findProgramAddressSync(
		[Buffer.from(SEED_TEST_PDA)],
		program.programId
	)

	console.log("Program ID : ", program.programId.toString())
	console.log("Counter PDA: ", pda.toString())

	it("Initialize counter on solana", async () => {
		const start = Date.now()
		const txHash = await program.methods.initialize().accounts({
			// @ts-ignore
			counter: pda,
			user: provider.wallet.publicKey,
			systemProgram: anchor.web3.SystemProgram.programId
		}).rpc({ skipPreflight: true })

		const duration = Date.now() - start;
		console.log(`${duration}ms (Base Layer) Initialize txHash: ${txHash}`)
	})
});
