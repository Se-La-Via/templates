# CoinGecko-AI

<img src="https://i.imgur.com/ZAxWAoD.png" alt="cover_image" width="0" />

CoinGecko-AI: Your intelligent companion for real-time cryptocurrency insights and price tracking provided Coingecko API's.

CoinGecko-AI is a cutting-edge project that combines the power of artificial intelligence with real-time cryptocurrency data from CoinGecko. This innovative tool provides users with intelligent insights on crypto market data. CoinGecko-AI offers a unique and intuitive way to navigate the complex world of digital assets, making it an invaluable resource for both novice and experienced crypto enthusiasts.

[![Agent Demo](https://img.shields.io/badge/Demo-Visit%20Demo-orange)](https://wallet.bitte.ai/smart-actions/prompt/what%20can%20you%20help%20me%20with?mode=debug&agentId=coingecko-ai.vercel.app)
[![Demo](https://img.shields.io/badge/Demo-Visit%20Demo-brightgreen)](https://coingecko-ai.vercel.app/)
[![Deploy](https://img.shields.io/badge/Deploy-Deploy%20Now-blue)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMintbase%2Ftemplates%2Ftree%2Fmain%2Fcoingecko-ai-plugin-advanced)

**Tooling:**

[![Use Case](https://img.shields.io/badge/Use%20Case-Cryptocurrency%20Analysis,Price%20Prediction-blue)](#)
[![Tools](https://img.shields.io/badge/Tools-CoinGecko%20API,TensorFlow-blue)](#)
[![Framework](https://img.shields.io/badge/Framework-NextJS%2014-blue)](#)

## Project Walkthrough

CoinGecko-AI is built using Next.js 14 and exposes an API Reference using [Scalar](https://scalar.com/).

To run the project locally, you have two options:

### Local API Testing

To test the Plugin APIs locally:

1. Clone this template from the repository tree: `git clone --no-checkout https://github.com/Mintbase/templates.git && cd templates && git sparse-checkout set coingecko-ai-plugin-advanced && git checkout && cd coingecko-ai-plugin-advanced`
2. Install dependencies: `pnpm install`
3. Set up environment variables: Copy `.env.example` to `.env.local` and provide your CoinGecko API key.
4. Run the development server: `pnpm run dev`
5. Open `http://localhost:3000` to test the API using the Scalar API Reference.

### Testing on Bitte Wallet Playground

To test the plugin with a tunnel service and Bitte wallet:

1. Run the development server with tunnel service: `pnpm run dev:make-agent`
2. This will start both the Next.js server and a `make-agent` server, allowing for external requests to your agent from the Bitte Playground.
3. Follow the terminal instructions to temporarily register and deploy your agent and receive a URL to test your agent.
4. To close your session, press `CTRL + C` in the terminal. Agents registered using `make-agent dev` are automatically removed from the Bitte Registry.

## Deployment

To deploy CoinGecko-AI on Vercel:

1. Fork the repository to your GitHub account.
2. Sign up for a Vercel account if you haven't already.
3. Click the "Deploy" button above or go to <https://vercel.com/new>.
4. Select your forked repository.
5. Configure the following environment variables:
   - `COINGECKO_API_KEY`: Your CoinGecko API key
6. Click "Deploy" and wait for the build to complete.
7. Deploy your Agent Plugin using `make-agent` with your Vercel deployment URL. For more instructions, see [make-agent Docs](https://docs.bitte.ai/agents/make-agent).

Once deployed, you can access your CoinGecko-AI instance at the provided Vercel URL. You can customize the application by modifying the source code and pushing changes to your repository. Vercel will automatically redeploy your application with the latest changes.

For any issues or questions regarding deployment, please refer to the Vercel documentation or open an issue in the project repository.

## Bitte Agent Docs

[Bitte Agent Quick Start](https://docs.bitte.ai/agents/quick-start)

<img src="https://i.imgur.com/dfI9OSL.png" alt="detail_image" width="0"/>
