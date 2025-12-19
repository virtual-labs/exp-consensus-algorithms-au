<p>In this simulation, we will explore two different consensus algorithms: Proof of Work (PoW) and Proof of Stake (PoS).</p>

<h3>Proof of Stake (PoS) Workflow</h3>

<p>In this simulation, Proof of Stake (PoS) demonstrates how validators are selected based on stake and how blocks are created automatically from pending transactions.</p>

<h4>Step 1: Configure Proof of Stake</h4>
<ul>
  <li>Select <b>Proof of Stake (PoS)</b> as the consensus mechanism.</li>
  <li>Distribute the <b>stake percentages</b> among all nodes.
    <ul>
      <li>The total stake must be exactly 100% to proceed.</li>
      <li>Nodes with higher stake have a higher probability of being selected as the validator.</li>
    </ul>
  </li>
  <li>Click <b>Confirm Configuration</b>, then click <b>Proceed to Next Step</b>.</li>
</ul>
<div><img src="./images/step1Pos.png" alt="Configure Consensus" style="width: 40%;"></div>
<p>At this stage, the network is initialized with stake-based validator selection.</p>

<h4>Step 2: Create and Broadcast a Transaction</h4>
<ul>
  <li>Select a <b>Sender</b> and <b>Receiver</b> from the dropdown menus.</li>
  <li>Enter the <b>transaction amount</b> (or use the quick-add buttons).</li>
  <li>Click <b>Broadcast Transaction</b>.</li>
  <li>The transaction is added to the <b>mempool</b>, which temporarily stores pending transactions.</li>
</ul>
<div><img src="./images/step2Pos.png" alt="Create Transactions" style="width: 80%;"></div>
<p>Broadcasting the first transaction automatically starts the block creation countdown timer.</p>

<h4>Step 3: Validator Selection and Block Countdown</h4>
<ul>
  <li>Once a transaction enters the <b>mempool</b>:
    <ul>
      <li>A <b>validator</b> is selected automatically based on stake distribution.</li>
      <li>The selected validator is highlighted in the network view.</li>
    </ul>
  </li>
  <li>A countdown timer appears indicating when the next block will be created.</li>
  <li>You may add more transactions during this waiting period; they will be included in the same block.</li>
</ul>
<div><img src="./images/step3Pos.png" alt="Validator Selection" style="width: 80%;"></div>
<p>In PoS, the node with the highest stake has the greatest chance of being selected as the validator.</p>

<h4>Step 4: Block Creation and State Update</h4>
<ul>
  <li>When the timer ends:
    <ul>
      <li>The selected <b>validator</b> creates a new block using the <b>mempool</b> transactions.</li>
      <li>The block is added to the blockchain.</li>
      <li><b>Sender</b> and <b>receiver</b> balances are updated.</li>
      <li>The <b>mempool</b> is cleared and ready for new transactions.</li>
    </ul>
  </li>
  <li>A success message confirms that the block has been added.</li>
</ul>
<div><img src="./images/step4Pos.png" alt="Block Creation Success" style="width: 80%;"></div>
<p>The system is now ready for the next set of transactions and block formation.</p>

<hr>

<h3>Proof of Work (PoW) Workflow</h3>

<p>In this simulation, Proof of Work demonstrates how miners compete based on difficulty and how blocks are created after a mining delay.</p>

<h4>Step 1: Configure Proof of Work</h4>
<ul>
  <li>Select <b>Proof of Work (PoW)</b> as the consensus mechanism.</li>
  <li>Set the <b>Difficulty level</b> (1–10) using the slider.
    <ul>
      <li>Higher difficulty increases the expected time to mine a block.</li>
    </ul>
  </li>
  <li>Click <b>Confirm Configuration</b>, then click <b>Proceed to Next Step</b>.</li>
</ul>
<div><img src="./images/step1POW.png" alt="Configure Consensus" style="width: 40%;"></div>
<p>This step initializes the network with a mining difficulty that controls block creation time.</p>

<h4>Step 2: Create and Broadcast a Transaction</h4>
<ul>
  <li>Select a <b>Sender</b> and <b>Receiver</b> from the dropdown menus.</li>
  <li>Enter the <b>transaction amount</b> (or use quick-add buttons).</li>
  <li>Click <b>Broadcast Transaction</b>.</li>
  <li>The transaction is added to the <b>mempool</b> as a pending transaction.</li>
</ul>
<div>
  <img src="./images/step2POW.png" alt="Create Transactions" style="width: 80%;">
</div>
<p>Broadcasting the first transaction starts the mining countdown timer.</p>

<h4>Step 3: Mining Process and Miner Selection</h4>
<ul>
  <li>Once the <b>mempool</b> contains a transaction:
    <ul>
      <li>A mining timer appears showing the time remaining for block creation.</li>
      <li>All nodes act as miners and attempt to solve the puzzle.</li>
    </ul>
  </li>
  <li>After the waiting period:
    <ul>
      <li>One node is selected as the <b>miner</b> (shown with a “Miner” label).</li>
      <li>The selection is influenced by the configured difficulty and simulated mining effort.</li>
    </ul>
  </li>
</ul>
<div><img src="./images/step3POW.png" alt="Mining Process" style="width: 80%;"></div>
<p>In PoW, miners try many nonces; higher difficulty increases the expected mining time.</p>

<h4>Step 4: Block Creation and Network Update</h4>
<ul>
  <li>When mining completes:
    <ul>
      <li>The selected <b>miner</b> creates a new block containing the <b>mempool</b> transactions.</li>
      <li>The block is added to the blockchain.</li>
      <li><b>Sender</b> and <b>receiver</b> balances are updated.</li>
      <li>The <b>mempool</b> is cleared and ready for new transactions.</li>
    </ul>
  </li>
  <li>A confirmation message indicates that the block has been successfully added.</li>
</ul>
<div><img src="./images/step4POW.png" alt="Block Creation Success" style="width: 80%;"></div>
<p>The network is now ready to repeat the mining cycle for the next block.</p>