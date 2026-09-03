cd /d "c:\Users\abdur\OneDrive\Desktop\Abdurrahman\Abdurrahman_Developer\Techily_Fly\Techily_Fly_International\WebAndApp\Web"
npx @cloudflare/next-on-pages > build_log.txt 2>&1
npx wrangler pages deploy .vercel/output/static --project-name techilyflyinternational >> build_log.txt 2>&1
