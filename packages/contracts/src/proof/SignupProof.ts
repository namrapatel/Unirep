import { Circuit, Prover } from '@unirep/circuits'
import { SnarkProof } from '@unirep/crypto'
import { BigNumberish } from 'ethers'
import { BaseProof } from './BaseProof'

/**
 * The sign up proof structure that helps to query the public signals
 */
export class SignupProof extends BaseProof {
    readonly idx = {
        identityCommitment: 0,
        globalStateTreeLeaf: 1,
        attesterId: 2,
        epoch: 3,
    }

    public identityCommitment: BigNumberish
    public globalStateTreeLeaf: BigNumberish
    public attesterId: BigNumberish
    public epoch: BigNumberish

    /**
     * @param _publicSignals The public signals of the user sign up proof that can be verified by the prover
     * @param _proof The proof that can be verified by the prover
     * @param prover The prover that can verify the public signals and the proof
     */
    constructor(
        _publicSignals: BigNumberish[],
        _proof: SnarkProof,
        prover?: Prover
    ) {
        super(_publicSignals, _proof, prover)
        this.identityCommitment = _publicSignals[this.idx.identityCommitment]
        this.globalStateTreeLeaf = _publicSignals[this.idx.globalStateTreeLeaf]
        this.attesterId = _publicSignals[this.idx.attesterId]
        this.epoch = _publicSignals[this.idx.epoch]
        this.circuit = Circuit.signup
    }
}