# Upload Web Telegram Bot

A Telegram bot to manage content for the [Intro Camejo Website](https://intro-camejo.github.io/web/). Currently supports uploading YouTube videos through Telegram commands.

## Features

- Upload YouTube videos
- List all videos
- Edit video details
- Delete videos
- Access control for authorized users

## Prerequisites

- Docker and Docker Compose installed
- Firebase credentials in `./certs` directory
- `.env` file with required environment variables:
  ```
  TELEGRAM_BOT_TOKEN=your_token_here
  FIREBASE_CERTS_PATH=path_to_certs
  ALLOWED_USERS=user1,user2
  SUPER_USERS=admin1
  ```

## Running the Bot

### Development
```bash
npm install
npm run dev
```

### Production (Docker)
```bash
# Build the container
docker-compose build

# Run the bot
docker-compose up -d

# View logs
docker-compose logs -f
```

## Available Commands

- `/addvideo` - Add a new YouTube video
- `/getvideos` - List all videos
- `/editvideo` - Edit an existing video
- `/deletevideo` - Remove a video

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

[MIT](LICENSE)