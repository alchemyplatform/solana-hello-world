import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaHelloWorld } from "../target/types/solana_hello_world";
import * as assert from "assert";

describe("solana-hello-world", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace
    .SolanaHelloWorld as Program<SolanaHelloWorld>;
});
